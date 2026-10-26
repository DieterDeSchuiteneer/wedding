import { IconCalendarPlus, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import { wedding } from "../_data/wedding";
import Reveal from "./atoms/Reveal";
import Subtitle from "./atoms/Subtitle";

const linkClasses =
  "eyebrow inline-flex items-center gap-2 border-b border-champagne/60 pb-1 transition-colors hover:border-mauve-900";

export default function Location() {
  return (
    <section className="mx-auto w-full max-w-xl px-6 py-24">
      <Subtitle eyebrow="Waar">De locatie</Subtitle>
      <Reveal className="flex flex-col items-center gap-8 text-center">
        <div className="relative h-24 w-56">
          <Image
            src="/huisbeaucarne.png"
            alt={wedding.venue.name}
            fill
            sizes="224px"
            className="object-contain mix-blend-multiply"
          />
        </div>
        <address className="not-italic">
          <p className="text-2xl">{wedding.venue.name}</p>
          <p className="text-lg text-mauve-700">{wedding.venue.address}</p>
        </address>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          <a
            href={wedding.venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            <IconMapPin size={16} stroke={1.25} />
            Route plannen
          </a>
          <a href="/agenda.ics" className={linkClasses}>
            <IconCalendarPlus size={16} stroke={1.25} />
            In mijn agenda
          </a>
        </div>
      </Reveal>
    </section>
  );
}
