import type React from "react";
import {
  IconCode,
  IconLearn,
  IconPlan,
  IconWrite,
} from "@/components/ui/icons";
import { t } from "@/lib/translations/chat";

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
      <ChatChip onClick={() => setInputValue(t.chipCodePrompt)} icon={<IconCode />} text={t.chipCode} />
      <ChatChip onClick={() => setInputValue(t.chipWritePrompt)} icon={<IconWrite />} text={t.chipWrite} />
      <ChatChip onClick={() => setInputValue(t.chipLearnPrompt)} icon={<IconLearn />} text={t.chipLearn} />
      <ChatChip onClick={() => setInputValue(t.chipPlanPrompt)} icon={<IconPlan />} text={t.chipPlan} />
    </div>
  );
}
