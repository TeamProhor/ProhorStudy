"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRealtimeChat } from "@/hooks/use-realtime-chat";

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
    <div className="input-box">
      <div className="input-pad">
        <textarea
          ref={textareaRef}
          className="input-textarea"
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
        <div className="input-toolbar">
          <button className="toolbar-btn" title="Add files">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
          </button>
          <div style={{ flex: 1 }}></div>
          <div style={{ position: "relative" }}>
            <button className="model-selector" onClick={() => setDropdownOpen(!isDropdownOpen)}>
              <span>{selectedModel}</span><span className="dim">Low</span>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ opacity: .55, marginLeft: 2 }}>
                <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="model-dropdown open" onClick={(e) => e.stopPropagation()}>
                <button className="model-item selected" onClick={() => { setSelectedModel("Sonnet 4.6"); setDropdownOpen(false); }}>
                  <span className="model-item-name">Claude Sonnet 4.6</span>
                  <span className="model-item-desc">Smart, fast, everyday tasks</span>
                </button>
              </div>
            )}
          </div>
          <button className="toolbar-btn" title="Voice mode" style={{ padding: "0 6px", width: "auto" }}>
            <svg width="19" height="19" viewBox="0 0 21.2 21.2" fill="currentColor">
              <rect x="0" y="7.6" height="6" width="1.2" rx="0.6"/>
              <rect x="4" y="5.6" height="10" width="1.2" rx="0.6"/>
              <rect x="8" y="2.6" height="16" width="1.2" rx="0.6"/>
              <rect x="12" y="5.6" height="10" width="1.2" rx="0.6"/>
              <rect x="16" y="2.6" height="16" width="1.2" rx="0.6"/>
              <rect x="20" y="7.6" height="6" width="1.2" rx="0.6"/>
            </svg>
          </button>
          <button className={isStreaming ? "stop-btn" : "send-btn"} onClick={onSend} disabled={!inputValue.trim()}>
            {isStreaming ? (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><rect x="2" y="2" width="8" height="8" rx="1.5"/></svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 12V3M3.5 7l4-4 4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
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
      <div className="chat-scroll" ref={scrollRef}>
        {messages.length === 0 ? (
          <div className="welcome">
            <div className="greeting">
              <svg className="claude-mark" viewBox="0 0 100 100" fill="currentColor">
                <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"/>
              </svg>
              <span>Afternoon, FrostFoe</span>
            </div>

            <div style={{ width: "100%" }}>
              <InputComponent inputValue={inputValue} setInputValue={setInputValue} onSend={handleSend} isStreaming={false} />
            </div>

            {/* Chips */}
            <div className="chips-row">
              <button className="chip" onClick={() => setInputValue("Write a Python function that ")}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"/></svg>
                Code
              </button>
              <button className="chip" onClick={() => setInputValue("Write an essay about ")}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"/></svg>
                Write
              </button>
              <button className="chip" onClick={() => setInputValue("Explain how ")}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12Z"/></svg>
                Learn
              </button>
              <button className="chip" onClick={() => setInputValue("Help me plan ")}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Z"/></svg>
                Life stuff
              </button>
            </div>
          </div>
        ) : (
          <div className="chat-inner pb-4">
            {messages.map((msg, i) => (
              <div className="msg-group" key={i}>
                {msg.user.name === "User" ? (
                  <div className="msg-user">
                    <div className="msg-user-bubble">{msg.content}</div>
                  </div>
                ) : (
                  <div className="msg-assistant">
                    <svg className="msg-assistant-avatar" viewBox="0 0 100 100" fill="currentColor">
                      <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"/>
                    </svg>
                    <div className="msg-assistant-content">
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
        <div className="input-area">
          <div className="input-area-inner">
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} onSend={handleSend} isStreaming={false} />
          </div>
        </div>
      )}
    </>
  );
}
