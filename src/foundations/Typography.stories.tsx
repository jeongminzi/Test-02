import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Typography",
};
export default meta;

const scale: Array<{ token: string; fontSize: string; weight: number; lineHeight: number | string }> = [
  { token: "display.md", fontSize: "30px", weight: 700, lineHeight: 1.2 },
  { token: "heading.xl", fontSize: "24px", weight: 700, lineHeight: 1.3 },
  { token: "heading.lg", fontSize: "20px", weight: 700, lineHeight: 1.3 },
  { token: "heading.md", fontSize: "18px", weight: 700, lineHeight: 1.4 },
  { token: "heading.sm", fontSize: "16px", weight: 700, lineHeight: 1.4 },
  { token: "body.lg", fontSize: "15px", weight: 400, lineHeight: 1.5 },
  { token: "body.md", fontSize: "14px", weight: 400, lineHeight: 1.5 },
  { token: "body.sm", fontSize: "13px", weight: 400, lineHeight: 1.5 },
  { token: "label.md", fontSize: "12px", weight: 500, lineHeight: 1.4 },
  { token: "label.sm", fontSize: "11px", weight: 500, lineHeight: 1.3 },
  { token: "caption.md", fontSize: "10px", weight: 500, lineHeight: 1.3 },
  { token: "caption.sm", fontSize: "9px", weight: 600, lineHeight: 1.2 },
];

export const Scale: StoryObj = {
  render: () => (
    <div className="p-4 space-y-4">
      {scale.map((s) => (
        <div key={s.token} className="flex items-baseline gap-6">
          <code className="text-[11px] font-mono text-fg-neutral-subtle w-28 shrink-0">{s.token}</code>
          <span
            className="text-fg-neutral-solid"
            style={{ fontSize: s.fontSize, fontWeight: s.weight, lineHeight: s.lineHeight }}
          >
            가나다라마 Abc 123
          </span>
          <span className="text-[11px] text-fg-neutral-subtle">
            {s.fontSize} · {s.weight}
          </span>
        </div>
      ))}
    </div>
  ),
};
