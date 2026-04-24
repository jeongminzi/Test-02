import type { Meta, StoryObj } from "@storybook/react";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "예약하기" },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost", "outline", "danger"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: "primary", size: "md" } };
export const Secondary: Story = { args: { variant: "secondary", children: "취소" } };
export const Ghost: Story = { args: { variant: "ghost", children: "전체보기" } };
export const Outline: Story = { args: { variant: "outline", children: "이전" } };
export const Danger: Story = { args: { variant: "danger", children: "삭제" } };
export const Disabled: Story = { args: { disabled: true } };

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    leadingIcon: <Heart size={16} strokeWidth={2.2} />,
    trailingIcon: <ArrowRight size={16} strokeWidth={2.2} />,
    children: "예약 확정",
  },
};

export const FullWidth: Story = {
  args: { fullWidth: true, size: "lg", children: "결제하기" },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
