import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface DatePickerProps {
  /** Selected date (YYYY-MM-DD), controlled. */
  value?: string;
  onChange?: (next: string) => void;
  /** Disabled dates (YYYY-MM-DD). */
  disabledDates?: string[];
  /** Dates that should be highlighted as "available" (YYYY-MM-DD). */
  availableDates?: string[];
  className?: string;
}

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

function fmt(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function DatePicker({
  value,
  onChange,
  disabledDates = [],
  availableDates,
  className = "",
}: DatePickerProps) {
  const today = new Date();
  const [cursor, setCursor] = useState<Date>(() => {
    if (value) {
      const [y, m] = value.split("-").map(Number);
      return new Date(y, m - 1, 1);
    }
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  const grid = useMemo(() => {
    const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
    const daysInMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();
    const lead = first.getDay();
    const cells: Array<Date | null> = [];
    for (let i = 0; i < lead; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(cursor.getFullYear(), cursor.getMonth(), d));
    while (cells.length % 7) cells.push(null);
    return cells;
  }, [cursor]);

  const isDisabled = (d: Date) => disabledDates.includes(fmt(d));
  const isAvailable = (d: Date) =>
    !availableDates || availableDates.includes(fmt(d));

  return (
    <div className={["w-full", className].join(" ")}>
      <div className="flex items-center justify-between mb-3">
        <button
          aria-label="이전 달"
          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
          className="p-1.5 text-fg-neutral-muted hover:text-fg-neutral-solid"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="text-sm font-bold text-fg-neutral-solid">
          {cursor.getFullYear()}년 {cursor.getMonth() + 1}월
        </div>
        <button
          aria-label="다음 달"
          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
          className="p-1.5 text-fg-neutral-muted hover:text-fg-neutral-solid"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="grid grid-cols-7 text-center text-[10px] text-fg-neutral-subtle mb-1">
        {WEEKDAYS.map((w) => (
          <div key={w}>{w}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center text-xs">
        {grid.map((d, i) => {
          if (!d) return <div key={i} className="h-9" />;
          const iso = fmt(d);
          const selected = value === iso;
          const disabled = isDisabled(d);
          const available = !disabled && isAvailable(d);
          return (
            <button
              key={iso}
              disabled={disabled}
              onClick={() => onChange?.(iso)}
              className={[
                "h-9 rounded-[var(--radius-control)] font-medium transition-colors",
                selected
                  ? "bg-bg-brand-solid text-fg-neutral-inverted font-bold"
                  : disabled
                    ? "text-fg-neutral-subtle line-through"
                    : available
                      ? "bg-bg-brand-weak text-fg-brand-solid hover:bg-bg-brand-weak-alt"
                      : "text-fg-neutral-muted hover:bg-bg-neutral-subtle",
              ].join(" ")}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
