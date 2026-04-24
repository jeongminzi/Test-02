import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DatePicker } from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Organisms/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  decorators: [(S) => <div style={{ width: 320 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => {
    const [v, setV] = useState<string>();
    return <DatePicker value={v} onChange={setV} />;
  },
};

export const WithAvailability: Story = {
  render: () => {
    const [v, setV] = useState<string>("2026-04-28");
    return (
      <DatePicker
        value={v}
        onChange={setV}
        availableDates={[
          "2026-04-24",
          "2026-04-25",
          "2026-04-26",
          "2026-04-28",
          "2026-04-30",
          "2026-05-02",
          "2026-05-03",
        ]}
        disabledDates={["2026-04-27"]}
      />
    );
  },
};
