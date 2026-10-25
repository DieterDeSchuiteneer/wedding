"use client";

import { cn } from "@sglara/cn";
import { IconChevronDown, IconSend } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { guests } from "../_data/guests";
import { submitRsvp, type RsvpState } from "../rsvp/actions";
import Button from "./atoms/Button";
import Ornament from "./atoms/Ornament";

const REDIRECT_AFTER_MS = 5000;

const fieldClasses =
  "w-full rounded-2xl border border-champagne/50 bg-white/70 px-5 py-3 text-lg outline-none transition focus:border-mauve-700 focus:bg-white focus-visible:ring-2 focus-visible:ring-champagne/40";

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
    <form action={formAction} className="mx-auto flex w-full max-w-md flex-col gap-8 py-4">
      <header className="flex flex-col items-center text-center">
        <p className="eyebrow mb-3 opacity-70">RSVP</p>
        <h1 className="font-script text-6xl leading-none">Kom je ook?</h1>
        <Ornament className="mt-5" />
      </header>

      <label className="flex flex-col gap-2">
        <span className="eyebrow">Wie ben je?</span>
        <span className="relative">
          <select name="guest" required defaultValue="" className={cn(fieldClasses, "appearance-none pr-12")}>
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
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mauve-700"
            stroke={1.25}
          />
        </span>
      </label>

      <fieldset className="flex flex-col gap-2">
        <legend className="eyebrow mb-2">Ben je erbij?</legend>
        <div className="grid grid-cols-2 gap-3">
          <AttendanceOption value="coming" required>
            Ja, ik kom!
          </AttendanceOption>
          <AttendanceOption value="not-coming">Helaas niet</AttendanceOption>
        </div>
      </fieldset>

      <label className="flex flex-col gap-2">
        <span className="eyebrow">
          Allergieën, dieet of een berichtje <span className="normal-case tracking-normal opacity-60">(optioneel)</span>
        </span>
        <textarea name="note" rows={3} maxLength={500} className={cn(fieldClasses, "resize-none")} />
      </label>

      {state.status === "error" && (
        <p role="alert" className="text-center italic text-red-800">
          {state.message}
        </p>
      )}

      <Button type="submit" disabled={pending} className="self-center disabled:pointer-events-none disabled:opacity-60">
        {pending ? "Versturen…" : "Versturen"}
        <IconSend size={16} stroke={1.5} />
      </Button>
    </form>
  );
}

function AttendanceOption({
  value,
  required,
  children,
}: {
  value: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="cursor-pointer">
      <input type="radio" name="attendance" value={value} required={required} className="peer sr-only" />
      <span className="block rounded-2xl border border-champagne/50 bg-white/70 px-4 py-3 text-center text-lg transition peer-checked:border-mauve-900 peer-checked:bg-mauve-900 peer-checked:text-ivory peer-focus-visible:ring-2 peer-focus-visible:ring-champagne/40 hover:border-mauve-700">
        {children}
      </span>
    </label>
  );
}

function ThankYou({ guest, attending }: { guest: string; attending: boolean }) {
  return (
    <div role="status" className="rsvp-thanks mx-auto flex max-w-md flex-col items-center gap-5 py-10 text-center">
      <p className="eyebrow opacity-70">{attending ? "Tot dan" : "Bedankt"}</p>
      <p className="font-script text-6xl leading-none">Dankjewel {guest}!</p>
      <Ornament />
      <p className="text-xl italic text-mauve-800">
        {attending
          ? "Super dat je erbij bent, we kijken ernaar uit!"
          : "Jammer dat je er niet bij kan zijn, we denken aan je."}
      </p>
      <p className="eyebrow mt-4 text-[0.65rem] opacity-60">Je gaat zo naar het programma</p>
      <Link href="/programma" className="eyebrow border-b border-champagne/60 pb-1 hover:border-mauve-900">
        Nu bekijken
      </Link>
    </div>
  );
}
