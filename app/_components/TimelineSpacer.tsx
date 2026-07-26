"use client";
import { cn } from "@sglara/cn";
import { useInView } from "react-intersection-observer";

export default function () {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div
      className={cn(
        "ml-10 my-1 h-11 w-0 transition-all duration-350 border-transparent",
        inView ? "border-gray-400 border" : ""
      )}
      ref={ref}
    />
  );
}
