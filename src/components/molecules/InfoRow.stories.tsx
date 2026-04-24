import type { Meta, StoryObj } from "@storybook/react";
import { InfoRow } from "./InfoRow";
import { Divider } from "../atoms/Divider";

const meta: Meta<typeof InfoRow> = {
  title: "Molecules/InfoRow",
  component: InfoRow,
  tags: ["autodocs"],
  args: { label: "촬영 종류", value: "증명사진" },
  decorators: [(S) => <div style={{ width: 340 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof InfoRow>;

export const Default: Story = {};
export const Brand: Story = { args: { label: "최종 결제 금액", value: "₩68,000", emphasis: "brand" } };

export const ReceiptExample: Story = {
  render: () => (
    <div className="bg-bg-neutral-subtle rounded-xl p-4 space-y-2">
      <InfoRow label="촬영 종류" value="증명사진" />
      <InfoRow label="날짜" value="2026-05-10 (토)" />
      <InfoRow label="시간" value="14:00 - 15:00" />
      <InfoRow label="옵션" value="보정 +₩10,000" />
      <Divider className="my-2" />
      <InfoRow label="결제 금액" value="₩68,000" emphasis="brand" />
    </div>
  ),
};
