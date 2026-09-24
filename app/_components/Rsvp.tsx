import { cn } from "@sglara/cn";
import { IconSend } from "@tabler/icons-react";
import Link from "next/link";

export default function Rsvp() {
  return (
    <div className="w-full h-24 flex items-center justify-center">
      <Link
        href="/rsvp"
        className="font-retro flex gap-2 bg-mauve-800 text-white active:text-mauve-800 active:bg-white hover:scale-105 active:scale-90 transition-all px-4 py-2 rounded-full ring-1 ring-inset ring-mauve-800 focus:border-0 focus-visible:border-0"
      >
        <IconSend />
        <span className={cn("font-retro")}>RSPV</span>
      </Link>
    </div>
  );
}
