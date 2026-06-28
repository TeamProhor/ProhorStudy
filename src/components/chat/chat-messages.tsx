import { IconClaudeMark } from "@/components/ui/icons";

export function ChatMessages({ messages }: { messages: any[] }) {
  return (
    <div className="w-full max-w-[672px] px-2 md:px-4 flex flex-col gap-0 pb-4">
      {messages.map((msg, i) => (
        <div
          className="w-full py-3 flex flex-col gap-2 group first:pt-5"
          key={i}
        >
          {msg.user.name === "User" ? (
            <div className="flex justify-end">
              <div className="bg-msg-user-bg border-[0.5px] border-msg-user-border rounded-[18px] p-[10px_15px] text-[15px] leading-[1.55] text-text-primary max-w-[95%] md:max-w-[85%] whitespace-pre-wrap break-words">
                {msg.content}
              </div>
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
  );
}
