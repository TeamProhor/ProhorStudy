import type React from "react";
import {
  IconCode,
  IconLearn,
  IconPlan,
  IconWrite,
} from "@/components/ui/icons";

function ChatChip({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className="inline-flex items-center gap-[5px] h-[31px] px-[13px] rounded-lg border-none bg-chip-bg text-text-secondary font-sans text-[13.5px] font-normal cursor-pointer transition-colors duration-[120ms] shadow-[0_1px_3px_rgba(0,0,0,0.09)] hover:bg-bg-hover-strong hover:text-text-primary w-full text-left">
      <div className="text-text-muted shrink-0 flex items-center">{icon}</div>
      {text}
    </button>
  );
}

export function ChatChips({
  setInputValue,
}: {
  setInputValue: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-[7px] mt-[10px] md:mt-[14px]">
      <ChatChip onClick={() => setInputValue("Write a Python function that ")} icon={<IconCode />} text="Code" />
      <ChatChip onClick={() => setInputValue("Write an essay about ")} icon={<IconWrite />} text="Write" />
      <ChatChip onClick={() => setInputValue("Explain how ")} icon={<IconLearn />} text="Learn" />
      <ChatChip onClick={() => setInputValue("Help me plan ")} icon={<IconPlan />} text="Life stuff" />
    </div>
  );
}
