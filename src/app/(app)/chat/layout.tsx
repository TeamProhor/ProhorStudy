"use client";
import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  IconMenu, IconNewChat, IconChats, IconProjects, 
  IconArtifacts, IconCustomize, IconDownloads, 
  IconSun, IconMoon, IconIncognito 
} from "@/components/ui/icons";

function SidebarButton({ children, active, isNew, onClick, title }: any) {
  return (
    <button
      title={title}
      onClick={onClick}
      className={`w-8 h-8 flex items-center justify-center rounded-[9px] cursor-pointer transition-colors duration-[120ms] relative border-none outline-none ${
        isNew 
          ? "bg-bg-hover-strong text-text-primary hover:bg-[#cc785c2e] hover:text-primary" 
          : active 
            ? "text-text-primary bg-bg-hover"
            : "text-text-secondary hover:bg-bg-hover hover:text-text-primary bg-transparent"
      }`}
    >
      {children}
    </button>
  );
}

function IconButton({ children, onClick, title, style }: any) {
  return (
    <button
      title={title}
      onClick={onClick}
      style={style}
      className="w-[30px] h-[30px] flex items-center justify-center rounded-[7px] border-none outline-none cursor-pointer transition-colors duration-[120ms] text-text-secondary hover:bg-bg-hover hover:text-text-primary bg-transparent"
    >
      {children}
    </button>
  );
}

export default function ChatLayout({ children }: { children: React.ReactNode }) {
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
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div className="absolute inset-0 bg-black/50 z-[90] transition-opacity duration-200" onClick={() => setSidebarOpen(false)}></div>
      )}
      
      {/* Sidebar */}
      <aside 
        id="sidebar"
        className={`w-[3.05rem] min-w-[3.05rem] bg-bg border-r-[0.5px] border-border-soft flex flex-col p-[8px_8px_12px] z-50 transition-colors duration-200 ${
          isMobile 
            ? (sidebarOpen ? 'absolute top-0 bottom-0 left-0 shadow-[4px_0_20px_rgba(0,0,0,0.2)] translate-x-0' : 'absolute -translate-x-full') 
            : 'relative'
        }`}
      >
        <div className="flex flex-col items-center gap-1">
          <SidebarButton title="Toggle sidebar" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <IconMenu />
          </SidebarButton>
          <SidebarButton isNew title="New chat">
            <IconNewChat />
          </SidebarButton>
        </div>

        <div className="h-[0.5px] bg-border-soft my-2"></div>

        <div className="flex flex-col items-center gap-[2px]">
          <SidebarButton active title="Chats">
            <IconChats />
          </SidebarButton>
          <SidebarButton title="Projects">
            <IconProjects />
          </SidebarButton>
          <SidebarButton title="Artifacts">
            <IconArtifacts />
          </SidebarButton>
          <SidebarButton title="Customize">
            <IconCustomize />
          </SidebarButton>
        </div>

        <div className="mt-auto flex flex-col gap-1 items-center">
          <div className="relative">
            <SidebarButton title="Downloads">
              <IconDownloads />
            </SidebarButton>
            <div className="absolute top-[2px] right-[2px] w-[7px] h-[7px] rounded-full bg-primary before:content-[''] before:absolute before:-inset-[2px] before:rounded-full before:bg-primary before:opacity-40 before:animate-[ping_1.4s_ease-in-out_infinite]"></div>
          </div>
          <button className="w-8 h-8 rounded-full border-none outline-none bg-primary text-white text-[13px] font-semibold flex items-center justify-center cursor-pointer font-sans" title="Account">F</button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-bg text-text-primary transition-colors duration-200">
        {/* Top strip */}
        <div className="h-[44px] flex items-center justify-center relative shrink-0 md:px-0 px-3">
          {isMobile && (
            <IconButton style={{ position: "absolute", left: "12px" }} onClick={() => setSidebarOpen(true)}>
              <IconMenu width="20" height="20" />
            </IconButton>
          )}
          <div className="inline-flex items-center gap-[6px] h-7 px-[10px] rounded-[7px] bg-bg-hover text-[12.5px] font-medium text-text-secondary">
            Free plan
            <div className="w-[3px] h-[3px] rounded-full bg-text-muted opacity-40"></div>
            <a href="#" className="text-text-secondary underline underline-offset-[3px] decoration-text-secondary/35 hover:text-text-primary">Upgrade</a>
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <IconButton title="Toggle theme" onClick={toggleTheme}>
              {theme === "light" ? <IconSun /> : <IconMoon />}
            </IconButton>
            <IconButton title="Incognito">
              <IconIncognito />
            </IconButton>
          </div>
        </div>

        {children}
        
        {/* Disclaimer */}
        <div className="text-center text-[12px] text-text-muted px-4 pb-4 pt-2 shrink-0 font-sans">
          <a href="#" className="text-text-muted underline underline-offset-2 hover:text-text-secondary transition-colors">Claude can make mistakes. Check important info.</a>
        </div>
      </div>
    </div>
  );
}
