import type { Meta, StoryObj } from "@storybook/react";
import { Info, AlertTriangle, CheckCircle } from "lucide-react";
import { InfoBox } from "./InfoBox";

const meta: Meta<typeof InfoBox> = {
  title: "Molecules/InfoBox",
  component: InfoBox,
  tags: ["autodocs"],
  decorators: [(S) => <div style={{ width: 360 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof InfoBox>;

export const Neutral: Story = {
  args: {
    icon: <Info size={14} />,
    title: "예약 안내",
    children: "당일 취소는 불가하며, 일정 변경은 24시간 전까지 가능합니다.",
  },
};
export const Warning: Story = {
  args: {
    tone: "warning",
    icon: <AlertTriangle size={14} />,
    title: "스튜디오 등록 심사 중",
    children: "심사 완료까지 평균 1-2영업일이 소요됩니다.",
  },
};
export const Critical: Story = {
  args: {
    tone: "critical",
    icon: <AlertTriangle size={14} />,
    title: "노쇼 누적 3회",
    children: "1개월간 예약이 제한됩니다.",
  },
};
export const Positive: Story = {
  args: {
    tone: "positive",
    icon: <CheckCircle size={14} />,
    title: "정산 완료",
    children: "2026년 3월분 정산이 완료되었습니다.",
  },
};
