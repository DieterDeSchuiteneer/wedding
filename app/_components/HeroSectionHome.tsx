import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import { wedding } from "../_data/wedding";
import Ornament from "./atoms/Ornament";
import Countdown from "./Countdown";

export default function HeroSectionHome() {
  return (
    <section className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden text-ivory">
      <Image
        src="/hbc.webp"
        alt="De serre van Huis Beaucarne"
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="hero-photo object-cover"
      />
      {/* Darker top and bottom keep the text readable without washing out the photo. */}
      <div className="absolute inset-0 bg-linear-to-b from-mauve-950/55 via-mauve-950/40 to-mauve-950/75" />

      <div className="relative flex flex-col items-center gap-6 px-6 text-center">
        <p className="hero-reveal eyebrow" style={{ animationDelay: "200ms" }}>
          Wij trouwen
        </p>
        <h1
          className="hero-reveal font-script text-7xl leading-[0.9] drop-shadow-[0_2px_20px_rgb(0_0_0/0.35)] sm:text-9xl"
          style={{ animationDelay: "450ms" }}
        >
          Laura
          <span className="mx-3 align-middle font-serif text-4xl italic text-champagne sm:text-5xl">
            &amp;
          </span>
          Dieter
        </h1>
        <div className="hero-reveal flex flex-col items-center gap-3" style={{ animationDelay: "800ms" }}>
          <Ornament className="text-ivory/80" />
          <p className="text-2xl font-light tracking-wide">{wedding.dateLabel}</p>
          <p className="eyebrow opacity-90">{wedding.venue.name} · Oudenaarde</p>
        </div>
        <div className="hero-reveal mt-6" style={{ animationDelay: "1150ms" }}>
          <Countdown date={wedding.date} />
        </div>
      </div>

      <a
        href="#planning"
        aria-label="Scroll naar de planning"
        className="scroll-cue absolute bottom-8 rounded-full p-2 text-ivory/80 hover:text-ivory"
      >
        <IconChevronDown stroke={1} className="size-8" />
      </a>
    </section>
  );
}
