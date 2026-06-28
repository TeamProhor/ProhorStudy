import {
  IconArtifacts,
  IconChats,
  IconCustomize,
  IconDownloads,
  IconMenu,
  IconNewChat,
  IconProjects,
} from "@/components/ui/icons";

export function SidebarButton({
  children,
  active,
  isNew,
  onClick,
  title,
}: any) {
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
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="absolute inset-0 bg-black/50 z-[90] transition-opacity duration-200"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`w-[3.05rem] min-w-[3.05rem] bg-bg border-r-[0.5px] border-border-soft flex flex-col p-[8px_8px_12px] z-50 transition-colors duration-200 ${
          isMobile
            ? sidebarOpen
              ? "absolute top-0 bottom-0 left-0 shadow-[4px_0_20px_rgba(0,0,0,0.2)] translate-x-0"
              : "absolute -translate-x-full"
            : "relative"
        }`}
      >
        <div className="flex flex-col items-center gap-1">
          <SidebarButton
            title="Toggle sidebar"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
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
          <button
            className="w-8 h-8 rounded-full border-none outline-none bg-primary text-white text-[13px] font-semibold flex items-center justify-center cursor-pointer font-sans"
            title="Account"
          >
            F
          </button>
        </div>
      </aside>
    </>
  );
}
