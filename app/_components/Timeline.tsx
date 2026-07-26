import {
  IconCamera,
  IconDeviceGamepad,
  IconDeviceGamepad2,
  IconGlassChampagne,
  IconKey,
  IconToolsKitchen2,
} from "@tabler/icons-react";
import TimeLineItem from "./TimelineItem";
import TimelineSpacer from "./TimelineSpacer";

export default function TimeLine() {
  const items: React.ComponentProps<typeof TimeLineItem>[] = [
    {
      start: "10u00",
      end: "11u00",
      icon: <IconKey className="stroke-gray-400 size-12 " stroke={1} />,
      description: "We starten met de ceremonie",
      location: "Erpe - mere",
    },
    {
      start: "11u00",
      end: "12u00",
      icon: <IconCamera className="stroke-gray-400 size-12 " stroke={1} />,
      description: "Fotos met de famillie en vrienden",
    },
    {
      start: "16u00",
      end: "18u00",
      icon: (
        <IconGlassChampagne className="stroke-gray-400 size-12 " stroke={1} />
      ),
      description: "Glaasje bubbels voor die dat willen",
    },
    {
      start: "18u30",
      end: "21u00",
      icon: (
        <IconToolsKitchen2 className="stroke-gray-400 size-12 " stroke={1} />
      ),
      description: "Eten voor die dat willen en niet willen",
    },
    {
      start: "21u00",
      end: "3u00",
      icon: (
        <IconDeviceGamepad className="stroke-gray-400 size-12 " stroke={1} />
      ),
      description: "Games, muziek & plezier",
    },
  ];

  return (
    <div className="  w-full p-8">
      <h2 className="text-6xl">Planning</h2>
      <div className="flex flex-col items-center justify-center w-5/6">
        {items.map((item, index) => (
          <div key={index} className="w-full">
            <TimeLineItem {...item} />
            {index < items.length - 1 && <TimelineSpacer />}
          </div>
        ))}
      </div>
    </div>
  );
}
