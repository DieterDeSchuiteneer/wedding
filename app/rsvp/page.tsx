import Link from "next/link";
import RsvpFrom from "../_components/RsvpForm";

export default function RsvpPage() {
  return (
    <main className="rsvp-page min-h-dvh w-screen overflow-hidden p-4">
      <div className="rsvp-deck">
        <div className="rsvp-deck__card rsvp-deck__card--back" aria-hidden="true" />
        <div className="rsvp-deck__card rsvp-deck__card--middle" aria-hidden="true" />
        <div className="rsvp-deck__card rsvp-deck__card--front">
          <div className="rsvp-deck__content">
            <Link href="/" className="eyebrow inline-flex items-center gap-2 text-mauve-700 hover:text-mauve-900">
              ← Terug
            </Link>
            <RsvpFrom />
          </div>
        </div>
      </div>
    </main>
  );
}
