import { Chip } from "../atoms/Chip";

export interface FilterChipGroupProps {
  options: string[];
  value: string;
  onChange: (next: string) => void;
  className?: string;
}

export function FilterChipGroup({ options, value, onChange, className = "" }: FilterChipGroupProps) {
  return (
    <div className={["flex gap-2 overflow-x-auto no-scrollbar", className].join(" ")} role="tablist">
      {options.map((opt) => (
        <Chip
          key={opt}
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
