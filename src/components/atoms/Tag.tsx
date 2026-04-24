import { HTMLAttributes } from "react";

export type TagVariant = "outlined" | "filled" | "subtle";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
}

const variantClass: Record<TagVariant, string> = {
  outlined: "border border-stroke-brand-solid text-fg-brand-solid bg-bg-layer-floating",
  filled: "bg-bg-brand-solid text-fg-neutral-inverted",
  subtle: "bg-bg-brand-weak text-fg-brand-solid",
};

export function Tag({ variant = "outlined", className = "", children, ...rest }: TagProps) {
  return (
    <span
      className={[
        "inline-flex items-center text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap",
        variantClass[variant],
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </span>
  );
}
