import Dresscode from "./_components/DressCode";
import Footer from "./_components/Footer";
import HeroSectionHome from "./_components/HeroSectionHome";
import Info from "./_components/Info";
import Location from "./_components/Location";
import Rsvp from "./_components/Rsvp";
import TimeLine from "./_components/timeline/Timeline";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <HeroSectionHome />
      <TimeLine />
      <Rsvp />
      <Location />
      <Dresscode />
      <Info />
      <Footer />
    </main>
  );
}
