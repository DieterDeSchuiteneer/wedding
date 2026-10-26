import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { buttonClasses } from "./atoms/Button";
import Reveal from "./atoms/Reveal";
import Subtitle from "./atoms/Subtitle";

export default function Rsvp() {
  return (
    <section className="bg-linen px-6 py-24">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
        <Subtitle eyebrow="RSVP" className="mb-8">
          Kom je ook?
        </Subtitle>
        <p className="mb-10 text-xl italic text-mauve-800">
          Het zou ons veel betekenen om deze dag met jou te delen. Laat je ons
          even weten of je erbij bent?
        </p>
        <Link href="/rsvp" className={buttonClasses}>
          Laat het ons weten
          <IconArrowRight size={16} stroke={1.5} />
        </Link>
      </Reveal>
    </section>
  );
}
