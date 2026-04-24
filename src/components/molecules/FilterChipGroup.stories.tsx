import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FilterChipGroup } from "./FilterChipGroup";

const meta: Meta<typeof FilterChipGroup> = {
  title: "Molecules/FilterChipGroup",
  component: FilterChipGroup,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FilterChipGroup>;

export const ReservationTabs: Story = {
  render: () => {
    const [value, setValue] = useState("예정");
    return <FilterChipGroup options={["전체", "예정", "완료", "취소"]} value={value} onChange={setValue} />;
  },
};

export const CategoryTabs: Story = {
  render: () => {
    const [value, setValue] = useState("전체");
    return (
      <FilterChipGroup
        options={["전체", "증명/프로필", "가족사진", "웨딩", "반려동물", "돌잔치"]}
        value={value}
        onChange={setValue}
      />
    );
  },
};
