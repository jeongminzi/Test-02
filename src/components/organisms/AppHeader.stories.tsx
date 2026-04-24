import type { Meta, StoryObj } from "@storybook/react";
import { AppHeader } from "./AppHeader";

const meta: Meta<typeof AppHeader> = {
  title: "Organisms/AppHeader",
  component: AppHeader,
  tags: ["autodocs"],
  decorators: [(S) => <div style={{ width: 360 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof AppHeader>;

export const BrandDepth1: Story = { args: { variant: "brand", hasNotifications: true } };
export const TitledDepth2: Story = { args: { variant: "titled", title: "내 예약 내역" } };
export const TitledNoBell: Story = {
  args: { variant: "titled", title: "로그인", trailing: <span /> },
};
