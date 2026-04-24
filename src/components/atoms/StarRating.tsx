import { Star } from "lucide-react";

export interface StarRatingProps {
  value: number;
  max?: number;
  size?: number;
  showValue?: boolean;
  reviewCount?: number;
  className?: string;
}

export function StarRating({
  value,
  max = 5,
  size = 12,
  showValue = true,
  reviewCount,
  className = "",
}: StarRatingProps) {
  const filled = Math.round(value);
  return (
    <span className={["inline-flex items-center gap-1", className].join(" ")}>
      <span className="inline-flex">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={i < filled ? "text-fg-rating-solid" : "text-fg-neutral-subtle"}
            fill={i < filled ? "currentColor" : "none"}
            strokeWidth={1.5}
          />
        ))}
      </span>
      {showValue && <span className="text-xs text-fg-neutral-muted font-medium">{value.toFixed(1)}</span>}
      {typeof reviewCount === "number" && (
        <span className="text-xs text-fg-neutral-subtle">({reviewCount.toLocaleString()})</span>
      )}
    </span>
  );
}
