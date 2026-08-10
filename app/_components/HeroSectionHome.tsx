import Image from "next/image";

export default function HeroSectionHome() {
  return (
    <div className="h-dvh w-dvw relative overflow-hidden text-white">
      <Image
        src={"/hbc.webp"}
        alt={"serre achtergrond"}
        fill
        objectFit="cover"
      />
      <div className="bg-white/20 backdrop-blur-sm w-full h-full z-10 " />
      <div className="overflow-hidden text-center absolute top-0 w-full my-16 h-full flex flex-col">
        <h1
          className={`text-8xl  starting:opacity-0 opacity-100 starting:translate-y-full  delay-400 transition-opacity translate-0 duration-200`}
        >
          Wij trouwen!
        </h1>

        <h2 className=" mt-8 text-2xl  starting:opacity-0 opacity-100 starting:translate-y-full  delay-800 transition-opacity translate-0 duration-400 font-retro">
          15 Mei 2027
        </h2>
        <h2 className="text-4xl starting:opacity-0 opacity-100 starting:translate-y-full  delay-1200 transition-opacity translate-0 duration-400">
          te <span className="font-retro">Huis Beacarne</span>
        </h2>
      </div>
    </div>
  );
}
