import { t } from "@/lib/translations/settings";

export function GeneralSettings() {
  return (
    <div className="relative min-h-0 flex-1 overflow-x-hidden overflow-y-auto pb-8 pt-2">
      <div className="flex flex-col">
        {/* Profile Section */}
        <section className="mb-8 md:mb-10 last:mb-0">
          <div className="mb-4 flex items-start justify-between gap-6">
            <div className="flex min-w-0 flex-col gap-1">
              <h3 className="text-lg font-semibold text-text-primary self-start">
                {t.general.profile.title}
              </h3>
            </div>
          </div>
          <div className="divide-y-[0.5px] divide-border-soft">
            {/* Avatar */}
            <div className="flex items-center justify-between gap-6 py-4">
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <div className="text-[15px] text-text-primary font-medium">
                  {t.general.profile.avatar}
                </div>
              </div>
              <div className="flex shrink-0 items-center">
                <button
                  type="button"
                  className="relative block overflow-hidden rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary group/avatar"
                >
                  <span className="flex items-center justify-center rounded-full font-sans font-semibold text-lg bg-primary text-white w-12 h-12 select-none group-hover/avatar:opacity-40 transition-opacity">
                    F
                  </span>
                </button>
              </div>
            </div>

            {/* Full name */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6 py-4">
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <div className="text-[15px] text-text-primary font-medium">
                  {t.general.profile.fullName}
                </div>
              </div>
              <div className="flex shrink-0 items-start md:items-center w-full md:w-auto">
                <input
                  aria-label={t.general.profile.fullName}
                  className="h-9 px-3 rounded bg-input-bg border border-transparent shadow-[var(--shadow-input)] focus-visible:shadow-[var(--shadow-input-focus)] font-sans text-[15px] text-text-primary transition-shadow duration-200 placeholder:text-text-muted outline-none w-full md:w-56"
                  defaultValue="FrostFoe"
                />
              </div>
            </div>

            {/* What should Claude call you? */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6 py-4">
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <div className="text-[15px] text-text-primary font-medium">
                  {t.general.profile.displayName}
                </div>
              </div>
              <div className="flex shrink-0 items-start md:items-center w-full md:w-auto">
                <input
                  aria-label={t.general.profile.displayName}
                  className="h-9 px-3 rounded bg-input-bg border border-transparent shadow-[var(--shadow-input)] focus-visible:shadow-[var(--shadow-input-focus)] font-sans text-[15px] text-text-primary transition-shadow duration-200 placeholder:text-text-muted outline-none w-full md:w-56"
                  defaultValue="FrostFoe"
                />
              </div>
            </div>

            {/* What best describes your work? */}
            <div className="flex items-center justify-between gap-6 py-4">
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <div className="text-[15px] text-text-primary font-medium">
                  {t.general.profile.workDescription}
                </div>
              </div>
              <div className="flex shrink-0 items-center">
                <button
                  type="button"
                  className="flex items-center justify-between gap-1.5 h-8 rounded-lg bg-transparent hover:bg-bg-hover px-2 text-[15px] text-text-muted outline-none transition-colors min-w-32"
                >
                  <span>{t.general.profile.select}</span>
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 4.5l3 3 3-3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Instructions for Claude */}
            <div className="flex flex-col gap-3 py-4">
              <div className="flex items-center justify-between gap-6">
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                  <label
                    htmlFor="instructions"
                    className="text-[15px] text-text-primary font-medium"
                  >
                    {t.general.profile.instructionsTitle}
                  </label>
                  <div className="text-[14px] text-text-muted">
                    {t.general.profile.instructionsSubtitle}
                    <a
                      href="/"
                      className="text-primary underline underline-offset-[3px] hover:text-primary-active transition-colors"
                    >
                      {t.general.profile.instructionsLink}
                    </a>
                    .
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 relative">
                <textarea
                  id="instructions"
                  rows={3}
                  className="w-full rounded-lg bg-input-bg border border-transparent shadow-[var(--shadow-input)] focus-visible:shadow-[var(--shadow-input-focus)] px-3 py-2 font-sans text-[15px] text-text-primary placeholder:text-text-muted outline-none transition-shadow duration-200 resize-none min-h-[5.5rem]"
                  placeholder={t.general.profile.instructionsPlaceholder}
                ></textarea>
              </div>
            </div>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="mb-8 md:mb-10 last:mb-0">
          <div className="mb-4 flex items-start justify-between gap-6">
            <div className="flex min-w-0 flex-col gap-1">
              <h3 className="text-lg font-semibold text-text-primary self-start">
                {t.general.preferences.title}
              </h3>
            </div>
          </div>
          <div className="divide-y-[0.5px] divide-border-soft">
            {/* Appearance */}
            <div className="flex items-center justify-between gap-6 py-4">
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <div className="text-[15px] text-text-primary font-medium">
                  {t.general.preferences.appearance}
                </div>
              </div>
              <div className="flex shrink-0 items-center">
                <div className="relative inline-flex items-center h-9 p-[2px] rounded-lg bg-bg-soft">
                  <div className="absolute left-[2px] top-[2px] bottom-[2px] w-[34px] rounded-md bg-bg-elevated shadow-[0_1px_2px_rgba(0,0,0,0.1)] border-[0.5px] border-border transition-all"></div>
                  <button
                    type="button"
                    className="relative z-10 w-[34px] h-full flex items-center justify-center text-text-primary rounded-md"
                  >
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="relative z-10 w-[34px] h-full flex items-center justify-center text-text-muted hover:text-text-primary rounded-md transition-colors"
                  >
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="relative z-10 w-[34px] h-full flex items-center justify-center text-text-muted hover:text-text-primary rounded-md transition-colors"
                  >
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Chat font */}
            <div className="flex items-center justify-between gap-6 py-4">
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <div className="text-[15px] text-text-primary font-medium">
                  {t.general.preferences.chatFont}
                </div>
              </div>
              <div className="flex shrink-0 items-center">
                <button
                  type="button"
                  className="flex items-center gap-2 h-8 px-2 rounded-lg bg-transparent hover:bg-bg-hover text-text-primary transition-colors"
                >
                  <span style={{ fontFamily: "var(--font-display)" }}>
                    Anthropic Serif
                  </span>
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    className="text-text-muted"
                  >
                    <path
                      d="M3 4.5l3 3 3-3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Motion */}
            <div className="flex items-center justify-between gap-6 py-4">
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <div className="text-[15px] text-text-primary font-medium">
                  {t.general.preferences.motion}
                </div>
                <div className="text-[14px] text-text-muted">
                  {t.general.preferences.motionSubtitle}
                </div>
              </div>
              <div className="flex shrink-0 items-center">
                <div className="relative inline-flex items-center h-9 p-[2px] rounded-lg bg-bg-soft">
                  <div className="absolute left-[2px] top-[2px] bottom-[2px] w-[72px] rounded-md bg-bg-elevated shadow-[0_1px_2px_rgba(0,0,0,0.1)] border-[0.5px] border-border transition-all"></div>
                  <button
                    type="button"
                    className="relative z-10 px-3 h-full flex items-center justify-center text-[14px] font-medium text-text-primary rounded-md"
                  >
                    {t.general.preferences.system}
                  </button>
                  <button
                    type="button"
                    className="relative z-10 px-3 h-full flex items-center justify-center text-[14px] text-text-muted hover:text-text-primary rounded-md transition-colors"
                  >
                    {t.general.preferences.reduced}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Section */}
        <section className="mb-8 md:mb-10 last:mb-0">
          <div className="mb-4 flex items-start justify-between gap-6">
            <div className="flex min-w-0 flex-col gap-1">
              <h3 className="text-lg font-semibold text-text-primary self-start">
                {t.general.voice.title}
              </h3>
            </div>
          </div>
          <div className="divide-y-[0.5px] divide-border-soft">
            <div className="flex items-center justify-between gap-6 py-4">
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <div className="text-[15px] text-text-primary font-medium">
                  {t.general.voice.language}
                </div>
              </div>
              <div className="flex shrink-0 items-center">
                <button
                  type="button"
                  className="flex items-center gap-2 h-8 px-2 rounded-lg bg-transparent hover:bg-bg-hover text-text-primary transition-colors"
                >
                  <span>{t.general.voice.english}</span>
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    className="text-text-muted"
                  >
                    <path
                      d="M3 4.5l3 3 3-3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6 py-4">
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <div className="text-[15px] text-text-primary font-medium">
                  {t.general.voice.style}
                </div>
              </div>
              <div className="flex shrink-0 items-center">
                <button
                  type="button"
                  className="flex items-center gap-2 h-8 px-2 rounded-lg bg-transparent hover:bg-bg-hover text-text-primary transition-colors"
                >
                  <span>{t.general.voice.buttery}</span>
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    className="text-text-muted"
                  >
                    <path
                      d="M3 4.5l3 3 3-3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6 py-4">
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <div className="text-[15px] text-text-primary font-medium">
                  {t.general.voice.speed}
                </div>
              </div>
              <div className="flex shrink-0 items-center">
                <button
                  type="button"
                  className="flex items-center gap-2 h-8 px-2 rounded-lg bg-transparent hover:bg-bg-hover text-text-primary transition-colors"
                >
                  <span>{t.general.voice.normal}</span>
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    className="text-text-muted"
                  >
                    <path
                      d="M3 4.5l3 3 3-3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Notifications Section */}
        <section className="mb-8 md:mb-10 last:mb-0">
          <div className="mb-4 flex items-start justify-between gap-6">
            <div className="flex min-w-0 flex-col gap-1">
              <h3 className="text-lg font-semibold text-text-primary self-start">
                {t.general.notifications.title}
              </h3>
            </div>
          </div>
          <div className="divide-y-[0.5px] divide-border-soft">
            <div className="flex items-center justify-between gap-6 py-4">
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <div className="text-[15px] text-text-primary font-medium">
                  {t.general.notifications.responseCompletions}
                </div>
                <div className="text-[14px] text-text-muted">
                  {t.general.notifications.responseCompletionsSubtitle}
                </div>
              </div>
              <div className="flex shrink-0 items-center">
                {/* Switch */}
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full outline-none bg-bg-soft border border-border-soft transition-colors"
                >
                  <span className="absolute left-[2px] h-[16px] w-[16px] rounded-full bg-text-muted transition-transform translate-x-0 shadow-sm"></span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6 py-4">
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <div className="text-[15px] text-text-primary font-medium">
                  {t.general.notifications.dispatchMessages}
                </div>
                <div className="text-[14px] text-text-muted">
                  {t.general.notifications.dispatchMessagesSubtitle}
                </div>
              </div>
              <div className="flex shrink-0 items-center">
                {/* Switch */}
                <button
                  type="button"
                  role="switch"
                  aria-checked="false"
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full outline-none bg-bg-soft border border-border-soft transition-colors"
                >
                  <span className="absolute left-[2px] h-[16px] w-[16px] rounded-full bg-text-muted transition-transform translate-x-0 shadow-sm"></span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
