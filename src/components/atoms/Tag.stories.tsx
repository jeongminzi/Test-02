import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Atoms/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: { children: "#증명사진", variant: "outlined" },
  argTypes: { variant: { control: "radio", options: ["outlined", "filled", "subtle"] } },
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Outlined: Story = {};
export const Filled: Story = { args: { variant: "filled" } };
export const Subtle: Story = { args: { variant: "subtle" } };

export const KeywordRow: Story = {
  name: "키워드 묶음",
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag>#증명사진</Tag>
      <Tag>#취업프로필</Tag>
      <Tag variant="subtle">#출장가능</Tag>
      <Tag variant="filled">#HOT</Tag>
    </div>
  ),
};
