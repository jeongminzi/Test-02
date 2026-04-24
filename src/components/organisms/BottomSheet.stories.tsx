import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { BottomSheet } from "./BottomSheet";
import { Button } from "../atoms/Button";
import { Textarea } from "../atoms/Textarea";

const meta: Meta<typeof BottomSheet> = {
  title: "Organisms/BottomSheet",
  component: BottomSheet,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const WriteReply: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>답글 쓰기</Button>
        <BottomSheet
          open={open}
          onClose={() => setOpen(false)}
          title="리뷰 답글 작성"
          footer={
            <>
              <Button variant="secondary" fullWidth onClick={() => setOpen(false)}>
                취소
              </Button>
              <Button fullWidth onClick={() => setOpen(false)}>
                등록
              </Button>
            </>
          }
        >
          <Textarea placeholder="고객에게 전할 답변을 입력해주세요 (최대 300자)" rows={5} />
        </BottomSheet>
      </>
    );
  },
};
