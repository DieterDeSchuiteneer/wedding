"use client";
import { cn } from "@sglara/cn";
import { IconDirections } from "@tabler/icons-react";
import { ReactElement } from "react";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  return (
    <div
      className={cn(
        "flex gap-4 transition-all duration-350 opacity-100 rotate-0",
        !inView ? "rotate-x-90 opacity-0" : ""
      )}
      ref={ref}
    >
      <div className=" rounded-full size-20 border-2 border-gray-400 flex items-center justify-center ">
        {icon}
      </div>
      <div>
        <p className="text-gray-700 text-xl">
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
    </div>
  );
}
