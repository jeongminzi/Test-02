import { ReactNode } from "react";

export type KpiCardTone = "brand" | "positive" | "critical" | "neutral";

export interface KpiCardProps {
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  icon?: ReactNode;
  tone?: KpiCardTone;
  className?: string;
}

const toneClass: Record<KpiCardTone, { bg: string; number: string; border: string }> = {
  brand: { bg: "bg-bg-brand-weak", number: "text-fg-brand-solid", border: "border-stroke-brand-muted" },
  positive: { bg: "bg-bg-positive-weak", number: "text-fg-positive-solid", border: "border-stroke-positive-solid/30" },
  critical: { bg: "bg-bg-critical-weak", number: "text-fg-critical-muted", border: "border-stroke-critical-solid/30" },
  neutral: { bg: "bg-bg-neutral-subtle", number: "text-fg-neutral-solid", border: "border-stroke-neutral-subtle" },
};

export function KpiCard({ label, value, sub, icon, tone = "brand", className = "" }: KpiCardProps) {
  const c = toneClass[tone];
  return (
    <div className={["rounded-[var(--radius-card)] p-4 border text-center", c.bg, c.border, className].join(" ")}>
      {icon && <div className="flex items-center justify-center gap-1 mb-2 text-fg-neutral-subtle">{icon}</div>}
      <p className="text-[10px] text-fg-neutral-subtle">{label}</p>
      <p className={["text-xl font-bold mt-0.5", c.number].join(" ")}>{value}</p>
      {sub && <p className="text-[10px] text-fg-neutral-subtle mt-1">{sub}</p>}
    </div>
  );
}
