import Hero from "../components/home/Hero";
import Ecosystem from "../components/home/Ecosystem";
import Process from "../components/home/Process";
import Brands from "../components/home/Brands";
import RecentProjects from "../components/home/RecentProjects";
import CleanAir from "../components/home/CleanAir";
import Calculator from "../components/home/Calculator"; // <-- IMPORTUJEMY

const Home = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <Ecosystem />
      <Calculator />
      <Process />
      <CleanAir />
      <RecentProjects />
    </main>
  );
};

export default Home;
