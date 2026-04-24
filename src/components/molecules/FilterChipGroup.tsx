import { Chip, ChipVariant } from "../atoms/Chip";

export interface FilterChipGroupProps {
  options: string[];
  value: string;
  onChange: (next: string) => void;
  /**
   * filled (default) — tab-style filters (예정/완료/취소).
   * outlined — interactive keyword chips (인기 검색어).
   */
  variant?: ChipVariant;
  className?: string;
}

export function FilterChipGroup({
  options,
  value,
  onChange,
  variant = "filled",
  className = "",
}: FilterChipGroupProps) {
  return (
    <div className={["flex gap-2 overflow-x-auto no-scrollbar", className].join(" ")} role="tablist">
      {options.map((opt) => (
        <Chip
          key={opt}
          variant={variant}
          active={opt === value}
          onClick={() => onChange(opt)}
          role="tab"
          aria-selected={opt === value}
        >
          {opt}
        </Chip>
      ))}
    </div>
  );
}
