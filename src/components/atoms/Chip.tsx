import { ButtonHTMLAttributes } from "react";

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function Chip({ active, className = "", children, ...rest }: ChipProps) {
  return (
    <button
      className={[
        "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap",
        active
          ? "bg-bg-brand-solid text-fg-neutral-inverted"
          : "bg-bg-neutral-subtle text-fg-neutral-muted hover:bg-bg-neutral-weak",
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
