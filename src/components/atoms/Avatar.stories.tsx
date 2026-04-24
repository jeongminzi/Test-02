import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: { name: "김포토", size: "md" },
  argTypes: { size: { control: "radio", options: ["sm", "md", "lg", "xl"] } },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-3">
      <Avatar size="sm" name="김" />
      <Avatar size="md" name="이" />
      <Avatar size="lg" name="박" />
      <Avatar size="xl" name="최" />
    </div>
  ),
};
