import { cn } from "@sglara/cn";
import { ButtonHTMLAttributes } from "react";
export default function Button({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        " font-retro flex gap-2 bg-mauve-800 text-white active:text-mauve-800  active:bg-white hover:scale-105 active:scale-90 transition-all px-4 py-2 rounded-full  ring-1 ring-inset ring-mauve-800 focus:border-0 focus-visible:border-0",
        className
      )}
    >
      {children}
    </button>
  );
}
