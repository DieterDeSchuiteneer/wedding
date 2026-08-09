import HeroSectionHome from "./_components/HeroSectionHome";
import Rsvp from "./_components/Rsvp";
import TimeLine from "./_components/timeline/Timeline";

export default function Home() {
  return (
    <main className="h-full overflow-auto scroll-smooth scrollbar-gutter-stable ">
      <HeroSectionHome />
      <TimeLine />
      <Rsvp />
    </main>
  );
}
