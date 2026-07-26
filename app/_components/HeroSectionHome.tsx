import Image from "next/image";
import { missFajardose } from "../layout";

export default function HeroSectionHome() {
  return (
    <div className="h-dvh w-dvw relative overflow-hidden text-white">
      <Image src={"/hbc.webp"} alt={"serre achtergrond"} fill />
      <div className="bg-white/20 backdrop-blur-sm w-full h-full z-10 " />
      <div className="overflow-hidden text-center absolute top-0 w-full my-16 ">
        <h1
          className={`text-8xl starting:translate-y-full  delay-400 transition-all translate-0 ease-out duration-200`}
        >
          Wij trouwen!
        </h1>
      </div>
      <div className={` pl-2 text-6xl absolute top-1/2 overflow-hidden`}>
        <p className="w-full  starting:translate-x-full  delay-600 transition-all translate-0 ease-out duration-200 ">
          Wie
        </p>
        <p className="w-full starting:translate-x-full  delay-700 transition-all translate-0 ease-out duration-200 ">
          Wat
        </p>
        <p className="w-full  starting:translate-x-full  delay-800 transition-all translate-0 ease-out duration-200 ">
          Waar
        </p>
        <p className="w-full  starting:translate-x-full  delay-900 transition-all translate-0 ease-out duration-200 ">
          Wanneer
        </p>
      </div>
    </div>
  );
}
