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
  name: "Filled — 예약 탭",
  render: () => {
    const [value, setValue] = useState("예정");
    return <FilterChipGroup options={["전체", "예정", "완료", "취소"]} value={value} onChange={setValue} />;
  },
};

export const CategoryTabs: Story = {
  name: "Filled — 카테고리 탭",
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

export const PopularKeywords: Story = {
  name: "Outlined — 인기 검색어",
  render: () => {
    const [value, setValue] = useState("증명사진");
    return (
      <FilterChipGroup
        variant="outlined"
        options={["인기", "증명사진", "성수 프로필", "주말 웨딩", "가족 스냅"]}
        value={value}
        onChange={setValue}
      />
    );
  },
};
