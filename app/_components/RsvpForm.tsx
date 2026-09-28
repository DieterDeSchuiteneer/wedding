"use client";

import { cn } from "@sglara/cn";
import { IconChevronDown, IconHeart, IconSend } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { guests } from "../_data/guests";
import { submitRsvp, type RsvpState } from "../rsvp/actions";
import Button from "./atoms/Button";

const REDIRECT_AFTER_MS = 4000;

export default function RsvpFrom() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState<RsvpState, FormData>(
    submitRsvp,
    { status: "idle" }
  );

  useEffect(() => {
    if (state.status !== "saved") return;
    const timeout = setTimeout(
      () => router.push("/programma"),
      REDIRECT_AFTER_MS
    );
    return () => clearTimeout(timeout);
  }, [state, router]);

  if (state.status === "saved") {
    return <ThankYou guest={state.guest} attending={state.attending} />;
  }

  return (
    <form
      action={formAction}
      className="w-full flex flex-col gap-6 p-4 font-retro text-xl text-mauve-800"
    >
      <label className="flex flex-col gap-2">
        <span>Wie ben je?</span>
        <span className="relative">
          <select
            name="guest"
            required
            defaultValue=""
            className="w-full appearance-none rounded-full border border-mauve-800 bg-white px-5 py-2 pr-12 outline-none focus-visible:ring-2 focus-visible:ring-mauve-500"
          >
            <option value="" disabled>
              Kies je naam
            </option>
            {guests.map((guest) => (
              <option key={guest} value={guest}>
                {guest}
              </option>
            ))}
          </select>
          <IconChevronDown
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
            stroke={1.5}
          />
        </span>
      </label>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2">Kom je?</legend>
        <div className="flex">
          <AttendanceOption value="coming" side="left" required>
            Ik kom
          </AttendanceOption>
          <AttendanceOption value="not-coming" side="right">
            Ik kom niet
          </AttendanceOption>
        </div>
      </fieldset>

      {state.status === "error" && (
        <p role="alert" className="text-base text-red-700">
          {state.message}
        </p>
      )}

      <Button
        type="submit"
        disabled={pending}
        className="self-center disabled:opacity-60 disabled:hover:scale-100"
      >
        <IconSend />
        {pending ? "Versturen..." : "Versturen"}
      </Button>
    </form>
  );
}

function AttendanceOption({
  value,
  side,
  required,
  children,
}: {
  value: string;
  side: "left" | "right";
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="w-full cursor-pointer">
      <input
        type="radio"
        name="attendance"
        value={value}
        required={required}
        className="peer sr-only"
      />
      <span
        className={cn(
          "block w-full border border-mauve-800 py-1 text-center transition-all peer-checked:bg-mauve-500 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-mauve-500",
          side === "left" ? "rounded-l-full border-r-0" : "rounded-r-full"
        )}
      >
        {children}
      </span>
    </label>
  );
}

function ThankYou({ guest, attending }: { guest: string; attending: boolean }) {
  return (
    <div
      role="status"
      className="rsvp-thanks flex flex-col items-center gap-4 p-6 text-center text-mauve-800"
    >
      <IconHeart className="size-16 fill-mauve-500 stroke-mauve-800" stroke={1} />
      <p className="text-6xl">Dankjewel {guest}!</p>
      <p className="font-retro text-xl">
        {attending
          ? "Super dat je erbij bent, we kijken ernaar uit!"
          : "Jammer dat je er niet bij kan zijn, we denken aan je."}
      </p>
      <p className="font-retro text-sm opacity-70">
        Je wordt zo doorgestuurd naar het programma...
      </p>
      <Link href="/programma" className="font-retro text-mauve-800 underline">
        Nu naar het programma
      </Link>
    </div>
  );
}
