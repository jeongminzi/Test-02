import type { Meta, StoryObj } from "@storybook/react";
import { Search, Mail } from "lucide-react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "스튜디오, 지역, 카테고리 검색" },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const WithLeadingIcon: Story = {
  args: { leadingIcon: <Search size={16} /> },
};
export const Email: Story = {
  args: { type: "email", placeholder: "이메일", leadingIcon: <Mail size={16} /> },
};
export const Invalid: Story = {
  args: { invalid: true, defaultValue: "invalid@value" },
};
export const Disabled: Story = { args: { disabled: true, defaultValue: "수정 불가" } };
