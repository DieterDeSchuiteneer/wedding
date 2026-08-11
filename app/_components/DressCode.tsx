import Image from "next/image";

export default function Dresscode() {
  return (
    <div className="">
      <h2 className="text-6xl">Dresscode </h2>
      <div className="grid grid-cols-2">
        <div className="w-dvw h-dvh relative">
          <Image
            src={"/doggosjpg.jpg"}
            alt={"De ergegasten"}
            fill
            objectFit="cover"
            objectPosition="20% "
          />
          <p className="absolute center top-6 text-white font-retro text-shadow-md text-shadow-zinc-950 w-3/4 left-1/2 -translate-x-1/2">
            Strak in het pak of een prachtig kleed. De kleuren laten wij aan
            jullie over!
          </p>
        </div>
      </div>
    </div>
  );
}
