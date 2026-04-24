import { Badge } from "../atoms/Badge";

export type ReservationStatus =
  | "confirmed"
  | "cancelRequested"
  | "cancelled"
  | "completed"
  | "noShow"
  | "manual";

export type SettlementStatus = "pending" | "complete" | "failed";
export type StudioStatus = "pending" | "active" | "suspended";

const resMap: Record<ReservationStatus, { tone: Parameters<typeof Badge>[0]["tone"]; variant?: "solid" | "weak"; label: string }> = {
  confirmed: { tone: "positive", label: "확정" },
  cancelRequested: { tone: "warning", label: "취소 요청" },
  cancelled: { tone: "critical", label: "취소됨" },
  completed: { tone: "neutral", label: "완료" },
  noShow: { tone: "critical", variant: "solid", label: "노쇼" },
  manual: { tone: "informative", label: "수기" },
};

const settMap: Record<SettlementStatus, { tone: Parameters<typeof Badge>[0]["tone"]; label: string }> = {
  pending: { tone: "warning", label: "대기" },
  complete: { tone: "positive", label: "정산 완료" },
  failed: { tone: "critical", label: "실패" },
};

const studioMap: Record<StudioStatus, { tone: Parameters<typeof Badge>[0]["tone"]; label: string }> = {
  pending: { tone: "warning", label: "승인 대기" },
  active: { tone: "positive", label: "운영중" },
  suspended: { tone: "critical", label: "정지" },
};

export function ReservationStatusBadge({ status }: { status: ReservationStatus }) {
  const m = resMap[status];
  return (
    <Badge tone={m.tone} variant={m.variant ?? "weak"}>
      {m.label}
    </Badge>
  );
}

export function SettlementStatusBadge({ status }: { status: SettlementStatus }) {
  const m = settMap[status];
  return <Badge tone={m.tone}>{m.label}</Badge>;
}

export function StudioStatusBadge({ status }: { status: StudioStatus }) {
  const m = studioMap[status];
  return <Badge tone={m.tone}>{m.label}</Badge>;
}
