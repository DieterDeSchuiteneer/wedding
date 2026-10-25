import {
  IconMessageCircleHeart,
  IconPaw,
  IconSalad,
  IconUsers,
} from "@tabler/icons-react";
import Reveal from "./atoms/Reveal";
import Subtitle from "./atoms/Subtitle";

const iconProps = { className: "size-7 text-champagne", stroke: 1 };

const items = [
  {
    icon: <IconPaw {...iconProps} />,
    title: "Viervoeters",
    text: "Onze trouwe viervoeters zijn er ook bij. Net als wij zullen ze heel blij zijn jullie te zien! Is dat niet wederzijds, dan negeer je ze best even in het begin.",
  },
  {
    icon: <IconSalad {...iconProps} />,
    title: "Allergieën & diëten",
    text: "Heb je bepaalde allergieën of een dieet? Vermeld het bij je RSVP, dan houden wij er rekening mee.",
  },
  {
    icon: <IconUsers {...iconProps} />,
    title: "Klein & gezellig",
    text: "We houden het relatief klein: op het feest zelf zijn we met een dertigtal personen.",
  },
  {
    icon: <IconMessageCircleHeart {...iconProps} />,
    title: "Vragen?",
    text: "Geniet er zoveel mogelijk van! Heb je nog vragen, stel ze gerust.",
  },
];

export default function Info() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-24">
      <Subtitle eyebrow="Goed om te weten">Praktische info</Subtitle>
      <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2">
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 2) * 150}
            className="flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            {item.icon}
            <h3 className="eyebrow mt-4 mb-2">{item.title}</h3>
            <p className="text-lg leading-relaxed text-mauve-800">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
