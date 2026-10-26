import { IconMapPin } from "@tabler/icons-react";
import { ReactElement } from "react";
import Reveal from "../atoms/Reveal";

type Props = {
  start: string;
  end?: string;
  icon: ReactElement;
  description: string;
  location?: { name: string; mapsUrl: string };
};

export default function TimeLineItem({
  start,
  end,
  description,
  icon,
  location,
}: Props) {
  return (
    <Reveal className="relative flex gap-6 pb-12 last:pb-0">
      <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-champagne/50 bg-ivory text-mauve-800">
        {icon}
      </div>
      <div className="pt-1">
        <p className="eyebrow text-champagne">
          {start}
          {end && <> – {end}</>}
        </p>
        <p className="mt-1 text-xl leading-snug">{description}</p>
        {location && (
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-base italic text-mauve-700 underline decoration-champagne/60 underline-offset-4 hover:text-mauve-900"
          >
            <IconMapPin size={16} stroke={1.25} />
            {location.name}
          </a>
        )}
      </div>
    </Reveal>
  );
}
