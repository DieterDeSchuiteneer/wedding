import Link from "next/link";
import TimeLine from "../_components/timeline/Timeline";

export default function ProgrammaPage() {
  return (
    <main className="rsvp-page min-h-dvh w-screen overflow-hidden bg-white p-4">
      <div className="rsvp-deck">
        <div className="rsvp-deck__card rsvp-deck__card--back" aria-hidden="true" />
        <div className="rsvp-deck__card rsvp-deck__card--middle" aria-hidden="true" />
        <div className="rsvp-deck__card rsvp-deck__card--front">
          <div className="rsvp-deck__content flex flex-col gap-8">
            <Link href="/" className="font-retro text-mauve-800 underline">
              Naar de startpagina
            </Link>
            <TimeLine />
          </div>
        </div>
      </div>
    </main>
  );
}
