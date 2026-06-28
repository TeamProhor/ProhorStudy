"use client";

import { cjk } from "@streamdown/cjk";
import { code } from "@streamdown/code";
import { math } from "@streamdown/math";
import { mermaid } from "@streamdown/mermaid";
import { Streamdown } from "streamdown";
import { Logo } from "@/components/ui/logo";
import { t } from "@/lib/translations/chat";

const plugins = { code, math, mermaid, cjk };

import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m as motion,
} from "motion/react";

export function ChatMessages({
  messages,
  isThinking,
}: {
  messages: { id?: string | number; user: { name: string }; content: string }[];
  isThinking?: boolean;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full max-w-[672px] px-2 md:px-4 flex flex-col gap-0 pb-4">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full py-3 flex flex-col gap-2 group first:pt-5"
              key={msg.id || i}
            >
              {msg.user.name === "User" ? (
                <div className="flex justify-end">
                  <div className="bg-msg-user-bg border-[0.5px] border-msg-user-border rounded-[18px] p-[10px_15px] text-[15px] leading-[1.55] text-text-primary max-w-[95%] md:max-w-[85%] whitespace-pre-wrap break-words">
                    {msg.content}
                  </div>
                </div>
              ) : (
                <div className="flex gap-2 md:gap-[10px] items-start">
                  <Logo className="w-[28px] h-[28px] shrink-0 text-primary mt-[2px]" />
                  <div className="flex-1 min-w-0 msg-assistant-content text-[15px] leading-[1.55]">
                    <Streamdown plugins={plugins}>{msg.content}</Streamdown>
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {isThinking && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full py-3 flex flex-col gap-2 group"
              key="thinking"
            >
              <div className="flex gap-2 md:gap-[10px] items-start">
                <Logo className="w-[28px] h-[28px] shrink-0 text-primary mt-[2px]" />
                <output
                  className="flex-1 min-w-0 flex items-center h-[28px] text-text-secondary text-[14px]"
                  aria-label={t.thinking}
                >
                  <div className="flex gap-1 items-center">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-text-secondary/50"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-text-secondary/50"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.2,
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-text-secondary/50"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.4,
                      }}
                    />
                  </div>
                </output>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
}
