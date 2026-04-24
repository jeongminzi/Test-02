import type { Meta, StoryObj } from "@storybook/react";
import { ReviewCard } from "./ReviewCard";

const meta: Meta<typeof ReviewCard> = {
  title: "Molecules/ReviewCard",
  component: ReviewCard,
  tags: ["autodocs"],
  args: {
    author: "김포토",
    rating: 5,
    date: "2026-03-28",
    body: "친절하시고 사진도 너무 잘 나와서 만족스러웠어요. 추천!",
  },
  decorators: [(S) => <div style={{ width: 360 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof ReviewCard>;

export const Default: Story = {};
export const WithOwnerReply: Story = {
  args: {
    ownerReply: "좋은 후기 감사합니다! 다음에도 편하게 방문해주세요.",
  },
};
