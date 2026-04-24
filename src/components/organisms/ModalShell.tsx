import { X } from "lucide-react";
import { ReactNode, useEffect } from "react";

export interface ModalShellProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  /** md (default) for dialogs, lg for content-heavy detail views. */
  size?: "md" | "lg";
  className?: string;
}

export function ModalShell({
  open,
  onClose,
  title,
  footer,
  children,
  size = "md",
  className = "",
}: ModalShellProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const widthClass = size === "lg" ? "max-w-2xl" : "max-w-md";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-layer-overlay"
      onClick={onClose}
    >
      <div
        className={[
          "w-full rounded-[var(--radius-modal)] bg-bg-layer-floating shadow-[var(--shadow-modal)] overflow-hidden",
          widthClass,
          className,
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {title && (
          <header className="flex items-center justify-between p-5 border-b border-stroke-neutral-subtle">
            <h3 className="text-base font-bold text-fg-neutral-solid">{title}</h3>
            <button
              aria-label="닫기"
              onClick={onClose}
              className="text-fg-neutral-subtle hover:text-fg-neutral-muted"
            >
              <X size={18} />
            </button>
          </header>
        )}
        <div className="p-5">{children}</div>
        {footer && (
          <footer className="flex items-center justify-end gap-2 p-4 border-t border-stroke-neutral-subtle">
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
}
