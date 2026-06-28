import {
  IconArtifacts,
  IconChats,
  IconCustomize,
  IconDownloads,
  IconMenu,
  IconNewChat,
  IconProjects,
} from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { t } from "@/lib/translations/chat";

function SidebarButton({
  children,
  active,
  isNew,
  onClick,
  title,
  label,
  expanded,
}: any) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`h-9 flex items-center rounded-[9px] cursor-pointer transition-all duration-[300ms] relative border-none outline-none overflow-hidden shrink-0 mx-[4.4px] ${
        expanded ? "w-[17.4rem] gap-3" : "w-[2.5rem]"
      } ${
        isNew
          ? "bg-bg-hover-strong text-text-primary hover:bg-[#cc785c2e] hover:text-primary"
          : active
            ? "text-text-primary bg-bg-hover"
            : "text-text-secondary hover:bg-bg-hover hover:text-text-primary bg-transparent"
      }`}
      style={{ paddingLeft: '8px' }}
    >
      <div className="shrink-0 flex items-center justify-center w-6 h-6">
        {children}
      </div>
      <span
        className={`text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis text-left transition-all duration-300 ${expanded ? "opacity-100 delay-100 flex-1 max-w-[200px]" : "opacity-0 flex-none max-w-0"}`}
      >
        {label}
      </span>
    </button>
  );
}

function SidebarLink({
  icon,
  text,
  badge,
  active,
  expanded,
  hideWhenCollapsed,
}: any) {
  return (
    <a
      href="#"
      className={`flex items-center h-9 rounded-[9px] hover:bg-bg-hover group transition-all duration-[300ms] overflow-hidden shrink-0 mx-[4.4px] ${
        expanded ? "w-[17.4rem] gap-3" : "w-[2.5rem]"
      } ${active ? "bg-bg-hover text-text-primary" : "text-text-secondary hover:text-text-primary"} ${!expanded && hideWhenCollapsed ? "hidden" : ""}`}
      style={{ paddingLeft: '8px' }}
    >
      <div className="flex size-6 shrink-0 items-center justify-center">
        {icon}
      </div>
      <span
        className={`text-sm font-medium text-left truncate transition-all duration-300 ${expanded ? "opacity-100 delay-100 flex-1 max-w-[200px]" : "opacity-0 flex-none max-w-0"}`}
      >
        {text}
      </span>
      {badge && (
        <span
          className={`text-xs border border-border-soft px-1.5 py-0.5 rounded-3xl text-primary transition-all duration-300 ${expanded ? "opacity-100 delay-100 max-w-[100px]" : "opacity-0 flex-none max-w-0 px-0 border-none overflow-hidden"}`}
        >
          {badge}
        </span>
      )}
    </a>
  );
}

function RecentChat({ text }: { text: string }) {
  return (
    <a
      href="#"
      className="w-[17.4rem] mx-[4.4px] flex items-center gap-3 px-3 py-1.5 h-9 rounded-[9px] hover:bg-bg-hover group text-text-secondary hover:text-text-primary transition-colors relative overflow-hidden shrink-0"
    >
      <span className="text-sm flex-1 text-left truncate relative z-10 group-hover:pr-6">
        {text}
      </span>
      <div className="absolute right-1 opacity-0 group-hover:opacity-100 bg-gradient-to-l from-bg-hover to-transparent pl-4 pr-1 h-full flex items-center justify-center z-20">
        <button type="button" className="hover:text-primary">...</button>
      </div>
    </a>
  );
}

