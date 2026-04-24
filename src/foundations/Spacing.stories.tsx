import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Spacing" };
export default meta;

const tokens = [
  { name: "comp-xs", px: 4 },
  { name: "comp-sm", px: 8 },
  { name: "comp-md", px: 12 },
  { name: "comp-lg", px: 16 },
  { name: "comp-xl", px: 20 },
  { name: "comp-2xl", px: 24 },
  { name: "layout-sm", px: 16 },
  { name: "layout-md", px: 24 },
  { name: "layout-lg", px: 32 },
  { name: "layout-xl", px: 48 },
];

export const Ruler: StoryObj = {
  render: () => (
    <div className="p-4 space-y-3">
      {tokens.map((t) => (
        <div key={t.name} className="flex items-center gap-3">
          <code className="text-[11px] font-mono text-fg-neutral-muted w-20">{t.name}</code>
          <div
            className="h-3 bg-bg-brand-solid rounded"
            style={{ width: t.px }}
            aria-label={`${t.px}px`}
          />
          <span className="text-[11px] text-fg-neutral-subtle">{t.px}px</span>
        </div>
      ))}
    </div>
  ),
};
