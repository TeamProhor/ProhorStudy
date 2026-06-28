import React from "react";
import {
  IconIncognito,
  IconMenu,
  IconMoon,
  IconSun,
} from "@/components/ui/icons";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { t } from "@/lib/translations/chat";

function IconButton({
  children,
  onClick,
  title,
  style,
  className = "",
}: any) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      style={style}
      className={`w-[30px] h-[30px] flex items-center justify-center rounded-[7px] border-none outline-none cursor-pointer transition-colors duration-[120ms] text-text-secondary hover:bg-bg-hover hover:text-text-primary bg-transparent ${className}`}
    >
      {children}
    </button>
  );
}

export function ChatTopbar({
  isMobile,
  sidebarOpen,
  setSidebarOpen,
  theme,
  toggleTheme,
}: {
  isMobile: boolean;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  theme: string;
  toggleTheme: () => void;
}) {
  return (
    <div className="h-[44px] flex items-center justify-center relative shrink-0 md:px-0 px-3">
      {isMobile && (
        <IconButton
          style={{ position: "absolute", left: "12px" }}
          onClick={() => setSidebarOpen(true)}
        >
          <IconMenu width="20" height="20" />
        </IconButton>
      )}
      <div className="inline-flex items-center gap-[6px] h-7 px-[10px] rounded-[7px] bg-bg-hover text-[12.5px] font-medium text-text-secondary">
        {t.freePlan}
        <div className="w-[3px] h-[3px] rounded-full bg-text-muted opacity-40"></div>
        <a
          href="#"
          className="text-text-secondary underline underline-offset-[3px] decoration-text-secondary/35 hover:text-text-primary"
        >
          {t.upgrade}
        </a>
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        <AnimatedThemeToggler
          theme={theme as "light" | "dark"}
          onThemeChange={() => toggleTheme()}
          variant="circle"
          className="w-[30px] h-[30px] flex items-center justify-center rounded-[7px] border-none outline-none cursor-pointer transition-colors duration-[120ms] text-text-secondary hover:bg-bg-hover hover:text-text-primary bg-transparent"
        />
        <IconButton title={t.account}>
          <IconIncognito />
        </IconButton>
      </div>
    </div>
  );
}
