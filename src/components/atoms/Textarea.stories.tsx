import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Atoms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: { placeholder: "리뷰를 입력해주세요 (최소 10자)", rows: 5 },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
export const Filled: Story = {
  args: { defaultValue: "친절하시고 사진도 너무 잘 나와서 만족스러웠어요. 추천!" },
};
export const Invalid: Story = { args: { invalid: true, defaultValue: "10자 미만" } };
