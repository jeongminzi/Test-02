import { HTMLAttributes, ReactNode } from "react";

export type BadgeTone =
  | "neutral"
  | "brand"
  | "positive"
  | "critical"
  | "warning"
  | "informative"
  | "inverse";
export type BadgeVariant = "weak" | "solid";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  variant?: BadgeVariant;
  leadingIcon?: ReactNode;
}

const weakMap: Record<BadgeTone, string> = {
  neutral: "bg-bg-neutral-weak text-fg-neutral-muted",
  brand: "bg-bg-brand-weak text-fg-brand-solid",
  positive: "bg-bg-positive-weak text-fg-positive-solid",
  critical: "bg-bg-critical-weak text-fg-critical-muted",
  warning: "bg-bg-warning-weak text-fg-warning-solid",
  informative: "bg-bg-informative-weak text-fg-informative-solid",
  inverse: "bg-bg-neutral-weak text-fg-neutral-muted",
};

const solidMap: Record<BadgeTone, string> = {
  neutral: "bg-bg-neutral-solid text-fg-neutral-inverted",
  brand: "bg-bg-brand-solid text-fg-neutral-inverted",
  positive: "bg-bg-positive-solid text-fg-neutral-inverted",
  critical: "bg-bg-critical-solid text-fg-neutral-inverted",
  warning: "bg-bg-warning-muted text-fg-warning-contrast",
  informative: "bg-fg-informative-solid text-fg-neutral-inverted",
  inverse: "bg-bg-neutral-solid text-fg-neutral-inverted",
};

export function Badge({
  tone = "neutral",
  variant = "weak",
  leadingIcon,
  className = "",
  children,
  ...rest
}: BadgeProps) {
  const palette = variant === "solid" ? solidMap[tone] : weakMap[tone];
  return (
    <span
      className={[
        "inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-full",
        palette,
        className,
      ].join(" ")}
      {...rest}
    >
      {leadingIcon}
      {children}
    </span>
  );
}
