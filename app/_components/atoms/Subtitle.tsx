import { cn } from "@sglara/cn";
import { PropsWithChildren } from "react";

export default function Subtitle({ children }: PropsWithChildren) {
  return (
    <h3 className={cn("text-6xl w-full text-center md:text-left leading-9")}>
      {children}
      <hr className="mb-7 opacity-40" />
    </h3>
  );
}
