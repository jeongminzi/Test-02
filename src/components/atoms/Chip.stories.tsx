import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Atoms/Chip",
  component: Chip,
  tags: ["autodocs"],
  args: { children: "증명사진", active: false, variant: "filled" },
  argTypes: {
    variant: { control: "radio", options: ["filled", "outlined"] },
    active: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const FilledInactive: Story = { args: { variant: "filled" } };
export const FilledActive: Story = { args: { variant: "filled", active: true } };
export const OutlinedInactive: Story = { args: { variant: "outlined" } };
export const OutlinedActive: Story = { args: { variant: "outlined", active: true } };

export const FilterTabRow: Story = {
  name: "FilledRow (필터 탭)",
  render: () => (
    <div className="flex gap-2">
      <Chip active>전체</Chip>
      <Chip>예정</Chip>
      <Chip>완료</Chip>
      <Chip>취소</Chip>
    </div>
  ),
};

export const KeywordRow: Story = {
  name: "OutlinedRow (인기 검색어)",
  render: () => (
    <div className="flex gap-2">
      <Chip variant="outlined">인기</Chip>
      <Chip variant="outlined" active>증명사진</Chip>
      <Chip variant="outlined">성수 프로필</Chip>
      <Chip variant="outlined">주말 웨딩</Chip>
      <Chip variant="outlined">가족 스냅</Chip>
    </div>
  ),
};
