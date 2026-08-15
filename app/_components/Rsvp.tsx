"use client";

import { cn } from "@sglara/cn";
import { IconSend } from "@tabler/icons-react";
import { useState } from "react";
import Button from "./atoms/Button";
import RsvpFrom from "./RsvpForm";
import FlipCard from "./timeline/FlipCard";

export default function Rsvp() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full h-24 flex items-center justify-center">
        <FlipCard offset={0.5}>
          <Button onClick={() => setIsOpen((state) => !state)}>
            <IconSend />
            <span className={cn("font-retro")}>RSPV</span>
          </Button>
        </FlipCard>
      </div>

      <dialog id="rsv-dialog" className="w-full h-full " open={isOpen}>
        <RsvpFrom />
      </dialog>
    </>
  );
}
