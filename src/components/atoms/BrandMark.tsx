export type BrandMarkSize = "sm" | "md" | "lg";

export interface BrandMarkProps {
  size?: BrandMarkSize;
  logoSrc?: string;
  label?: string;
  className?: string;
  hideLabel?: boolean;
}

const sizeClass: Record<BrandMarkSize, { wrap: string; img: number; label: string }> = {
  sm: { wrap: "gap-1", img: 20, label: "text-sm font-bold" },
  md: { wrap: "gap-1.5", img: 26, label: "text-base font-bold" },
  lg: { wrap: "gap-2", img: 40, label: "text-2xl font-bold" },
};

export function BrandMark({
  size = "md",
  logoSrc = "/photopop-logo.png",
  label = "포토팟",
  hideLabel = false,
  className = "",
}: BrandMarkProps) {
  const s = sizeClass[size];
  return (
    <span className={["inline-flex items-center", s.wrap, className].join(" ")}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt={label}
        width={s.img}
        height={s.img}
        style={{ width: s.img, height: s.img }}
        className="object-contain"
      />
      {!hideLabel && <span className={[s.label, "text-fg-neutral-solid"].join(" ")}>{label}</span>}
    </span>
  );
}
