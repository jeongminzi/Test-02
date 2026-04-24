import type { Meta, StoryObj } from "@storybook/react";
import { ChevronRight, Camera } from "lucide-react";
import { ListItem } from "./ListItem";
import { Avatar } from "../atoms/Avatar";
import { Badge } from "../atoms/Badge";

const meta: Meta<typeof ListItem> = {
  title: "Molecules/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  decorators: [(S) => <div style={{ width: 360 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {
    leading: <Avatar name="김" />,
    title: "김포토님",
    subtitle: "연락처 010-1234-5678",
    trailing: <ChevronRight size={18} className="text-fg-neutral-subtle" />,
  },
};

export const WithIcon: Story = {
  args: {
    leading: (
      <div className="w-10 h-10 rounded-full bg-bg-brand-weak flex items-center justify-center text-fg-brand-solid">
        <Camera size={18} />
      </div>
    ),
    title: "내 예약 내역",
    subtitle: "예정 2건 · 완료 12건",
    trailing: <ChevronRight size={18} className="text-fg-neutral-subtle" />,
  },
};

export const WithBadge: Story = {
  args: {
    leading: <Avatar name="스" size="md" />,
    title: "스튜디오 별빛",
    subtitle: "서울 강남 · 증명사진",
    trailing: <Badge tone="positive">운영중</Badge>,
  },
};
