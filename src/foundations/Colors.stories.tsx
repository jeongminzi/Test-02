import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: {
    docs: {
      description: {
        component:
          "컬러 토큰은 2계층입니다. **Primitive**는 raw ramp(Gray, Rose, Red, Green, Amber, Blue). **Semantic**은 `fg/bg/stroke × role × variant` 명명 규칙을 따르며, UI 코드는 오직 Semantic만 참조합니다.",
      },
    },
  },
};
export default meta;

type Ramp = { name: string; prefix: string; steps: number[] };

const ramps: Ramp[] = [
  { name: "Gray", prefix: "gray", steps: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] },
  { name: "Brand (Blue)", prefix: "brand", steps: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] },
  { name: "Red (Critical)", prefix: "red", steps: [100, 200, 500, 600, 700, 800] },
  { name: "Green (Positive)", prefix: "green", steps: [100, 200, 600, 700, 800] },
  { name: "Amber (Warning)", prefix: "amber", steps: [100, 200, 300, 600, 700, 800] },
  { name: "Blue (Informative)", prefix: "blue", steps: [100, 700] },
];

function Swatch({ label, cssVar }: { label: string; cssVar: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="w-16 h-16 rounded-md border border-stroke-neutral-subtle"
        style={{ background: `var(${cssVar})` }}
        aria-label={cssVar}
      />
      <span className="text-[10px] text-fg-neutral-muted font-mono">{label}</span>
    </div>
  );
}

export const Primitive: StoryObj = {
  name: "Primitive ramps",
  render: () => (
    <div className="space-y-6 p-4">
      {ramps.map((r) => (
        <section key={r.name}>
          <h3 className="text-sm font-bold text-fg-neutral-solid mb-2">{r.name}</h3>
          <div className="flex flex-wrap gap-3">
            {r.steps.map((s) => (
              <Swatch
                key={`${r.prefix}-${s}`}
                label={`${r.prefix}.${String(s).padStart(2, "0")}`}
                cssVar={`--primitive-${r.prefix}-${s === 0 ? "00" : s}`}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

const fgTokens = [
  "fg.neutral-solid",
  "fg.neutral-contrast",
  "fg.neutral-muted",
  "fg.neutral-subtle",
  "fg.neutral-inverted",
  "fg.brand-solid",
  "fg.brand-contrast",
  "fg.brand-muted",
  "fg.critical-solid",
  "fg.critical-contrast",
  "fg.critical-muted",
  "fg.positive-solid",
  "fg.positive-contrast",
  "fg.warning-solid",
  "fg.warning-contrast",
  "fg.informative-solid",
  "fg.rating-solid",
];

const bgTokens = [
  "bg.layer-default",
  "bg.layer-canvas",
  "bg.layer-floating",
  "bg.layer-overlay",
  "bg.neutral-solid",
  "bg.neutral-weak",
  "bg.neutral-subtle",
  "bg.neutral-muted",
  "bg.brand-solid",
  "bg.brand-solid-pressed",
  "bg.brand-weak",
  "bg.brand-weak-alt",
  "bg.critical-solid",
  "bg.critical-weak",
  "bg.critical-muted",
  "bg.positive-solid",
  "bg.positive-weak",
  "bg.positive-muted",
  "bg.warning-weak",
  "bg.warning-muted",
  "bg.informative-weak",
];

const strokeTokens = [
  "stroke.neutral-subtle",
  "stroke.neutral-muted",
  "stroke.neutral-solid",
  "stroke.brand-solid",
  "stroke.brand-muted",
  "stroke.critical-solid",
  "stroke.positive-solid",
  "stroke.warning-solid",
  "stroke.focused",
];

function SemGroup({ title, tokens }: { title: string; tokens: string[] }) {
  return (
    <section className="mb-6">
      <h3 className="text-sm font-bold text-fg-neutral-solid mb-3">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {tokens.map((t) => {
          const cssVar = `--${t.replace(".", "-")}`;
          return (
            <div key={t} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-md border border-stroke-neutral-subtle shrink-0"
                style={{ background: `var(${cssVar})` }}
              />
              <code className="text-[11px] text-fg-neutral-muted break-all">{t}</code>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export const Semantic: StoryObj = {
  render: () => (
    <div className="p-4">
      <SemGroup title="Foreground" tokens={fgTokens} />
      <SemGroup title="Background" tokens={bgTokens} />
      <SemGroup title="Stroke" tokens={strokeTokens} />
    </div>
  ),
};
