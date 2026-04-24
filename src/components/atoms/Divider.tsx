import { HTMLAttributes } from "react";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** solid line or dashed break */
  variant?: "solid" | "dashed";
  /** thick strong vs default subtle */
  emphasis?: "subtle" | "muted";
  orientation?: "horizontal" | "vertical";
}

export function Divider({
  variant = "solid",
  emphasis = "subtle",
  orientation = "horizontal",
  className = "",
  ...rest
}: DividerProps) {
  const color = emphasis === "muted" ? "border-stroke-neutral-muted" : "border-stroke-neutral-subtle";
  const dashed = variant === "dashed" ? "border-dashed" : "border-solid";
  const axis = orientation === "vertical" ? "border-l h-full" : "border-t w-full";
  return <div className={[axis, dashed, color, className].join(" ")} {...rest} />;
}
