import Image from "next/image";

export default function HeroSectionHome() {
  return (
    <div className="h-dvh w-dvw relative overflow-hidden text-white">
      <Image src={"/hbc.webp"} alt={"serre achtergrond"} fill />
      <div className="bg-white/20 backdrop-blur-sm w-full h-full z-10 " />
      <div className="overflow-hidden text-center absolute top-0 w-full my-16 ">
        <h1
          className={`text-8xl starting:opacity-0 opacity-100 starting:translate-y-full  delay-400 transition-opacity translate-0 duration-200`}
        >
          Wij trouwen!
        </h1>
      </div>
    </div>
  );
}
