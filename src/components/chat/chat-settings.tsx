"use client";

import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m as motion,
} from "motion/react";
import { useEffect, useState } from "react";
import {
  IconClose,
  IconCode,
  IconCreditCard,
  IconLink,
  IconSearch,
  IconSettings,
  IconShield,
  IconStar,
  IconUser,
} from "@/components/ui/icons";
import { useIsMobile } from "@/hooks/use-mobile";
import { t } from "@/lib/translations/settings";

import { GeneralSettings } from "./general-settings";

export function ChatSettings({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("General");

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const tabs = [
    { id: "General", label: t.tabs.general, icon: IconSettings },
    { id: "Account", label: t.tabs.account, icon: IconUser },
    { id: "Privacy", label: t.tabs.privacy, icon: IconShield },
    { id: "Billing", label: t.tabs.billing, icon: IconCreditCard },
    { id: "Capabilities", label: t.tabs.capabilities, icon: IconStar },
    { id: "Connectors", label: t.tabs.connectors, icon: IconLink },
    { id: "Claude Code", label: t.tabs.claudeCode, icon: IconCode },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
              onClick={onClose}
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              role="dialog"
              aria-labelledby="settings-title"
              className={`relative flex overflow-hidden bg-bg-elevated shadow-[0_8px_32px_rgba(0,0,0,0.22)] outline-none text-text-primary z-10 w-full max-w-[960px] rounded-[18px] border-[0.5px] border-border ${
                isMobile
                  ? "flex-col h-[calc(100dvh-2rem)]"
                  : "flex-row h-[calc(100vh-2rem)] max-h-[45rem]"
              }`}
            >
              {/* Sidebar (Desktop Only) */}
              {!isMobile && (
                <nav
                  aria-label="Settings"
                  className="flex w-48 shrink-0 flex-col gap-2 overflow-y-auto border-r-[0.5px] border-border-soft bg-bg-soft p-4"
                >
                  <h2 id="settings-title" className="sr-only">
                    {t.settings}
                  </h2>

                  {/* Search */}
                  <div className="mb-2 w-full">
                    <div className="flex h-[32px] w-full cursor-text items-center gap-2 rounded-lg px-2 bg-input-bg border border-transparent shadow-[var(--shadow-input)] hover:shadow-[var(--shadow-input-hover)] focus-within:shadow-[var(--shadow-input-focus)] transition-shadow">
                      <IconSearch className="shrink-0 text-text-muted w-6 h-6" />
                      <input
                        placeholder={t.searchPlaceholder}
                        aria-label={t.searchPlaceholder}
                        className="min-w-0 flex-1 border-0 bg-transparent p-0 text-[14px] text-text-primary outline-none placeholder:text-text-placeholder font-sans"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="px-2 pt-1 pb-1 text-[13px] font-medium text-text-muted">
                    {t.settings}
                  </div>

                  <ul className="flex flex-col gap-[2px]">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === tab.id;
                      return (
                        <li key={tab.id}>
                          <button
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex h-8 w-full items-center gap-2.5 rounded-lg px-2 text-left text-[14px] transition-colors cursor-pointer ${
                              isActive
                                ? "bg-bg-hover text-text-primary font-medium"
                                : "text-text-secondary hover:bg-bg-hover hover:text-text-primary"
                            }`}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <Icon
                              className={`shrink-0 w-6 h-6 ${isActive ? "text-text-primary" : "text-text-secondary"}`}
                            />
                            <span className="min-w-0 flex-1 truncate">
                              {tab.label}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}

              {/* Main Content Area */}
              <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-bg-elevated relative">
                {isMobile ? (
                  /* Mobile Header and Tabs */
                  <div className="flex flex-col shrink-0 border-b-[0.5px] border-border-soft">
                    <div className="flex items-center justify-between px-4 h-14">
                      <h2 className="text-[17px] font-semibold">
                        {t.settings}
                      </h2>
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary hover:bg-bg-hover hover:text-text-primary transition-colors cursor-pointer border-none outline-none bg-transparent"
                        aria-label="Close settings"
                      >
                        <IconClose className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Horizontal Mobile Tabs */}
                    <div
                      role="tablist"
                      aria-label={t.settings}
                      className="relative flex items-center px-2 pb-2 font-sans overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                      {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative z-[1] inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full h-8 px-3 whitespace-nowrap select-none outline-none bg-transparent text-[15px] font-medium transition-colors duration-200 focus-visible:shadow-[var(--shadow-focus)] ${
                              isActive
                                ? "text-text-primary"
                                : "text-text-muted hover:text-text-primary hover:bg-bg-hover"
                            }`}
                          >
                            {isActive && (
                              <motion.div
                                layoutId="active-mobile-tab"
                                className="absolute inset-0 z-0 rounded-full bg-bg-hover"
                                initial={false}
                                transition={{
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30,
                                }}
                              />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  /* Header with Close Button (Desktop) */
                  <div className="flex shrink-0 items-center justify-end px-4 pt-4 pb-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary hover:bg-bg-hover hover:text-text-primary transition-colors cursor-pointer border-none outline-none bg-transparent"
                      aria-label="Close settings"
                    >
                      <IconClose className="w-6 h-6" />
                    </button>
                  </div>
                )}

                <div
                  className={`flex-1 overflow-y-auto ${isMobile ? "px-4 pt-4 pb-8" : "px-8 pb-8"}`}
                >
                  <div className="max-w-2xl mx-auto">
                    {!isMobile && (
                      <h3 className="text-[22px] font-medium mb-6 text-text-primary">
                        {tabs.find((tab) => tab.id === activeTab)?.label ||
                          activeTab}
                      </h3>
                    )}

                    {/* Active tab content */}
                    <div className="space-y-6">
                      {activeTab === "General" ? (
                        <GeneralSettings />
                      ) : (
                        <div className="border-[0.5px] border-border-soft rounded-xl p-5 bg-bg-soft/30">
                          <div className="text-[15px] leading-relaxed text-text-secondary">
                            This is a pixel-perfect recreation of the settings
                            dialog using the web app's theme variables. Select
                            different tabs to see the active state change.
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
