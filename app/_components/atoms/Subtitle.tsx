import { cn } from "@sglara/cn";
import { PropsWithChildren } from "react";
import Ornament from "./Ornament";

type Props = {
  eyebrow?: string;
  className?: string;
};

export default function Subtitle({
  children,
  eyebrow,
  className,
}: PropsWithChildren<Props>) {
  return (
    <header className={cn("mb-12 flex flex-col items-center text-center", className)}>
      {eyebrow && <p className="eyebrow mb-3 opacity-70">{eyebrow}</p>}
      <h2 className="font-script text-6xl leading-none md:text-7xl">{children}</h2>
      <Ornament className="mt-5" />
    </header>
  );
}
