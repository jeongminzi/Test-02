import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-bg-brand-solid text-fg-neutral-inverted hover:bg-bg-brand-solid-pressed disabled:bg-bg-neutral-weak disabled:text-fg-neutral-subtle",
  secondary:
    "bg-bg-neutral-subtle text-fg-neutral-muted hover:bg-bg-neutral-weak disabled:text-fg-neutral-subtle",
  ghost:
    "bg-transparent text-fg-brand-solid hover:bg-bg-brand-weak disabled:text-fg-neutral-subtle",
  outline:
    "bg-transparent text-fg-brand-solid border border-stroke-brand-solid hover:bg-bg-brand-weak disabled:border-stroke-neutral-muted disabled:text-fg-neutral-subtle",
  danger:
    "bg-bg-critical-solid text-fg-neutral-inverted hover:opacity-90 disabled:bg-bg-neutral-weak disabled:text-fg-neutral-subtle",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs rounded-[var(--radius-control)] font-medium gap-1",
  md: "h-11 px-4 text-sm rounded-[var(--radius-control)] font-semibold gap-1.5",
  lg: "h-13 px-5 text-sm rounded-[var(--radius-card)] font-bold gap-2",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", fullWidth, leadingIcon, trailingIcon, className = "", children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={[
        "inline-flex items-center justify-center transition-colors disabled:cursor-not-allowed whitespace-nowrap",
        variantClass[variant],
        sizeClass[size],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...rest}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
});
