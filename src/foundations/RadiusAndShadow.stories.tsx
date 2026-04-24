import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Radius & Shadow" };
export default meta;

const radii = [
  { name: "control", px: 8, use: "buttons · inputs" },
  { name: "pill", px: 9999, use: "chips · badges" },
  { name: "card", px: 16, use: "cards · containers" },
  { name: "modal", px: 20, use: "modals" },
  { name: "sheet", px: 28, use: "bottom sheet top" },
];

const shadows = [
  { name: "card", use: "studio cards · hovered rows" },
  { name: "popover", use: "sort dropdown · tooltips" },
  { name: "modal", use: "modal dialogs" },
  { name: "frame", use: "main app frame" },
  { name: "focus-ring", use: "input focus" },
];

export const Radius: StoryObj = {
  render: () => (
    <div className="p-4 grid grid-cols-2 md:grid-cols-5 gap-4">
      {radii.map((r) => (
        <div key={r.name} className="flex flex-col items-center gap-2">
          <div
            className="w-20 h-20 bg-bg-brand-weak border border-stroke-brand-muted"
            style={{ borderRadius: r.px === 9999 ? 9999 : r.px }}
          />
          <code className="text-[11px] font-mono">{r.name}</code>
          <span className="text-[10px] text-fg-neutral-subtle">{r.use}</span>
        </div>
      ))}
    </div>
  ),
};

export const Shadow: StoryObj = {
  render: () => (
    <div className="p-6 grid grid-cols-2 md:grid-cols-5 gap-6 bg-bg-layer-canvas">
      {shadows.map((s) => (
        <div key={s.name} className="flex flex-col items-center gap-2">
          <div
            className="w-24 h-20 bg-bg-layer-floating rounded-xl"
            style={{ boxShadow: `var(--shadow-${s.name})` }}
          />
          <code className="text-[11px] font-mono">{s.name}</code>
          <span className="text-[10px] text-fg-neutral-subtle text-center">{s.use}</span>
        </div>
      ))}
    </div>
  ),
};
