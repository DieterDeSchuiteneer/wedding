import { cn } from "@sglara/cn";
import { IconSend } from "@tabler/icons-react";
import { limeLight } from "../layout";
import Button from "./Button";
import RsvpFrom from "./RsvpForm";
import FlipCard from "./timeline/FlipCard";

export default function Rsvp() {
  return (
    <>
      <div className="w-full h-24 flex items-center justify-center">
        <FlipCard offset={0.5}>
          <Button command="show-modal" commandfor="rsv-dialog">
            <IconSend />
            <span className={cn("", limeLight.className)}>RSPV</span>
          </Button>
        </FlipCard>
      </div>

      <dialog id="rsv-dialog" className="w-full h-full ">
        <RsvpFrom />
      </dialog>
    </>
  );
}
