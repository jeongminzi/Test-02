import { ReactNode } from "react";
import { StarRating } from "../atoms/StarRating";
import { Badge } from "../atoms/Badge";
import { Tag } from "../atoms/Tag";

export type StudioCardVariant = "featured" | "compact" | "list";

export interface StudioCardProps {
  name: string;
  location: string;
  price?: string;
  rating: number;
  reviewCount?: number;
  tags?: string[];
  imageSlot?: ReactNode;
  /** "HOT" / "AD" / "NEW" — small solid badge over the image */
  ribbon?: string;
  ribbonTone?: "critical" | "neutral" | "brand";
  variant?: StudioCardVariant;
  onClick?: () => void;
  className?: string;
}

function ImageArea({ children }: { children?: ReactNode }) {
  if (children) return <>{children}</>;
  return (
    <div className="w-full h-full bg-gradient-to-br from-bg-neutral-subtle to-bg-neutral-weak flex items-center justify-center text-fg-neutral-subtle text-xs">
      IMG
    </div>
  );
}

export function StudioCard({
  name,
  location,
  price,
  rating,
  reviewCount,
  tags = [],
  imageSlot,
  ribbon,
  ribbonTone = "critical",
  variant = "featured",
  onClick,
  className = "",
}: StudioCardProps) {
  const ribbonEl = ribbon && (
    <Badge
      variant="solid"
      tone={ribbonTone}
      className="absolute top-2 left-2 !text-[9px] !px-2 !py-0.5"
    >
      {ribbon}
    </Badge>
  );

  if (variant === "list") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={[
          "w-full flex gap-3 py-3 text-left border-b border-stroke-neutral-subtle last:border-b-0",
          className,
        ].join(" ")}
      >
        <div className="relative w-16 h-16 shrink-0 rounded-[var(--radius-control)] overflow-hidden">
          <ImageArea>{imageSlot}</ImageArea>
          {ribbonEl}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-fg-neutral-solid truncate">{name}</div>
          <div className="text-xs text-fg-neutral-subtle truncate">{location}</div>
          <div className="mt-1 flex items-center gap-2">
            <StarRating value={rating} size={11} reviewCount={reviewCount} />
            {price && <span className="text-xs font-bold text-fg-brand-solid">{price}</span>}
          </div>
        </div>
      </button>
    );
  }

  const width = variant === "compact" ? "w-32" : "w-44";
  const imageHeight = variant === "compact" ? "h-20" : "h-28";

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "shrink-0 flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-stroke-neutral-subtle bg-bg-layer-floating text-left shadow-[var(--shadow-card)]",
        width,
        className,
      ].join(" ")}
    >
      <div className={["relative w-full", imageHeight].join(" ")}>
        <ImageArea>{imageSlot}</ImageArea>
        {ribbonEl}
      </div>
      <div className="p-3">
        <div className="text-sm font-semibold text-fg-neutral-solid truncate">{name}</div>
        <div className="text-xs text-fg-neutral-subtle truncate mt-0.5">{location}</div>
        {tags.length > 0 && (
          <div className="mt-2 flex gap-1 flex-wrap">
            {tags.slice(0, 2).map((t) => (
              <Tag key={t} variant="subtle" className="!text-[10px] !py-0 !px-1.5">
                {t}
              </Tag>
            ))}
          </div>
        )}
        <div className="mt-2 flex items-center justify-between">
          <StarRating value={rating} size={11} reviewCount={reviewCount} showValue />
          {price && <span className="text-xs font-bold text-fg-brand-solid">{price}</span>}
        </div>
      </div>
    </button>
  );
}
