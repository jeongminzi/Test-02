import { ChevronLeft, Bell } from "lucide-react";
import { ReactNode } from "react";
import { BrandMark } from "../atoms/BrandMark";
import { IconButton } from "../atoms/IconButton";
import { NotificationDot } from "../atoms/NotificationDot";

export type AppHeaderVariant = "brand" | "titled";

export interface AppHeaderProps {
  /**
   * brand: shows the BrandMark on the left (Depth 1 screens).
   * titled: shows back button + title in the middle (Depth 2+ screens).
   */
  variant?: AppHeaderVariant;
  /** Title string, used with variant="titled". */
  title?: string;
  /** Called when the back button is clicked. */
  onBack?: () => void;
  /** Override default bell icon (e.g., suppress on auth screens). */
  trailing?: ReactNode;
  /** Show red dot on bell. */
  hasNotifications?: boolean;
  onBellClick?: () => void;
  className?: string;
}

export function AppHeader({
  variant = "brand",
  title,
  onBack,
  trailing,
  hasNotifications = false,
  onBellClick,
  className = "",
}: AppHeaderProps) {
  const defaultTrailing = trailing ?? (
    <NotificationDot visible={hasNotifications}>
      <IconButton
        aria-label="알림"
        variant="ghost"
        icon={<Bell size={20} strokeWidth={1.8} />}
        onClick={onBellClick}
      />
    </NotificationDot>
  );

  return (
    <header
      className={[
        "sticky top-0 z-10 h-14 px-3 flex items-center justify-between bg-bg-layer-floating border-b border-stroke-neutral-subtle",
        className,
      ].join(" ")}
    >
      <div className="flex items-center gap-1 min-w-0">
        {variant === "titled" ? (
          <>
            <IconButton
              aria-label="뒤로가기"
              variant="ghost"
              icon={<ChevronLeft size={22} strokeWidth={2} />}
              onClick={onBack}
            />
            {title && (
              <span className="text-base font-bold text-fg-neutral-solid truncate">{title}</span>
            )}
          </>
        ) : (
          <BrandMark size="sm" />
        )}
      </div>
      <div className="shrink-0">{defaultTrailing}</div>
    </header>
  );
}
