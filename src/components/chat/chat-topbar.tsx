import { useRouter } from "next/navigation";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { IconIncognito, IconMenu } from "@/components/ui/icons";
import { t } from "@/lib/translations/chat";

function IconButton({
  children,
  onClick,
  title,
  style,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      style={style}
      className={`w-8 h-8 flex items-center justify-center rounded-[7px] border-none outline-none cursor-pointer transition-colors duration-[120ms] text-text-secondary hover:bg-bg-hover hover:text-text-primary bg-transparent ${className}`}
    >
      {children}
    </button>
  );
}

export function ChatTopbar({
  isMobile,
  setSidebarOpen,
  theme,
  toggleTheme,
  isIncognito,
}: {
  isMobile: boolean;
  setSidebarOpen: (open: boolean) => void;
  theme: string;
  toggleTheme: () => void;
  isIncognito: boolean;
}) {
  const router = useRouter();
  return (
    <div className="h-[44px] flex items-center justify-center relative shrink-0 md:px-0 px-3">
      {isMobile && (
        <IconButton
          style={{ position: "absolute", left: "12px" }}
          onClick={() => setSidebarOpen(true)}
        >
          <IconMenu className="w-6 h-6" />
        </IconButton>
      )}
      <div className="inline-flex items-center gap-[6px] h-7 px-[10px] rounded-[7px] bg-bg-hover text-[12.5px] font-medium text-text-secondary">
        {t.freePlan}
        <div className="w-[3px] h-[3px] rounded-full bg-text-muted opacity-40"></div>
        <a
          href="/"
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
          className="w-8 h-8 flex items-center justify-center rounded-[7px] border-none outline-none cursor-pointer transition-colors duration-[120ms] text-text-secondary hover:bg-bg-hover hover:text-text-primary bg-transparent [&_svg]:w-6 [&_svg]:h-6"
        />
        <IconButton
          title={t.account}
          onClick={() =>
            router.push(isIncognito ? "/new" : "/new?incognito=true")
          }
        >
          <IconIncognito className="w-6 h-6" />
        </IconButton>
      </div>
    </div>
  );
}
