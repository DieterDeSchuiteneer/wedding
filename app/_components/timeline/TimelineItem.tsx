import { coiny, limeLight } from "@/app/layout";
import { IconDirections } from "@tabler/icons-react";
import { ReactElement } from "react";
import FlipCard from "./FlipCard";

type Props = {
  start: string;
  end?: string;
  icon: ReactElement;
  description: string;
  location?: string;
};

export default function TimeLineItem({
  start,
  end,
  description,
  icon,
  location,
}: Props) {
  return (
    <FlipCard
      offset={0.75}
      className={`flex items-center gap-4 ${coiny.className}`}
    >
      <>
        <div className=" rounded-full size-20 flex items-center justify-center ">
          {icon}
        </div>
        <div className="">
          <p className={`text-mauve-800  ${limeLight.className} `}>
            {start} - {end}
          </p>
          <p className="leading-tight text-gray-700">{description}</p>
          {location && (
            <div className="flex gap-1 text-xl mt-1">
              <IconDirections size={16} stroke={1} />
              <a href="" className="text-sm underline">
                {location}
              </a>
            </div>
          )}
        </div>
      </>
    </FlipCard>
  );
}
