import type { Meta, StoryObj } from "@storybook/react";
import { Bell } from "lucide-react";
import { NotificationDot } from "./NotificationDot";

const meta: Meta<typeof NotificationDot> = {
  title: "Atoms/NotificationDot",
  component: NotificationDot,
  tags: ["autodocs"],
  args: { tone: "critical", visible: true },
};
export default meta;
type Story = StoryObj<typeof NotificationDot>;

export const Standalone: Story = {};
export const BrandTone: Story = { args: { tone: "brand" } };

export const OnBellIcon: Story = {
  name: "Bell with dot",
  render: (args) => (
    <NotificationDot {...args}>
      <Bell size={22} strokeWidth={1.8} />
    </NotificationDot>
  ),
};