export function ChatSidebar({
  isMobile,
  sidebarOpen,
  setSidebarOpen,
}: {
  isMobile: boolean;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) {
  return (
    <>
      {isMobile && sidebarOpen && (
        <div
          role="presentation"
          className="absolute inset-0 bg-black/50 z-[90] transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSidebarOpen(false); }}
        ></div>
      )}

      <nav
        id="sidebar"
        aria-label="Sidebar"
        className={`flex flex-col bg-bg border-r-[0.5px] border-border-soft h-screen z-[100] transition-all duration-300 ease-[cubic-bezier(0.165,0.85,0.45,1)] overflow-hidden ${
          isMobile
            ? sidebarOpen
              ? "fixed top-0 bottom-0 left-0 translate-x-0 w-[18rem]"
              : "fixed top-0 bottom-0 left-0 -translate-x-full w-[18rem]"
            : sidebarOpen
              ? "relative w-[18rem] min-w-[18rem] translate-x-0"
              : "relative w-[3.05rem] min-w-[3.05rem] translate-x-0"
        }`}
      >
        <div
          className={`flex flex-col h-full transition-all duration-300 ${sidebarOpen ? "w-[18rem]" : "w-[3.05rem]"}`}
        >
          {/* Top Section */}
          <div
            className={`relative flex items-center shrink-0 transition-all duration-300 overflow-hidden ${sidebarOpen ? "h-12 w-full" : "h-12 w-full pt-2 flex-col justify-center"}`}
          >
            {/* Menu Toggle */}
            <div
              className={`absolute flex items-center transition-all duration-300 ${sidebarOpen ? "right-3 top-3" : "right-1/2 translate-x-1/2 top-2"}`}
            >
              <button
                type="button"
                className={`flex items-center justify-center text-text-secondary hover:text-text-primary rounded transition-all duration-300 w-8 h-8 hover:bg-bg-hover ${sidebarOpen ? "" : "bg-transparent"}`}
                aria-label="Toggle sidebar"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <IconMenu className="w-6 h-6" />
              </button>
            </div>

            {/* Claude Logo */}
            <div
              className={`flex items-center transition-all duration-300 absolute left-0 ${sidebarOpen ? "opacity-100 pl-4 top-3.5" : "opacity-0 -translate-x-4 pointer-events-none top-3.5"}`}
            >
              <a
                href="#"
                className="flex flex-col justify-start items-top text-text-primary"
                aria-label={t.appName}
              >
                <Logo className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-300 shrink-0 ${sidebarOpen ? "pt-2" : "pt-1"}`}
          >
            <SidebarButton
              isNew
              title={t.newChat}
              label={t.newChat}
              expanded={sidebarOpen}
            >
              <IconNewChat className="w-6 h-6" />
            </SidebarButton>
          </div>

          <div
            className={`transition-all duration-300 bg-border-soft shrink-0 mx-auto ${sidebarOpen ? "h-0 opacity-0 my-0 w-0" : "h-[0.5px] opacity-100 my-2 w-[2.05rem]"}`}
          ></div>

          <div
            className={`flex flex-grow flex-col overflow-x-hidden relative overflow-y-auto mt-2 [scrollbar-width:thin] [scrollbar-color:var(--scrollbar)_transparent] w-full`}
          >
            <div className={`flex flex-col gap-[2px] shrink-0 w-full`}>
              <SidebarLink
                active
                icon={<IconChats className="w-6 h-6" />}
                text={t.chats}
                expanded={sidebarOpen}
              />
              <SidebarLink
                icon={<IconProjects className="w-6 h-6" />}
                text={t.projects}
                expanded={sidebarOpen}
              />
              <SidebarLink
                icon={
                  <IconArtifacts className="w-6 h-6" />
                }
                text={t.artifacts}
                expanded={sidebarOpen}
              />
              <SidebarLink
                hideWhenCollapsed
                icon={
                  <div className="w-6 h-6 flex items-center justify-center text-text-muted/40 group-hover:text-text-secondary/40">
                    <IconArtifacts className="w-6 h-6" />
                  </div>
                }
                text={t.code}
                badge={t.upgrade}
                expanded={sidebarOpen}
              />
              <SidebarLink
                icon={
                  <IconCustomize className="w-6 h-6" />
                }
                text={t.customize}
                expanded={sidebarOpen}
              />
            </div>

            <div
              className={`flex flex-col mt-4 shrink-0 w-full transition-all duration-300 ${sidebarOpen ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0 overflow-hidden m-0"}`}
            >
              <div className="flex items-center justify-between pb-2 pl-4 text-xs text-text-muted">
                <h2 className="font-semibold hover:text-text-secondary transition-colors cursor-pointer">
                  {t.products}
                </h2>
              </div>
              <SidebarLink
                icon={<IconArtifacts className="w-5 h-5" />}
                text={t.design}
                expanded={true}
              />

              <div className="mt-4 w-full">
                <div className="flex items-center justify-between pb-2 pl-4 text-xs text-text-muted">
                  <h2 className="font-semibold hover:text-text-secondary transition-colors cursor-pointer">
                    {t.recents}
                  </h2>
                </div>
                <ul className="flex flex-col gap-px pb-4 w-full">
                  <li>
                    <RecentChat text="Claude.ai চ্যাট ইন্টারফেস ক্লোন" />
                  </li>
                  <li>
                    <RecentChat text="Phosphor আইকনসহ Tailwind ব্রাউজার ক্লোন" />
                  </li>
                  <li>
                    <RecentChat text="UI/UX পলিশ এবং পরিমার্জন" />
                  </li>
                  <li>
                    <RecentChat text="কোড রিফ্যাক্টরিং এবং পরিষ্কার উন্নতি" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Area */}
          <div
            className="relative mt-auto transition-all duration-300 shrink-0"
            style={{ height: sidebarOpen ? "72px" : "96px" }}
          >
            {/* Expanded User Menu */}
            <div
              className={`absolute inset-0 flex items-center border-t-[0.5px] border-border-soft p-2 transition-all duration-300 ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-4"}`}
            >
              <button type="button" className="w-full flex flex-row items-center gap-3 px-2 py-2 rounded-lg hover:bg-bg-hover group transition-colors text-left border-none bg-transparent cursor-pointer overflow-hidden">
                <div className="flex shrink-0 items-center justify-center rounded-full font-semibold select-none h-8 w-8 text-[14px] bg-primary text-white group-hover:opacity-90 transition-opacity">
                  F
                </div>
                <div className="flex flex-col items-start min-w-0 flex-1 pr-1">
                  <span className="w-full text-sm font-medium text-text-primary truncate">
                    FrostFoe
                  </span>
                  <span className="w-full text-xs text-text-muted truncate">
                    {t.freePlan}
                  </span>
                </div>
                <div className="relative">
                  <div className="w-8 h-8 rounded-lg border border-border-soft flex items-center justify-center text-text-secondary hover:bg-bg-hover hover:text-text-primary hover:border-transparent transition-colors">
                    <IconDownloads className="w-6 h-6" />
                  </div>
                  <span className="absolute -top-0.5 -right-0.5 flex w-2 h-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full w-2 h-2 bg-primary"></span>
                  </span>
                </div>
              </button>
            </div>

            {/* Collapsed User Menu */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-300 ${!sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none -translate-y-4"}`}
            >
              <div className="relative">
                <SidebarButton title={t.downloads} expanded={false}>
                  <IconDownloads className="w-6 h-6" />
                </SidebarButton>
                <div className="absolute top-[2px] right-[2px] w-[7px] h-[7px] rounded-full bg-primary before:content-[''] before:absolute before:-inset-[2px] before:rounded-full before:bg-primary before:opacity-40 before:animate-[ping_1.4s_ease-in-out_infinite]"></div>
              </div>
              <button
                type="button"
                className="w-8 h-8 rounded-full border-none outline-none bg-primary text-white text-[14px] font-semibold flex items-center justify-center cursor-pointer font-sans shrink-0"
                title={t.account}
              >
                F
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
