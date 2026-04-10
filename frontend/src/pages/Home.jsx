import Hero from "../components/home/Hero";
import Ecosystem from "../components/home/Ecosystem";
import Process from "../components/home/Process";
import Brands from "../components/home/Brands";
import RecentProjects from "../components/home/RecentProjects";
import CleanAir from "../components/home/CleanAir"; // <-- Import nowej sekcji

const Home = () => {
	return (
		<main>
			<Hero />
			<Brands /> {/* Fajnie wygląda od razu pod Hero jako "social proof" */}
			<Ecosystem />
			<Process />
			<CleanAir /> {/* <-- Czyste Powietrze ląduje tutaj */}
			<RecentProjects />
		</main>
	);
};

export default Home;
