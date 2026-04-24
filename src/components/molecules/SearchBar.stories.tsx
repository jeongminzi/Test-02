import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Molecules/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  args: { placeholder: "스튜디오, 지역, 카테고리 검색" },
  decorators: [(S) => <div style={{ width: 340 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};
export const WithValue: Story = { args: { defaultValue: "증명사진" } };
