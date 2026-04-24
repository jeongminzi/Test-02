import type { Meta, StoryObj } from "@storybook/react";
import { ReservationStatusBadge, SettlementStatusBadge, StudioStatusBadge } from "./StatusBadge";

const meta: Meta = {
  title: "Organisms/StatusBadge",
  tags: ["autodocs"],
};
export default meta;

export const Reservations: StoryObj = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <ReservationStatusBadge status="confirmed" />
      <ReservationStatusBadge status="cancelRequested" />
      <ReservationStatusBadge status="cancelled" />
      <ReservationStatusBadge status="completed" />
      <ReservationStatusBadge status="noShow" />
      <ReservationStatusBadge status="manual" />
    </div>
  ),
};

export const Settlements: StoryObj = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <SettlementStatusBadge status="pending" />
      <SettlementStatusBadge status="complete" />
      <SettlementStatusBadge status="failed" />
    </div>
  ),
};

export const Studios: StoryObj = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <StudioStatusBadge status="pending" />
      <StudioStatusBadge status="active" />
      <StudioStatusBadge status="suspended" />
    </div>
  ),
};
