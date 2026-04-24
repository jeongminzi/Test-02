import type { Meta, StoryObj } from "@storybook/react";
import { KpiCard } from "./KpiCard";

const meta: Meta<typeof KpiCard> = {
  title: "Molecules/KpiCard",
  component: KpiCard,
  tags: ["autodocs"],
  args: { label: "오늘 예약", value: 12, sub: "+3 전일 대비" },
  decorators: [(S) => <div style={{ width: 140 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof KpiCard>;

export const Brand: Story = {};
export const Positive: Story = { args: { tone: "positive", label: "이번 달 매출", value: "₩1.2M" } };
export const Critical: Story = { args: { tone: "critical", label: "취소 요청", value: 2 } };

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-3" style={{ width: 480 }}>
      <KpiCard tone="brand" label="오늘 예약" value={12} />
      <KpiCard tone="positive" label="이번 달" value="₩1.2M" />
      <KpiCard tone="critical" label="취소 요청" value={2} />
    </div>
  ),
};
