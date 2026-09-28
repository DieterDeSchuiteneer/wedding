// Voeg hier de gasten toe die in de dropdown van het RSVP formulier verschijnen.
export const guests = [
  "Gast 1",
  "Gast 2",
  "Gast 3",
] as const;

export type Guest = (typeof guests)[number];

export function isGuest(value: unknown): value is Guest {
  return typeof value === "string" && guests.includes(value as Guest);
}
