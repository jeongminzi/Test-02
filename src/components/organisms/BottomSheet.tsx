import { ReactNode, useEffect } from "react";

export interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function BottomSheet({ open, onClose, title, children, footer, className = "" }: BottomSheetProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-bg-layer-overlay"
      onClick={onClose}
    >
      <div
        className={[
          "w-full bg-bg-layer-floating rounded-t-[var(--radius-sheet)] pb-8 pt-2 shadow-[var(--shadow-modal)]",
          className,
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="w-12 h-1 bg-bg-neutral-muted rounded-full mx-auto mb-3" aria-hidden />
        {title && (
          <div className="px-5 pb-3">
            <h3 className="text-base font-bold text-fg-neutral-solid">{title}</h3>
          </div>
        )}
        <div className="px-5">{children}</div>
        {footer && <div className="mt-4 px-5 flex gap-2">{footer}</div>}
      </div>
    </div>
  );
}
