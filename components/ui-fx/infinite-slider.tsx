import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function InfiniteSlider({ children, className, reverse = false, speed = 30 }: { children: ReactNode; className?: string; reverse?: boolean; speed?: number }) {
  return (
    <div className={cn("group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      <div
        className="flex w-max gap-6 marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        <div className="flex shrink-0 gap-6">{children}</div>
        <div className="flex shrink-0 gap-6" aria-hidden>{children}</div>
      </div>
    </div>
  );
}
