import { ReactNode } from "react";

export type SectionTitleVariant = "headingOnly" | "captionAbove" | "withAction";

export interface SectionTitleProps {
  /** Main heading text */
  title: string;
  /** Small caption shown above the heading (captionAbove variant) */
  caption?: string;
  /** Right-aligned action slot (withAction variant), typically a "전체보기" link */
  action?: ReactNode;
  variant?: SectionTitleVariant;
  className?: string;
}

export function SectionTitle({
  title,
  caption,
  action,
  variant = "headingOnly",
  className = "",
}: SectionTitleProps) {
  if (variant === "captionAbove") {
    return (
      <div className={className}>
        {caption && (
          <p className="text-xs font-medium text-fg-brand-solid mb-1">{caption}</p>
        )}
        <h2 className="text-lg font-bold text-fg-neutral-solid">{title}</h2>
      </div>
    );
  }
  if (variant === "withAction") {
    return (
      <div className={["flex items-end justify-between", className].join(" ")}>
        <h2 className="text-base font-bold text-fg-neutral-solid">{title}</h2>
        {action}
      </div>
    );
  }
  return <h2 className={["text-base font-bold text-fg-neutral-solid", className].join(" ")}>{title}</h2>;
}
