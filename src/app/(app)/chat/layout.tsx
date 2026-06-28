"use client";
import type React from "react";
import { useEffect, useState } from "react";
import { ChatSidebar } from "@/components/chat/chat-sidebar";
import { ChatTopbar } from "@/components/chat/chat-topbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { t } from "@/lib/translations/chat";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("dark");
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="flex h-dvh overflow-hidden bg-bg text-text-primary">
      <ChatSidebar
        isMobile={isMobile}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-bg text-text-primary transition-colors duration-200">
        <ChatTopbar
          isMobile={isMobile}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {children}

        {/* Disclaimer */}
        <div className="text-center text-[12px] text-text-muted px-4 pb-4 pt-2 shrink-0 font-sans">
          <a
            href="#"
            className="text-text-muted underline underline-offset-2 hover:text-text-secondary transition-colors"
          >
            {t.disclaimer}
          </a>
        </div>
      </div>
    </div>
  );
}
