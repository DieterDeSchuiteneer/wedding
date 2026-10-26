import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Guest } from "../_data/guests";

export type RsvpEntry = {
  guest: Guest;
  attending: boolean;
  note: string;
  savedAt: string;
};

// With RSVP_WEBHOOK_URL set, answers go to the Google Sheet (which also mails
// you, see docs/rsvp-google-sheet.md). Without it they land in a local JSON
// file, which is handy during development.
export async function saveRsvp(entry: RsvpEntry) {
  const webhook = process.env.RSVP_WEBHOOK_URL;
  if (webhook) {
    await postToWebhook(webhook, entry);
  } else {
    await saveToFile(entry);
  }
}

async function postToWebhook(url: string, entry: RsvpEntry) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Apps Script can't read request headers, so the secret travels in the body.
    body: JSON.stringify({ ...entry, secret: process.env.RSVP_WEBHOOK_SECRET }),
    cache: "no-store",
  });
  const body = await res.json().catch(() => null);
  if (!res.ok || !body?.ok) {
    throw new Error(`RSVP webhook failed: ${res.status} ${body?.error ?? ""}`);
  }
}

const file = path.join(process.cwd(), "data", "rsvps.json");

async function saveToFile(entry: RsvpEntry) {
  let entries: RsvpEntry[] = [];
  try {
    entries = JSON.parse(await readFile(file, "utf8"));
  } catch {}
  // One answer per guest: a new answer replaces the previous one.
  entries = entries.filter((e) => e.guest !== entry.guest);
  entries.push(entry);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(entries, null, 2));
}
