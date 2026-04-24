import { ReactNode } from "react";

export interface ListItemProps {
  leading?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  trailing?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ListItem({ leading, title, subtitle, trailing, onClick, className = "" }: ListItemProps) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      onClick={onClick}
      className={[
        "w-full flex items-center gap-3 py-3 text-left",
        onClick ? "cursor-pointer hover:bg-bg-neutral-subtle rounded-[var(--radius-control)] px-2 -mx-2" : "",
        className,
      ].join(" ")}
    >
      {leading && <div className="shrink-0">{leading}</div>}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-fg-neutral-solid truncate">{title}</div>
        {subtitle && <div className="text-xs text-fg-neutral-subtle truncate mt-0.5">{subtitle}</div>}
      </div>
      {trailing && <div className="shrink-0">{trailing}</div>}
    </Tag>
  );
}
