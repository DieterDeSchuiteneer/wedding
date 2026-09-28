import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Guest } from "../_data/guests";

export type RsvpEntry = {
  guest: Guest;
  attending: boolean;
  savedAt: string;
};

const file = path.join(process.cwd(), "data", "rsvps.json");

async function readAll(): Promise<RsvpEntry[]> {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch {
    return [];
  }
}

// Eén antwoord per gast: een nieuw antwoord overschrijft het vorige.
export async function saveRsvp(entry: RsvpEntry) {
  const entries = (await readAll()).filter((e) => e.guest !== entry.guest);
  entries.push(entry);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(entries, null, 2));
}
