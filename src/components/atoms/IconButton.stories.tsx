import type { Meta, StoryObj } from "@storybook/react";
import { Bell, ChevronLeft, Phone, Heart } from "lucide-react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Atoms/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: { "aria-label": "action", icon: <Bell size={20} strokeWidth={1.8} /> },
  argTypes: {
    variant: { control: "select", options: ["solid", "ghost", "outline"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Ghost: Story = { args: { variant: "ghost" } };
export const Solid: Story = {
  args: { variant: "solid", icon: <Phone size={20} strokeWidth={2} />, "aria-label": "전화" },
};
export const Outline: Story = {
  args: { variant: "outline", icon: <Heart size={18} strokeWidth={1.8} />, "aria-label": "찜" },
};
export const BackButton: Story = {
  args: { icon: <ChevronLeft size={22} strokeWidth={2} />, "aria-label": "뒤로가기" },
};
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton size="sm" aria-label="s" icon={<Bell size={16} />} />
      <IconButton size="md" aria-label="m" icon={<Bell size={20} />} />
      <IconButton size="lg" aria-label="l" variant="solid" icon={<Phone size={24} />} />
    </div>
  ),
};
