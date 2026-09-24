import Link from "next/link";
import RsvpFrom from "../_components/RsvpForm";

export default function RsvpPage() {
  return (
    <main className="rsvp-page min-h-screen w-screen overflow-hidden bg-white p-4">
      <div className="rsvp-page__shuffle" aria-hidden="true" />
      <div className="rsvp-page__content">
        <Link href="/" className="font-retro text-mauve-800 underline">
          Terug
        </Link>
        <RsvpFrom />
      </div>
    </main>
  );
}
