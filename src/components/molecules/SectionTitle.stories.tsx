import type { Meta, StoryObj } from "@storybook/react";
import { SectionTitle } from "./SectionTitle";

const meta: Meta<typeof SectionTitle> = {
  title: "Molecules/SectionTitle",
  component: SectionTitle,
  tags: ["autodocs"],
  args: { title: "지금 뜨는 스튜디오" },
  decorators: [(S) => <div style={{ width: 340 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const HeadingOnly: Story = {};
export const CaptionAbove: Story = {
  args: { variant: "captionAbove", caption: "HOT 픽", title: "이번 달 가장 많이 예약된 스튜디오" },
};
export const WithAction: Story = {
  args: {
    variant: "withAction",
    title: "추천 스튜디오",
    action: (
      <button className="text-xs font-medium text-fg-brand-solid hover:underline">전체보기 →</button>
    ),
  },
};
