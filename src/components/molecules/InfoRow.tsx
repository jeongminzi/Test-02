import { ReactNode } from "react";

export interface InfoRowProps {
  label: ReactNode;
  value: ReactNode;
  emphasis?: "default" | "strong" | "brand";
  className?: string;
}

const valueClass: Record<NonNullable<InfoRowProps["emphasis"]>, string> = {
  default: "text-fg-neutral-solid font-medium",
  strong: "text-fg-neutral-solid font-bold",
  brand: "text-fg-brand-solid font-bold",
};

export function InfoRow({ label, value, emphasis = "default", className = "" }: InfoRowProps) {
  return (
    <div className={["flex items-center justify-between text-sm", className].join(" ")}>
      <span className="text-fg-neutral-subtle">{label}</span>
      <span className={valueClass[emphasis]}>{value}</span>
    </div>
  );
}
