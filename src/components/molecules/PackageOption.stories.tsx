import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PackageOption } from "./PackageOption";

const meta: Meta<typeof PackageOption> = {
  title: "Molecules/PackageOption",
  component: PackageOption,
  tags: ["autodocs"],
  args: {
    name: "기본 증명사진",
    description: "촬영 10컷 · 보정 1컷",
    price: "₩38,000",
    selected: false,
  },
  decorators: [(S) => <div style={{ width: 360 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof PackageOption>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };
export const WithOriginalPrice: Story = {
  args: { selected: true, originalPrice: "₩48,000", price: "₩38,000" },
};

export const List: Story = {
  render: () => {
    const [sel, setSel] = useState(1);
    const opts = [
      { name: "기본 증명사진", description: "촬영 10컷 · 보정 1컷", price: "₩38,000" },
      { name: "취업 프로필", description: "촬영 20컷 · 보정 2컷 · 메이크업 옵션", price: "₩68,000", originalPrice: "₩80,000" },
      { name: "프리미엄 풀패키지", description: "촬영 30컷 · 보정 5컷 · 헤어메이크업", price: "₩128,000" },
    ];
    return (
      <div className="space-y-2">
        {opts.map((o, i) => (
          <PackageOption key={o.name} {...o} selected={sel === i} onClick={() => setSel(i)} />
        ))}
      </div>
    );
  },
};
