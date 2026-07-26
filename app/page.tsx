import HeroSectionHome from "./_components/HeroSectionHome";
import Location from "./_components/Location";
import TimeLine from "./_components/Timeline";

export default function Home() {
  return (
    <main className="h-full overflow-auto">
      <HeroSectionHome />
      <Location/>
      <TimeLine />
    </main>
  );
}
