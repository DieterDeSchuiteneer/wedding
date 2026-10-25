import Image from "next/image";
import { wedding } from "../_data/wedding";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 border-t border-champagne/30 bg-linen px-6 pt-16 pb-12 text-center">
      <Image src="/flower.svg" alt="" width={72} height={72} className="opacity-80" />
      <p className="font-script text-5xl">{wedding.couple}</p>
      <p className="eyebrow opacity-70">
        {wedding.dateLabel} · {wedding.venue.name}
      </p>
    </footer>
  );
}
