"use client";
import { cn } from "@sglara/cn";
import { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  offset: number;
  className?: string;
};

export default function FlipCard({
  children,
  offset,
  className,
}: PropsWithChildren<Props>) {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: offset,
  });

  return (
    <div
      className={cn(
        "transition-all duration-350 opacity-100 rotate-0",
        !inView ? "rotate-x-90 opacity-0" : "",
        className
      )}
      ref={ref}
    >
      {children}
    </div>
  );
}
