import HeroSectionHome from "./_components/HeroSectionHome";
import TimeLine from "./_components/timeline/Timeline";

export default function Home() {
  return (
    <main className="h-full overflow-auto scroll-smooth scrollbar-gutter-stable ">
      <HeroSectionHome />
      <TimeLine />
    </main>
  );
}
