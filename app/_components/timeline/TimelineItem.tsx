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
    <FlipCard offset={0.75} className={`flex gap-4 ${coiny.className}`}>
      <>
        <div className=" rounded-full size-20 flex items-center justify-center ">
          {icon}
        </div>
        <div>
          <p className={`text-gray-700 ${limeLight.className} `}>
            {start} - {end}
          </p>
          <p className=" text-xl">{description}</p>
          {location && (
            <div className="flex gap-1 text-xl">
              <IconDirections size={24} stroke={1} />
              {location}
            </div>
          )}
        </div>
      </>
    </FlipCard>
  );
}
