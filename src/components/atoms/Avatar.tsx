import { HTMLAttributes } from "react";

export type AvatarSize = "sm" | "md" | "lg" | "xl";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  size?: AvatarSize;
  name?: string;
  src?: string;
}

const sizeClass: Record<AvatarSize, string> = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base",
  xl: "w-20 h-20 text-xl",
};

export function Avatar({ size = "md", name = "?", src, className = "", ...rest }: AvatarProps) {
  const initial = name.trim().slice(0, 1) || "?";
  return (
    <div
      className={[
        "inline-flex items-center justify-center rounded-full font-semibold bg-bg-brand-weak text-fg-brand-solid overflow-hidden shrink-0",
        sizeClass[size],
        className,
      ].join(" ")}
      {...rest}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        initial
      )}
    </div>
  );
}
