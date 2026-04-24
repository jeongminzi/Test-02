import { HTMLAttributes, ReactNode } from "react";

export interface NotificationDotProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "brand" | "critical";
  visible?: boolean;
  children?: ReactNode;
}

export function NotificationDot({
  tone = "critical",
  visible = true,
  className = "",
  children,
  ...rest
}: NotificationDotProps) {
  if (!children) {
    return (
      <span
        aria-hidden
        className={[
          "inline-block w-2 h-2 rounded-full",
          tone === "brand" ? "bg-bg-brand-solid" : "bg-bg-critical-solid",
          !visible ? "opacity-0" : "",
          className,
        ].join(" ")}
        {...rest}
      />
    );
  }
  return (
    <span className={["relative inline-flex", className].join(" ")} {...rest}>
      {children}
      {visible && (
        <span
          aria-hidden
          className={[
            "absolute top-0.5 right-0.5 w-2 h-2 rounded-full",
            tone === "brand" ? "bg-bg-brand-solid" : "bg-bg-critical-solid",
          ].join(" ")}
        />
      )}
    </span>
  );
}
