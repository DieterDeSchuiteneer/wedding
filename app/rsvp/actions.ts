"use server";

import { isGuest } from "../_data/guests";
import { saveRsvp } from "../_lib/rsvpStore";

export type RsvpState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "saved"; guest: string; attending: boolean };

const MAX_NOTE_LENGTH = 500;

export async function submitRsvp(
  _prev: RsvpState,
  formData: FormData
): Promise<RsvpState> {
  const guest = formData.get("guest");
  const attendance = formData.get("attendance");
  const note = String(formData.get("note") ?? "").trim().slice(0, MAX_NOTE_LENGTH);

  if (!isGuest(guest)) {
    return { status: "error", message: "Kies je naam uit de lijst." };
  }
  if (attendance !== "coming" && attendance !== "not-coming") {
    return { status: "error", message: "Laat ons weten of je komt." };
  }

  const attending = attendance === "coming";
  try {
    await saveRsvp({ guest, attending, note, savedAt: new Date().toISOString() });
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      message: "Er ging iets mis bij het opslaan, probeer het nog eens.",
    };
  }

  return { status: "saved", guest, attending };
}
