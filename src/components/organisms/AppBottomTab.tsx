import { Home, LayoutGrid, User } from "lucide-react";
import { ReactNode } from "react";

export type TabKey = "home" | "category" | "mypage";

export interface AppBottomTabProps {
  /**
   * Page depth. depth=1 shows the tab bar; depth>=2 hides it (mobile GNB rule).
   * Keeps show/hide logic inside the component so consumers don't reinvent it.
   */
  depth?: number;
  active?: TabKey;
  onChange?: (tab: TabKey) => void;
  /** Custom tab definitions (e.g., business app swaps the 3rd tab copy). */
  tabs?: Array<{ key: TabKey; label: string; icon: ReactNode }>;
  className?: string;
}

const defaultTabs: NonNullable<AppBottomTabProps["tabs"]> = [
  { key: "home", label: "홈", icon: <Home size={20} strokeWidth={1.8} /> },
  { key: "category", label: "카테고리", icon: <LayoutGrid size={20} strokeWidth={1.8} /> },
  { key: "mypage", label: "MY", icon: <User size={20} strokeWidth={1.8} /> },
];

export function AppBottomTab({
  depth = 1,
  active = "home",
  onChange,
  tabs = defaultTabs,
  className = "",
}: AppBottomTabProps) {
  if (depth >= 2) return null;
  return (
    <nav
      role="tablist"
      aria-label="주요 네비게이션"
      className={[
        "sticky bottom-0 grid grid-cols-3 border-t border-stroke-neutral-subtle bg-bg-layer-floating h-14",
        className,
      ].join(" ")}
    >
      {tabs.map((t) => {
        const isActive = t.key === active;
        return (
          <button
            key={t.key}
            role="tab"
            aria-selected={isActive}
            className={[
              "flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors",
              isActive ? "text-fg-brand-solid" : "text-fg-neutral-subtle hover:text-fg-neutral-muted",
            ].join(" ")}
            onClick={() => onChange?.(t.key)}
          >
            {t.icon}
            <span>{t.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
