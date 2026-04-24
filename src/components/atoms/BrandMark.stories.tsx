import type { Meta, StoryObj } from "@storybook/react";
import { BrandMark } from "./BrandMark";

const meta: Meta<typeof BrandMark> = {
  title: "Atoms/BrandMark",
  component: BrandMark,
  tags: ["autodocs"],
  args: { size: "md" },
};
export default meta;
type Story = StoryObj<typeof BrandMark>;

export const Default: Story = {};
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
export const LogoOnly: Story = { args: { hideLabel: true, size: "lg" } };
export const Funni: Story = { args: { logoSrc: "/funni-logo.png", label: "funni" } };
