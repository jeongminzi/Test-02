import { ReactNode } from "react";

export type InfoBoxTone = "neutral" | "warning" | "critical" | "positive" | "informative";

export interface InfoBoxProps {
  tone?: InfoBoxTone;
  icon?: ReactNode;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}

const toneClass: Record<InfoBoxTone, string> = {
  neutral: "bg-bg-neutral-subtle text-fg-neutral-muted",
  warning: "bg-bg-warning-weak text-fg-warning-contrast",
  critical: "bg-bg-critical-weak text-fg-critical-contrast",
  positive: "bg-bg-positive-weak text-fg-positive-contrast",
  informative: "bg-bg-informative-weak text-fg-informative-solid",
};

export function InfoBox({ tone = "neutral", icon, title, children, className = "" }: InfoBoxProps) {
  return (
    <div className={["rounded-xl p-4", toneClass[tone], className].join(" ")}>
      <div className="flex items-start gap-2">
        {icon && <div className="mt-0.5 shrink-0">{icon}</div>}
        <div className="flex-1 min-w-0 text-xs leading-relaxed">
          {title && <p className="text-sm font-bold mb-0.5">{title}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}
