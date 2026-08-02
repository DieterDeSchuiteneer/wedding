"use client";
import { cn } from "@sglara/cn";
import { useInView } from "react-intersection-observer";

export default function () {
  return (
    <div
      className={cn(
        "ml-10 my-1 h-11 w-0 transition-all duration-350 border border-gray-400  starting:opacity-0"
      )}
    >
      <div className="h-full w-full bg-blue-600 origin-top animate-[scaleY_linear_both] [animation-timeline:scroll()]"></div>
    </div>
  );
}
