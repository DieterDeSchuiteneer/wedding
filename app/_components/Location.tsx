import Image from "next/image";

export default function Location() {
  return (
    <div className="flex container">
    <div className="relative aspect-video w-1/2">
      <Image className="" src={"/huisbeaucarne.png"} alt={"hbc logo"}  fill/>
    </div>
    <a href="" >Beaucarnestraat 9, 9700 Oudenaarde</a>
    </div>
  );
}
