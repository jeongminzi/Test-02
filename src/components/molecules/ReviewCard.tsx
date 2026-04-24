import { ReactNode } from "react";
import { StarRating } from "../atoms/StarRating";
import { Avatar } from "../atoms/Avatar";

export interface ReviewCardProps {
  author: string;
  rating: number;
  date: string;
  body: string;
  ownerReply?: ReactNode;
  className?: string;
}

export function ReviewCard({ author, rating, date, body, ownerReply, className = "" }: ReviewCardProps) {
  return (
    <article
      className={[
        "rounded-[var(--radius-control)] p-3 border border-stroke-neutral-subtle bg-bg-layer-floating",
        className,
      ].join(" ")}
    >
      <header className="flex items-center gap-2">
        <Avatar size="sm" name={author} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-fg-neutral-solid">{author}</span>
            <StarRating value={rating} size={11} showValue={false} />
          </div>
          <div className="text-[10px] text-fg-neutral-subtle">{date}</div>
        </div>
      </header>
      <p className="mt-2 text-sm text-fg-neutral-muted leading-relaxed">{body}</p>
      {ownerReply && (
        <div className="mt-3 rounded-[var(--radius-control)] bg-bg-neutral-subtle p-3 text-xs text-fg-neutral-muted">
          <span className="text-fg-brand-solid font-semibold mr-2">사장님 답변</span>
          {ownerReply}
        </div>
      )}
    </article>
  );
}
