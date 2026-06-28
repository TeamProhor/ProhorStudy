"use client";
import { useState } from "react";
import { useStickToBottom } from "use-stick-to-bottom";
import { ChatChips } from "@/components/chat/chat-chips";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";
import { Logo } from "@/components/ui/logo";
import { useRealtimeChat } from "@/hooks/use-realtime-chat";
import { t } from "@/lib/translations/chat";

export default function ChatPage() {
  const { messages, sendMessage, isThinking } = useRealtimeChat({
    roomName: "claude-clone-session",
    username: "User",
  });

  const [inputValue, setInputValue] = useState("");
  const { scrollRef, contentRef } = useStickToBottom();

  const handleSend = () => {
    if (!inputValue.trim()) return;
    sendMessage(inputValue);
    setInputValue("");
  };

  return (
    <>
      <div
        className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col items-center [scrollbar-width:thin] [scrollbar-color:var(--scrollbar)_transparent]"
        ref={scrollRef}
      >
        <div ref={contentRef} className="w-full flex flex-col items-center">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center pt-[10vh] md:pt-[20vh] pb-6 w-full max-w-[672px] mx-auto px-4">
              <div className="font-display text-[1.5rem] md:text-[clamp(1.75rem,1rem+2.5vw,2.4rem)] font-normal leading-[1.4] tracking-[-0.03em] text-text-secondary flex items-center gap-3 mb-7">
                <Logo className="w-[30px] h-[30px] text-primary shrink-0" />
                <span>{t.greeting}, FrostFoe</span>
              </div>

              <div className="w-full">
                <ChatInput
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  onSend={handleSend}
                  isStreaming={false}
                />
              </div>

              {/* Chips */}
              <ChatChips setInputValue={setInputValue} />
            </div>
          ) : (
            <ChatMessages messages={messages} isThinking={isThinking} />
          )}
        </div>
      </div>

      {messages.length > 0 && (
        <div className="px-2 md:px-4 pb-2 md:pb-0 pt-1 shrink-0 relative w-full">
          <div className="w-full max-w-[672px] mx-auto">
            <ChatInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              onSend={handleSend}
              isStreaming={false}
            />
          </div>
        </div>
      )}
    </>
  );
}
