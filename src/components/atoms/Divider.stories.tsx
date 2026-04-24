import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  tags: ["autodocs"],
  decorators: [(Story) => <div style={{ width: 320, padding: 16 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};
export const Dashed: Story = { args: { variant: "dashed", emphasis: "muted" } };

export const BetweenRows: Story = {
  render: () => (
    <div>
      <div className="py-3 text-sm">첫 번째 항목</div>
      <Divider />
      <div className="py-3 text-sm">두 번째 항목</div>
      <Divider />
      <div className="py-3 text-sm">세 번째 항목</div>
    </div>
  ),
};
