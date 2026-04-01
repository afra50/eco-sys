import Hero from "../components/home/Hero";
import Ecosystem from "../components/home/Ecosystem";
import Process from "../components/home/Process";
import Brands from "../components/home/Brands";
import RecentProjects from "../components/home/RecentProjects";

const Home = () => {
  return (
    <main>
      <Hero />
      <Brands /> {/* Fajnie wygląda od razu pod Hero jako "social proof" */}
      <Ecosystem />
      <Process />
      <RecentProjects />
    </main>
  );
};

export default Home;
