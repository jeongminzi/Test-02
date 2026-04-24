import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Atoms/Chip",
  component: Chip,
  tags: ["autodocs"],
  args: { children: "예정", active: false },
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Inactive: Story = {};
export const Active: Story = { args: { active: true } };

export const FilterRow: Story = {
  name: "필터 탭 행",
  render: () => (
    <div className="flex gap-2">
      <Chip active>전체</Chip>
      <Chip>예정</Chip>
      <Chip>완료</Chip>
      <Chip>취소</Chip>
    </div>
  ),
};
