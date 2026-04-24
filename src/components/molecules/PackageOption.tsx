import { Check } from "lucide-react";

export interface PackageOptionProps {
  name: string;
  description?: string;
  price: string;
  /** Strikethrough original price shown next to the final price (optional). */
  originalPrice?: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function PackageOption({
  name,
  description,
  price,
  originalPrice,
  selected,
  onClick,
  className = "",
}: PackageOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={[
        "w-full flex justify-between items-start p-3 rounded-[var(--radius-control)] border text-left transition-colors",
        selected
          ? "border-stroke-brand-solid bg-bg-brand-weak"
          : "border-stroke-neutral-subtle bg-bg-layer-floating hover:bg-bg-neutral-subtle",
        className,
      ].join(" ")}
    >
      <div className="flex-1 min-w-0 pr-3">
        <div className="flex items-center gap-2">
          <span
            className={[
              "w-4 h-4 rounded-full border flex items-center justify-center",
              selected ? "border-stroke-brand-solid bg-bg-brand-solid text-fg-neutral-inverted" : "border-stroke-neutral-muted",
            ].join(" ")}
          >
            {selected && <Check size={10} strokeWidth={3} />}
          </span>
          <span className="text-sm font-semibold text-fg-neutral-solid">{name}</span>
        </div>
        {description && (
          <p className="mt-1 ml-6 text-xs text-fg-neutral-subtle leading-relaxed">{description}</p>
        )}
      </div>
      <div className="text-right shrink-0">
        {originalPrice && (
          <div className="text-[10px] text-fg-neutral-subtle line-through">{originalPrice}</div>
        )}
        <div className="text-sm font-bold text-fg-brand-solid">{price}</div>
      </div>
    </button>
  );
}
