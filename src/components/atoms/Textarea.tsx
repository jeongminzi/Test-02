import { TextareaHTMLAttributes, forwardRef } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { invalid, className = "", rows = 4, ...rest },
  ref,
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={[
        "w-full p-4 rounded-[var(--radius-control)] bg-bg-neutral-subtle text-sm text-fg-neutral-solid",
        "placeholder:text-fg-neutral-subtle resize-none outline-none border",
        invalid ? "border-stroke-critical-solid" : "border-stroke-neutral-subtle focus:border-stroke-brand-solid",
        className,
      ].join(" ")}
      {...rest}
    />
  );
});
