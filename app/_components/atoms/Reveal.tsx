"use client";
import { cn } from "@sglara/cn";
import { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  delay?: number;
  className?: string;
};

// Fades content up into place the first time it scrolls into view.
export default function Reveal({
  children,
  delay = 0,
  className,
}: PropsWithChildren<Props>) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
}
