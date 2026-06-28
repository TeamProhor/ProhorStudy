import { useEffect, useRef, useState } from "react";
import {
  IconAddFiles,
  IconChevronDown,
  IconSend,
  IconStop,
  IconVoice,
} from "@/components/ui/icons";
import { t } from "@/lib/translations/chat";

export function ChatInput({
  inputValue,
  setInputValue,
  onSend,
  isStreaming = false,
}: {
  inputValue: string;
  setInputValue: (v: string) => void;
  onSend: () => void;
  isStreaming?: boolean;
}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(t.modelName);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 340)}px`;
    }
  }, []);

  return (
    <div className="bg-input-bg rounded-[20px] border border-transparent shadow-[var(--shadow-input)] hover:shadow-[var(--shadow-input-hover)] focus-within:shadow-[var(--shadow-input-focus)] transition-all duration-200 cursor-text relative w-full">
      <div className="flex flex-col m-2 md:m-[14px] gap-[6px] md:gap-[10px]">
        <textarea
          ref={textareaRef}
          className="font-sans text-[15px] leading-[1.55] text-text-primary bg-transparent border-none outline-none resize-none w-full min-h-[calc(1.55em*2+6px)] max-h-[340px] pt-1 px-[6px] overflow-y-auto placeholder:text-text-placeholder"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
          placeholder={t.chatInputPlaceholder}
          rows={1}
        ></textarea>
        <div className="flex items-center gap-[6px]">
          <button
            type="button"
            className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center border-none bg-transparent text-text-secondary cursor-pointer transition-colors duration-[120ms] hover:bg-bg-hover hover:text-text-primary"
            title="Add files"
          >
            <IconAddFiles />
          </button>
          <div className="flex-1"></div>
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 h-[30px] px-[6px] md:px-[10px] rounded-lg border-none bg-transparent text-text-secondary font-sans text-[12px] md:text-[13.5px] font-medium cursor-pointer whitespace-nowrap transition-colors duration-[120ms] hover:bg-bg-hover relative"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <span>{selectedModel}</span>
              <span className="text-text-muted ml-[3px]">{t.modelSpeed}</span>
              <IconChevronDown className="opacity-55 ml-0.5" />
            </button>
            {isDropdownOpen && (
              <div
                className="absolute bottom-[calc(100%+6px)] left-0 bg-bg-elevated border-[0.5px] border-border rounded-[10px] p-[6px] min-w-[240px] z-[100] shadow-[0_8px_32px_rgba(0,0,0,0.22)] block"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="flex flex-col gap-[2px] p-[9px_12px] rounded-[7px] cursor-pointer transition-colors duration-100 border-none bg-bg-hover text-left w-full group"
                  onClick={() => {
                    setSelectedModel(t.modelName);
                    setDropdownOpen(false);
                  }}
                >
                  <span className="text-[13.5px] font-medium text-primary">
                    {t.modelFullName}
                  </span>
                  <span className="text-[12px] text-text-muted">
                    {t.modelDescription}
                  </span>
                </button>
              </div>
            )}
          </div>
          <button
            type="button"
            className="w-auto px-[6px] h-7 md:h-8 rounded-lg flex items-center justify-center border-none bg-transparent text-text-secondary cursor-pointer transition-colors duration-[120ms] hover:bg-bg-hover hover:text-text-primary"
            title="Voice mode"
          >
            <IconVoice />
          </button>
          <button
            type="button"
            className={`w-8 h-8 rounded-[9px] flex items-center justify-center border-none cursor-pointer shrink-0 transition-all duration-[120ms] ${isStreaming ? "bg-bg-hover-strong text-text-secondary hover:bg-bg-hover hover:text-text-primary" : "bg-primary text-white hover:bg-primary-active disabled:opacity-40 disabled:cursor-default"}`}
            onClick={onSend}
            disabled={!inputValue.trim()}
          >
            {isStreaming ? <IconStop /> : <IconSend />}
          </button>
        </div>
      </div>
    </div>
  );
}
