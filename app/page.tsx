import Image from "next/image";
import { missFajardose } from "./layout";

export default function Home() {
  return (
    <main>
      <div className="h-dvh w-dvw relative overflow-hidden">
        <Image src={"/hbc.webp"} alt={"serre achtergrond"} fill />
        <div className="bg-white/20 backdrop-blur-sm w-full h-full z-10 " />
        <div className="overflow-hidden text-center absolute top-0 w-full my-16 ">
          <h1
            className={`text-8xl   ${missFajardose.className} starting:translate-y-full  delay-400 transition-all translate-0 ease-out duration-200`}
          >
            Wij trouwen!
          </h1>
        </div>
        <div
          className={`${missFajardose.className} ml-2 text-4xl absolute top-1/2 overflow-hidden`}
        >
          <p className="w-full  starting:translate-x-full  delay-600 transition-all translate-0 ease-out duration-200 ">
            Wie
          </p>
          <p className="w-full starting:translate-x-full  delay-700 transition-all translate-0 ease-out duration-200 ">
            wat
          </p>
          <p className="w-full  starting:translate-x-full  delay-800 transition-all translate-0 ease-out duration-200 ">
            waar
          </p>
          <p className="w-full  starting:translate-x-full  delay-900 transition-all translate-0 ease-out duration-200 ">
            wanneer&nbsp;
          </p>
        </div>
      </div>
    </main>
  );
}
