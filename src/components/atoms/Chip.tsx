import { ButtonHTMLAttributes } from "react";

export type ChipVariant = "filled" | "outlined";

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  /**
   * filled (default): solid brand background when active — tab-style filters (예정/완료/취소).
   * outlined: brand border + brand text when active — interactive keyword chips (인기 검색어).
   */
  variant?: ChipVariant;
}

const filledState = {
  active: "bg-bg-brand-solid text-fg-neutral-inverted border border-transparent",
  inactive: "bg-bg-neutral-subtle text-fg-neutral-muted border border-transparent hover:bg-bg-neutral-weak",
};

const outlinedState = {
  active: "bg-bg-layer-floating text-fg-brand-solid border-[1.5px] border-stroke-brand-solid",
  inactive:
    "bg-bg-layer-floating text-fg-neutral-muted border-[1.5px] border-stroke-neutral-muted hover:border-stroke-neutral-solid",
};

export function Chip({ active, variant = "filled", className = "", children, ...rest }: ChipProps) {
  const palette = variant === "outlined" ? outlinedState : filledState;
  return (
    <button
      className={[
        "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap",
        active ? palette.active : palette.inactive,
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
