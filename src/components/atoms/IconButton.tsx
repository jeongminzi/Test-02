import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

export type IconButtonVariant = "solid" | "ghost" | "outline";
export type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  "aria-label": string;
  icon: ReactNode;
}

const variantClass: Record<IconButtonVariant, string> = {
  solid: "bg-bg-brand-solid text-fg-neutral-inverted hover:bg-bg-brand-solid-pressed",
  ghost: "bg-transparent text-fg-neutral-muted hover:bg-bg-neutral-subtle",
  outline: "bg-bg-layer-floating border border-stroke-neutral-muted text-fg-neutral-muted hover:bg-bg-neutral-subtle",
};

const sizeClass: Record<IconButtonSize, string> = {
  sm: "h-8 w-8 rounded-[var(--radius-control)]",
  md: "h-10 w-10 rounded-[var(--radius-control)]",
  lg: "h-14 w-14 rounded-full",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { variant = "ghost", size = "md", icon, className = "", ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={[
        "inline-flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        variantClass[variant],
        sizeClass[size],
        className,
      ].join(" ")}
      {...rest}
    >
      {icon}
    </button>
  );
});
