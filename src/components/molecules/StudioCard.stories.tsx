import type { Meta, StoryObj } from "@storybook/react";
import { StudioCard } from "./StudioCard";

const meta: Meta<typeof StudioCard> = {
  title: "Molecules/StudioCard",
  component: StudioCard,
  tags: ["autodocs"],
  args: {
    name: "스튜디오 별빛",
    location: "서울 강남",
    price: "₩68,000~",
    rating: 4.8,
    reviewCount: 128,
    tags: ["#증명사진", "#출장가능"],
  },
};
export default meta;
type Story = StoryObj<typeof StudioCard>;

export const Featured: Story = { args: { variant: "featured", ribbon: "HOT" } };
export const Compact: Story = { args: { variant: "compact" } };
export const List: Story = {
  args: { variant: "list", ribbon: undefined },
  decorators: [(S) => <div style={{ width: 360 }}><S /></div>],
};

export const ScrollRow: Story = {
  name: "홈 추천 스튜디오 행",
  render: () => (
    <div className="flex gap-3 overflow-x-auto no-scrollbar" style={{ width: 360 }}>
      <StudioCard name="스튜디오 별빛" location="서울 강남" rating={4.8} reviewCount={128} price="₩68,000~" ribbon="HOT" tags={["#증명사진"]} />
      <StudioCard name="달빛 아뜰리에" location="서울 용산" rating={4.7} reviewCount={92} price="₩82,000~" tags={["#가족사진"]} />
      <StudioCard name="밤하늘 스튜디오" location="경기 성남" rating={4.9} reviewCount={214} price="₩55,000~" ribbon="AD" ribbonTone="neutral" tags={["#웨딩"]} />
    </div>
  ),
};
