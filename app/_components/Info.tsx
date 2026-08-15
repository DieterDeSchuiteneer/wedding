import Image from "next/image";
import Subtitle from "./atoms/Subtitle";
import FlipCard from "./timeline/FlipCard";

export default function Info() {
  return (
    <div className="flex flex-col items-center justify-center w-3/4 m-auto">
      <Subtitle>Praktische info</Subtitle>
      <div className="flex flex-col gap-8">
        <FlipCard offset={1} delay={300} className=" text-center">
          <p className="font-retro font-extralight">
            Onze trouwe viervoeters gaan aanwezig zijn, net zoals wij gaan zij
            heel blij zijn jullie te zien!
            <br />
            Indien dit niet wederzijds is kan je deze best negeren in het begin!
          </p>
        </FlipCard>
        <FlipCard offset={1} delay={300} className="text-center">
          <p className="font-retro">
            Indien jullie bepaalede alergien/dieten hebben gelieve dit op
            voorhand nog eens te vermelden aan ons!
          </p>
        </FlipCard>
        <FlipCard offset={1} delay={300} className=" text-center">
          <p className="font-retro">
            We houden het relatief klein dus dit houd in dat op het feest zelf
            een 30 tal personen aanwezig zullen zijn.
          </p>
        </FlipCard>
        <FlipCard offset={1} delay={300} className=" text-center">
          <p className="font-retro">
            Geniet er zo veel mogelijk van, hebben jullie nog vragen stel ze
            maar!
          </p>
        </FlipCard>
        <div className="w-full flex justify-center mb-24">
          <Image src="/flower.svg" alt="Logo" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}
