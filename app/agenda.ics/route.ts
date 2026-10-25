import { wedding } from "../_data/wedding";

export const dynamic = "force-static";

const toIcsDate = (date: Date) =>
  date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

// Calendar file so guests can add the day to their agenda in one tap.
export function GET() {
  const start = new Date(wedding.date);
  const end = new Date("2027-05-16T03:00:00+02:00");

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//laura-en-dieter//trouw//NL",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "UID:trouw-laura-dieter-20270515@laura-en-dieter",
    `DTSTAMP:${toIcsDate(new Date("2026-10-01T00:00:00Z"))}`,
    `DTSTART:${toIcsDate(start)}`,
    `DTEND:${toIcsDate(end)}`,
    `SUMMARY:Trouw ${wedding.couple}`,
    `LOCATION:${wedding.venue.name}\\, ${wedding.venue.address.replace(/,/g, "\\,")}`,
    "DESCRIPTION:Ceremonie om 10u00\\, feest in Huis Beaucarne. Tot dan!",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="laura-en-dieter.ics"',
    },
  });
}
