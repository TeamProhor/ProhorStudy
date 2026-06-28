"use client";
import { useEffect, useRef, useState } from "react";
import { ChatChips } from "@/components/chat/chat-chips";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";
import { IconClaudeMark } from "@/components/ui/icons";
import { useRealtimeChat } from "@/hooks/use-realtime-chat";

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
  }, []);

  return (
    <>
      <div
        className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col items-center [scrollbar-width:thin] [scrollbar-color:var(--scrollbar)_transparent]"
        ref={scrollRef}
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center pt-[10vh] md:pt-[20vh] pb-6 w-full max-w-[672px] mx-auto px-4">
            <div className="font-display text-[1.5rem] md:text-[clamp(1.75rem,1rem+2.5vw,2.4rem)] font-normal leading-[1.4] tracking-[-0.03em] text-text-secondary flex items-center gap-3 mb-7">
              <IconClaudeMark className="w-[30px] h-[30px] text-primary shrink-0" />
              <span>Afternoon, FrostFoe</span>
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
          <ChatMessages messages={messages} />
        )}
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
