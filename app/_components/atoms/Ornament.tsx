import { cn } from "@sglara/cn";

export default function Ornament({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center gap-3 text-champagne", className)}
    >
      <span className="h-px w-12 bg-current opacity-60" />
      <span className="size-1.5 rotate-45 border border-current" />
      <span className="h-px w-12 bg-current opacity-60" />
    </div>
  );
}
