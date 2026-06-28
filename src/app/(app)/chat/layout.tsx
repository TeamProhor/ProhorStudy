"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

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
    <div className="app">
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div className="mobile-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}
      
      {/* Sidebar */}
      <aside className={`sidebar ${isMobile ? (sidebarOpen ? 'mobile-sidebar' : 'hidden-sidebar') : ''}`} id="sidebar">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
          <button className="sb-btn" id="sidebarToggle" title="Toggle sidebar" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1" y="3.5" width="13" height="1.1" rx="0.55" fill="currentColor"/><rect x="1" y="7.2" width="13" height="1.1" rx="0.55" fill="currentColor"/><rect x="1" y="10.9" width="13" height="1.1" rx="0.55" fill="currentColor"/></svg>
          </button>
          <button className="sb-btn sb-new" id="newChatBtn" title="New chat">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M7.5 2v11M2 7.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>

        <div className="sb-divider" style={{ margin: "8px 0" }}></div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
          <button className="sb-btn active" title="Chats">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          </button>
          <button className="sb-btn" title="Projects">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/></svg>
          </button>
          <button className="sb-btn" title="Artifacts">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
          </button>
          <button className="sb-btn" title="Customize">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          </button>
        </div>

        <div className="sb-bottom">
          <div style={{ position: "relative" }}>
            <button className="sb-btn" title="Downloads">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            </button>
            <div className="ping-dot"></div>
          </div>
          <button className="user-avatar" title="Account">F</button>
        </div>
      </aside>

      {/* Main */}
      <div className="main">
        {/* Top strip */}
        <div className="top-strip">
          {isMobile && (
            <button className="icon-btn" style={{ position: "absolute", left: "12px" }} onClick={() => setSidebarOpen(true)}>
              <svg width="20" height="20" viewBox="0 0 15 15" fill="none"><rect x="1" y="3.5" width="13" height="1.1" rx="0.55" fill="currentColor"/><rect x="1" y="7.2" width="13" height="1.1" rx="0.55" fill="currentColor"/><rect x="1" y="10.9" width="13" height="1.1" rx="0.55" fill="currentColor"/></svg>
            </button>
          )}
          <div className="upgrade-pill">
            Free plan
            <div className="dot-sep"></div>
            <a href="#">Upgrade</a>
          </div>
          <div className="top-right">
            <button className="icon-btn theme-toggle" id="themeToggle" title="Toggle theme" onClick={toggleTheme}>
              {theme === "light" ? (
                <svg id="sunIcon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg id="moonIcon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
            {/* Incognito */}
            <button className="icon-btn" title="Incognito">
              <svg width="17" height="17" viewBox="0 0 21.2 21.2" fill="currentColor">
                <circle cx="7" cy="9.67" r="1.8"/>
                <circle cx="13" cy="9.67" r="1.8"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10 2C14.326 2.00018 17.9998 5.67403 18 10V17.3123C17.9997 17.5427 17.8411 17.8079 17.6172 17.8623C17.3932 17.9165 17.1614 17.7456 17.0557 17.5408C16.7805 17.007 16.3658 16.5937 16.062 16.2878C15.7793 16.0034 15.4503 15.8338 14.9771 15.8337C14.2092 15.8339 13.4371 16.3862 12.9487 17.53C12.8701 17.7138 12.6887 17.8621 12.4888 17.8623C12.2888 17.8623 12.1076 17.7138 12.0288 17.53C11.5404 16.386 10.7674 15.8339 9.99951 15.8337C9.23161 15.8339 8.45959 16.386 7.97119 17.53C7.89253 17.7138 7.71118 17.8621 7.51123 17.8623C7.31122 17.8623 7.13006 17.7138 7.05127 17.53C6.56296 16.3862 5.78982 15.834 5.02197 15.8337C4.54861 15.8338 4.21974 16.0032 3.93701 16.2878C3.63309 16.5937 3.21952 17.0715 2.94434 17.6055C2.83865 17.8103 2.60589 17.9165 2.38184 17.8623C2.15801 17.8079 2.00033 17.6073 2 17.377V10C2.00018 5.67403 5.67403 2.00018 10 2ZM10 3C6.22631 3.00018 3.00018 6.22631 3 10V15.8633C3.3 15.5 3.8 15 5 14.8C6.1 14.8 7 15.4 7.5 16.3C8.1 15.4 9 14.8 10 14.8C11 14.8 11.9 15.4 12.5 16.3C13 15.4 13.9 14.8 15 14.8C16.2 15 16.7 15.5 17 15.8V10C16.9998 6.22631 13.7737 3.00018 10 3Z"/>
              </svg>
            </button>
          </div>
        </div>

        {children}
        
        {/* Disclaimer */}
        <div className="disclaimer">
          <a href="#">Claude can make mistakes. Check important info.</a>
        </div>
      </div>
    </div>
  );
}
