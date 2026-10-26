import Link from "next/link";
import TimeLine from "../_components/timeline/Timeline";

export default function ProgrammaPage() {
  return (
    <main className="rsvp-page min-h-dvh w-screen overflow-hidden p-4">
      <div className="rsvp-deck">
        <div className="rsvp-deck__card rsvp-deck__card--back" aria-hidden="true" />
        <div className="rsvp-deck__card rsvp-deck__card--middle" aria-hidden="true" />
        <div className="rsvp-deck__card rsvp-deck__card--front">
          <div className="rsvp-deck__content flex flex-col gap-4">
            <Link href="/" className="eyebrow inline-flex items-center gap-2 text-mauve-700 hover:text-mauve-900">
              ← Naar de startpagina
            </Link>
            <TimeLine compact />
          </div>
        </div>
      </div>
    </main>
  );
}
