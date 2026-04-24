import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ModalShell } from "./ModalShell";
import { Button } from "../atoms/Button";

const meta: Meta<typeof ModalShell> = {
  title: "Organisms/ModalShell",
  component: ModalShell,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ModalShell>;

export const Confirm: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>모달 열기</Button>
        <ModalShell
          open={open}
          onClose={() => setOpen(false)}
          title="예약을 취소할까요?"
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>돌아가기</Button>
              <Button variant="danger" onClick={() => setOpen(false)}>취소하기</Button>
            </>
          }
        >
          <p className="text-sm text-fg-neutral-muted leading-relaxed">
            예약 취소 시 24시간 이전: 전액 환불, 이후: 50% 환불입니다.
          </p>
        </ModalShell>
      </>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>상세 모달 열기</Button>
        <ModalShell
          open={open}
          onClose={() => setOpen(false)}
          size="lg"
          title="스튜디오 상세"
          footer={<Button onClick={() => setOpen(false)}>닫기</Button>}
        >
          <div className="text-sm text-fg-neutral-muted space-y-2">
            <p>이곳에는 기본정보, 포트폴리오, 예약 달력 등이 들어갑니다.</p>
          </div>
        </ModalShell>
      </>
    );
  },
};
