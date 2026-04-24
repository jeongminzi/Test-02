import type { Meta, StoryObj } from "@storybook/react";
import { StarRating } from "./StarRating";

const meta: Meta<typeof StarRating> = {
  title: "Atoms/StarRating",
  component: StarRating,
  tags: ["autodocs"],
  args: { value: 4.8, size: 14, reviewCount: 128 },
};
export default meta;
type Story = StoryObj<typeof StarRating>;

export const Default: Story = {};
export const NoReviewCount: Story = { args: { reviewCount: undefined } };
export const Low: Story = { args: { value: 2.3 } };
export const Large: Story = { args: { size: 24, value: 4.5 } };
