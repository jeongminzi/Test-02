import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AppBottomTab, TabKey } from "./AppBottomTab";

const meta: Meta<typeof AppBottomTab> = {
  title: "Organisms/AppBottomTab",
  component: AppBottomTab,
  tags: ["autodocs"],
  decorators: [(S) => <div style={{ width: 360 }}><S /></div>],
  argTypes: { depth: { control: { type: "range", min: 1, max: 3, step: 1 } } },
};
export default meta;
type Story = StoryObj<typeof AppBottomTab>;

export const Depth1: Story = {
  render: () => {
    const [active, setActive] = useState<TabKey>("home");
    return <AppBottomTab active={active} onChange={setActive} />;
  },
};

export const Depth2Hidden: Story = {
  name: "Depth 2+ (숨김)",
  render: () => (
    <div className="bg-bg-neutral-subtle p-4 rounded">
      <p className="text-xs text-fg-neutral-subtle mb-2">depth=2일 때는 GNB가 렌더링되지 않습니다.</p>
      <AppBottomTab depth={2} active="home" />
      <p className="text-xs text-fg-neutral-subtle mt-2">↑ 아무것도 보이지 않음</p>
    </div>
  ),
};
