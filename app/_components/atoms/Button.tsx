import { cn } from "@sglara/cn";
import { ButtonHTMLAttributes } from "react";

export const buttonClasses =
  "eyebrow inline-flex items-center justify-center gap-3 rounded-full bg-mauve-900 px-8 py-4 text-ivory shadow-[0_10px_30px_-12px_rgb(0_0_0/0.45)] ring-1 ring-inset ring-champagne/40 transition duration-300 hover:-translate-y-0.5 hover:bg-mauve-800 hover:shadow-[0_16px_36px_-14px_rgb(0_0_0/0.5)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne";

export default function Button({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={cn(buttonClasses, className)}>
      {children}
    </button>
  );
}
