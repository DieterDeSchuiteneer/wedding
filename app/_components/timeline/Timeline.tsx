import {
  IconCamera,
  IconDeviceGamepad,
  IconGlassChampagne,
  IconRings,
  IconToolsKitchen2,
} from "@tabler/icons-react";
import { cn } from "@sglara/cn";
import { wedding } from "../../_data/wedding";
import Subtitle from "../atoms/Subtitle";
import TimeLineItem from "./TimelineItem";

const iconProps = { className: "size-6", stroke: 1 };

// compact drops the section spacing for use inside a card.
export default function TimeLine({ compact = false }: { compact?: boolean }) {
  const items: React.ComponentProps<typeof TimeLineItem>[] = [
    {
      start: "10u00",
      end: "11u00",
      icon: <IconRings {...iconProps} />,
      description: "We starten met de ceremonie",
      location: wedding.ceremony,
    },
    {
      start: "11u00",
      end: "12u00",
      icon: <IconCamera {...iconProps} />,
      description: "Foto's met familie en vrienden",
    },
    {
      start: "16u00",
      end: "18u00",
      icon: <IconGlassChampagne {...iconProps} />,
      description: "Een glaasje bubbels voor wie dat wil",
    },
    {
      start: "18u30",
      end: "21u00",
      icon: <IconToolsKitchen2 {...iconProps} />,
      description: "Eten voor wie dat wil, en wie niet wil",
    },
    {
      start: "21u00",
      end: "03u00",
      icon: <IconDeviceGamepad {...iconProps} />,
      description: "Games, muziek & plezier",
    },
  ];

  return (
    <section
      id="planning"
      className={cn("mx-auto w-full max-w-xl scroll-mt-8", compact ? "py-6" : "px-6 py-24")}
    >
      <Subtitle eyebrow="Het programma">Planning</Subtitle>
      <div className="relative">
        {/* The hairline that connects the stops. */}
        <span
          aria-hidden="true"
          className="absolute left-7 top-7 bottom-7 w-px bg-linear-to-b from-champagne/0 via-champagne/50 to-champagne/0"
        />
        {items.map((item) => (
          <TimeLineItem key={item.start} {...item} />
        ))}
      </div>
    </section>
  );
}
