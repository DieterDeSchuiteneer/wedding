import Image from "next/image";
import Subtitle from "./atoms/Subtitle";
import FlipCard from "./timeline/FlipCard";

export default function Dresscode() {
  return (
    <div className="">
      <div className="grid grid-cols-2">
        <div className="w-dvw h-dvh relative">
          <Image
            src={"/doggosjpg.jpg"}
            alt={"De ergegasten"}
            fill
            objectFit="cover"
            objectPosition="20% "
          />
          <div className="bg-white/20 backdrop-blur-sm w-full h-full z-10 text-shadow-2xs " />
          <div className="absolute  top-0  w-full  bg-linear-to-b  from-black/40 to-transparent h-full">
            <div className="text-white flex flex-col items-center justify-center pt-14">
              <div className="w-3/4">
                <Subtitle>Dresscode</Subtitle>
              </div>
              <FlipCard offset={1} delay={300} className="w-3/4 text-center">
                <p className="font-retro  ">
                  Strak in het pak of een prachtig kleed. De kleuren laten wij
                  aan jullie over!
                </p>
              </FlipCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
