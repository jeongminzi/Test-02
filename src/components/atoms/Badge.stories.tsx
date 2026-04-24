import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "신규", tone: "brand", variant: "weak" },
  argTypes: {
    tone: { control: "select", options: ["neutral", "brand", "positive", "critical", "warning", "informative", "inverse"] },
    variant: { control: "radio", options: ["weak", "solid"] },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Tones: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge tone="neutral">중립</Badge>
      <Badge tone="brand">브랜드</Badge>
      <Badge tone="positive">확정</Badge>
      <Badge tone="critical">취소</Badge>
      <Badge tone="warning">대기</Badge>
      <Badge tone="informative">정보</Badge>
    </div>
  ),
};

export const Solid: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="solid" tone="neutral">AD</Badge>
      <Badge variant="solid" tone="brand">BEST</Badge>
      <Badge variant="solid" tone="critical">HOT</Badge>
      <Badge variant="solid" tone="positive">운영중</Badge>
    </div>
  ),
};

export const ReservationStatuses: Story = {
  name: "Reservation statuses",
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge tone="positive">확정</Badge>
      <Badge tone="warning">취소 취소중</Badge>
      <Badge tone="neutral">완료</Badge>
      <Badge tone="critical">취소됨</Badge>
      <Badge tone="warning" variant="solid">노쇼</Badge>
    </div>
  ),
};
