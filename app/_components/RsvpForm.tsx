"use client";
import { cn } from "@sglara/cn";
import { IconSend } from "@tabler/icons-react";
import { useState } from "react";
import { limeLight } from "../layout";
import Button from "./Button";
import FlipCard from "./timeline/FlipCard";

export default function RsvpFrom() {
  const [isComming, setIscomming] = useState<boolean | undefined>(undefined);

  return (
    <>
      {
        <div
          className={cn("w-full flex gap-0 flex-row p-4 font-retro text-xl")}
        >
          <button
            onClick={() => setIscomming(true)}
            className={cn(
              " border border-mauve-800 w-full transition-all rounded-l-full border-r-0",
              isComming === true ? "bg-mauve-500" : ""
            )}
          >
            Ik kom
          </button>
          <button
            onClick={() => setIscomming(false)}
            className={cn(
              " border border-mauve-800 w-full rounded-r-full border-l-0",
              isComming === false ? "bg-mauve-500" : ""
            )}
          >
            ik kom niet
          </button>
        </div>
      }
    </>
  );
}
