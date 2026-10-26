import Image from "next/image";
import Reveal from "./atoms/Reveal";
import Subtitle from "./atoms/Subtitle";

export default function Dresscode() {
  return (
    <section className="relative flex min-h-[85dvh] w-full items-end overflow-hidden text-ivory">
      <Image
        src="/doggosjpg.jpg"
        alt="Onze honden, de eregasten"
        fill
        sizes="100vw"
        className="object-cover object-[20%_center]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-mauve-950/85 via-mauve-950/30 to-mauve-950/10" />
      <Reveal className="relative mx-auto w-full max-w-xl px-6 pb-20 text-center">
        <Subtitle eyebrow="Wat trek ik aan?" className="mb-6">
          Dresscode
        </Subtitle>
        <p className="text-2xl font-light leading-relaxed">
          Strak in het pak of een prachtig kleed.
          <br />
          <span className="italic">De kleuren laten wij aan jullie over!</span>
        </p>
      </Reveal>
    </section>
  );
}
