import Dresscode from "./_components/DressCode";
import HeroSectionHome from "./_components/HeroSectionHome";
import Info from "./_components/Info";
import Rsvp from "./_components/Rsvp";
import TimeLine from "./_components/timeline/Timeline";

export default function Home() {
  return (
    <main className="h-full overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-gutter-stable flex flex-col gap-14">
      <HeroSectionHome />
      <TimeLine />
      <Rsvp />
      <Dresscode />
      <Info />
    </main>
  );
}
