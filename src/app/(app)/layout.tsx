"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type React from "react";
import { Suspense, useEffect, useState } from "react";
import { ChatSidebar } from "@/components/chat/chat-sidebar";
import { ChatTopbar } from "@/components/chat/chat-topbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { t } from "@/lib/translations/chat";

function ChatLayoutContent({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const isIncognito = searchParams.get("incognito") === "true";

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
      {!isIncognito && (
        <ChatSidebar
          isMobile={isMobile}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-bg text-text-primary transition-colors duration-200">
        <ChatTopbar
          isMobile={isMobile}
          setSidebarOpen={setSidebarOpen}
          theme={theme}
          toggleTheme={toggleTheme}
          isIncognito={isIncognito}
        />

        {isIncognito && (
          <>
            <div
              className="pointer-events-none fixed inset-[50px_8px_8px_8px] md:inset-[50px_16px_16px_16px] rounded-2xl shadow-[0_0_0_100px_var(--color-text-primary)] z-[100] transition-all duration-300"
              style={{ opacity: 1 }}
            ></div>
            <div
              className="fixed z-[101] draggable-none flex items-center gap-3.5 right-3"
              style={{ top: "0.625rem" }}
            >
              <button
                onClick={() => router.push("/new")}
                className="inline-flex items-center justify-center relative isolate shrink-0 can-focus select-none border-transparent transition duration-300 ease-[cubic-bezier(0.165,0.85,0.45,1)] h-8 w-8 rounded-md bg-text-primary text-bg hover:bg-text-primary/90"
                type="button"
                aria-label="Exit incognito"
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M15.147 4.146a.5.5 0 0 1 .707.707L10.707 10l5.147 5.147a.5.5 0 0 1-.63.771l-.078-.064L10 10.707l-5.146 5.147a.5.5 0 0 1-.708-.707L9.293 10 4.146 4.853a.5.5 0 0 1 .708-.707L10 9.293z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </>
        )}

        {children}

        {/* Disclaimer */}
        <div className="text-center text-[12px] text-text-muted px-4 pb-4 pt-2 shrink-0 font-sans">
          <a
            href="/"
            className="text-text-muted underline underline-offset-2 hover:text-text-secondary transition-colors"
          >
            {t.disclaimer}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex h-dvh overflow-hidden bg-bg text-text-primary" />
      }
    >
      <ChatLayoutContent>{children}</ChatLayoutContent>
    </Suspense>
  );
}
