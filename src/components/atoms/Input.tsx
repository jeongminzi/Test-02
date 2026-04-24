import { InputHTMLAttributes, forwardRef, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { invalid, leadingIcon, trailingIcon, className = "", ...rest },
  ref,
) {
  return (
    <div
      className={[
        "flex items-center gap-2 h-11 px-4 rounded-[var(--radius-control)] bg-bg-neutral-subtle border",
        invalid ? "border-stroke-critical-solid" : "border-stroke-neutral-subtle focus-within:border-stroke-brand-solid",
        className,
      ].join(" ")}
    >
      {leadingIcon && <span className="text-fg-neutral-subtle shrink-0">{leadingIcon}</span>}
      <input
        ref={ref}
        className="flex-1 bg-transparent text-sm text-fg-neutral-solid placeholder:text-fg-neutral-subtle outline-none"
        {...rest}
      />
      {trailingIcon && <span className="text-fg-neutral-subtle shrink-0">{trailingIcon}</span>}
    </div>
  );
});
