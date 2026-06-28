"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRealtimeChat } from "@/hooks/use-realtime-chat";
import {
  IconClaudeMark, IconCode, IconWrite, IconLearn, IconPlan,
  IconAddFiles, IconChevronDown, IconVoice, IconStop, IconSend
} from "@/components/ui/icons";

function InputComponent({ 
  inputValue, 
  setInputValue, 
  onSend, 
  isStreaming 
}: { 
  inputValue: string, 
  setInputValue: (v: string) => void, 
  onSend: () => void, 
  isStreaming: boolean 
}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Sonnet 4.6");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 340) + "px";
    }
  }, [inputValue]);

  return (
    <div className="bg-input-bg rounded-[20px] border border-transparent shadow-[var(--shadow-input)] hover:shadow-[var(--shadow-input-hover)] focus-within:shadow-[var(--shadow-input-focus)] transition-all duration-200 cursor-text relative w-full">
      <div className="flex flex-col m-2 md:m-[14px] gap-[6px] md:gap-[10px]">
        <textarea
          ref={textareaRef}
          className="font-sans text-[15px] leading-[1.55] text-text-primary bg-transparent border-none outline-none resize-none w-full min-h-[calc(1.55em*2+6px)] max-h-[340px] pt-1 px-[6px] overflow-y-auto placeholder:text-text-placeholder"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
          placeholder="How can I help you today?"
          rows={1}
        ></textarea>
        <div className="flex items-center gap-[6px]">
          <button className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center border-none bg-transparent text-text-secondary cursor-pointer transition-colors duration-[120ms] hover:bg-bg-hover hover:text-text-primary" title="Add files">
            <IconAddFiles />
          </button>
          <div className="flex-1"></div>
          <div className="relative">
            <button className="inline-flex items-center gap-1 h-[30px] px-[6px] md:px-[10px] rounded-lg border-none bg-transparent text-text-secondary font-sans text-[12px] md:text-[13.5px] font-medium cursor-pointer whitespace-nowrap transition-colors duration-[120ms] hover:bg-bg-hover relative" onClick={() => setDropdownOpen(!isDropdownOpen)}>
              <span>{selectedModel}</span><span className="text-text-muted ml-[3px]">Low</span>
              <IconChevronDown className="opacity-55 ml-0.5" />
            </button>
            {isDropdownOpen && (
              <div className="absolute bottom-[calc(100%+6px)] left-0 bg-bg-elevated border-[0.5px] border-border rounded-[10px] p-[6px] min-w-[240px] z-[100] shadow-[0_8px_32px_rgba(0,0,0,0.22)] block" onClick={(e) => e.stopPropagation()}>
                <button className="flex flex-col gap-[2px] p-[9px_12px] rounded-[7px] cursor-pointer transition-colors duration-100 border-none bg-bg-hover text-left w-full group" onClick={() => { setSelectedModel("Sonnet 4.6"); setDropdownOpen(false); }}>
                  <span className="text-[13.5px] font-medium text-primary">Claude Sonnet 4.6</span>
                  <span className="text-[12px] text-text-muted">Smart, fast, everyday tasks</span>
                </button>
              </div>
            )}
          </div>
          <button className="w-auto px-[6px] h-7 md:h-8 rounded-lg flex items-center justify-center border-none bg-transparent text-text-secondary cursor-pointer transition-colors duration-[120ms] hover:bg-bg-hover hover:text-text-primary" title="Voice mode">
            <IconVoice />
          </button>
          <button className={`w-8 h-8 rounded-[9px] flex items-center justify-center border-none cursor-pointer shrink-0 transition-all duration-[120ms] ${isStreaming ? "bg-bg-hover-strong text-text-secondary hover:bg-bg-hover hover:text-text-primary" : "bg-primary text-white hover:bg-primary-active disabled:opacity-40 disabled:cursor-default"}`} onClick={onSend} disabled={!inputValue.trim()}>
            {isStreaming ? (
              <IconStop />
            ) : (
              <IconSend />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

function Chip({ text, icon }: { text: string, icon: React.ReactNode }) {
  return (
    <button className="inline-flex items-center gap-[5px] h-[31px] px-[13px] rounded-lg border-none bg-chip-bg text-text-secondary font-sans text-[13.5px] font-normal cursor-pointer transition-colors duration-[120ms] shadow-[0_1px_3px_rgba(0,0,0,0.09)] hover:bg-bg-hover-strong hover:text-text-primary">
      <div className="text-text-muted shrink-0 flex items-center">
        {icon}
      </div>
      {text}
    </button>
  );
}

export default function ChatPage() {
  const { messages, sendMessage } = useRealtimeChat({
    roomName: "claude-clone-session",
    username: "User",
  });
  
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    sendMessage(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col items-center [scrollbar-width:thin] [scrollbar-color:var(--scrollbar)_transparent]" ref={scrollRef}>
        {messages.length === 0 ? (
          <div className="flex flex-col items-center pt-[10vh] md:pt-[20vh] pb-6 w-full max-w-[672px] mx-auto px-4">
            <div className="font-display text-[1.5rem] md:text-[clamp(1.75rem,1rem+2.5vw,2.4rem)] font-normal leading-[1.4] tracking-[-0.03em] text-text-secondary flex items-center gap-3 mb-7">
              <IconClaudeMark className="w-[30px] h-[30px] text-primary shrink-0" />
              <span>Afternoon, FrostFoe</span>
            </div>

            <div className="w-full">
              <InputComponent inputValue={inputValue} setInputValue={setInputValue} onSend={handleSend} isStreaming={false} />
            </div>

            {/* Chips */}
            <div className="flex flex-wrap justify-center gap-[7px] mt-[10px] md:mt-[14px]">
              <div onClick={() => setInputValue("Write a Python function that ")}>
                <Chip icon={<IconCode />} text="Code" />
              </div>
              <div onClick={() => setInputValue("Write an essay about ")}>
                <Chip icon={<IconWrite />} text="Write" />
              </div>
              <div onClick={() => setInputValue("Explain how ")}>
                <Chip icon={<IconLearn />} text="Learn" />
              </div>
              <div onClick={() => setInputValue("Help me plan ")}>
                <Chip icon={<IconPlan />} text="Life stuff" />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-[672px] px-2 md:px-4 flex flex-col gap-0 pb-4">
            {messages.map((msg, i) => (
              <div className="w-full py-3 flex flex-col gap-2 group first:pt-5" key={i}>
                {msg.user.name === "User" ? (
                  <div className="flex justify-end">
                    <div className="bg-msg-user-bg border-[0.5px] border-msg-user-border rounded-[18px] p-[10px_15px] text-[15px] leading-[1.55] text-text-primary max-w-[95%] md:max-w-[85%] whitespace-pre-wrap break-words">{msg.content}</div>
                  </div>
                ) : (
                  <div className="flex gap-2 md:gap-[10px] items-start">
                    <IconClaudeMark className="w-[28px] h-[28px] shrink-0 text-primary mt-[2px]" />
                    <div className="flex-1 min-w-0 msg-assistant-content">
                      <p>{msg.content}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {messages.length > 0 && (
        <div className="px-2 md:px-4 pb-2 md:pb-0 pt-1 shrink-0 relative w-full">
          <div className="w-full max-w-[672px] mx-auto">
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} onSend={handleSend} isStreaming={false} />
          </div>
        </div>
      )}
    </>
  );
}
