import React from "react";
import { Check } from "lucide-react";
import "../styles/pages/heatpumps.scss";
import PageHero from "../components/ui/PageHero"; // Importujemy nowy komponent Hero

// --- IMPORTY ZDJĘĆ Z FOLDERU SRC ---
import heroImage from "../images/pompa-hero.webp";
import pompaPowietrznaImg from "../images/pompa-powietrzna.jpg";
import pompaGruntowaImg from "../images/pompa-gruntowa.jpg";

// Jak będziesz miał logotypy, odkomentuj to:
// import logo1 from "../images/logo1.png";
// import logo2 from "../images/logo2.png";
// import logo3 from "../images/logo3.png";
// import logo4 from "../images/logo4.png";

const HeatPumps = () => {
	const airAdvantages = [
		"Obniżenie kosztów ogrzewania (do 70%)",
		"Wykorzystanie odnawialnego źródła energii",
		"Brak emisji zanieczyszczeń w miejscu pracy",
		"Brak potrzeby inwestowania w komin",
		"Możliwość chłodzenia budynku latem",
		"Wysoka efektywność i niska awaryjność",
	];

	const groundAdvantages = [
		"Najwyższa możliwa efektywność pracy",
		"Pełna niezależność od temperatury zewnętrznej",
		"Mniejsze zużycie energii elektrycznej",
		"Montaż przez wymienniki poziome lub pionowe",
		"Wyjątkowa trwałość i stabilność systemu",
		"Dyskretna praca (brak widocznej jednostki zew.)",
	];

	return (
		<div className="heatpumps">
			{/* --- HERO W KOMPONENCIE --- */}
			<PageHero
				title="Pompy Ciepła"
				subtitle="Energia z Natury"
				description="Zmień sposób ogrzewania na bardziej wydajny i ekologiczny. Oferujemy profesjonalny dobór, montaż oraz serwis pomp ciepła, które zapewnią Ci komfort cieplny przez cały rok."
				images={[heroImage]}
			/>

			{/* --- INTRO --- */}
			<section className="heatpumps_intro">
				<div className="heatpumps_container heatpumps_intro_wrapper">
					<div className="heatpumps_intro_text">
						<h2 className="heatpumps_section_title">
							Jak działa pompa ciepła?
						</h2>
						<p className="heatpumps_intro_desc">
							Pompy ciepła są ekologicznym sposobem ogrzania domu. To odnawialne
							źródło energii pozwala nie tylko skutecznie dbać o środowisko i
							redukować emisję CO2, ale przede wszystkim obniżyć koszty
							ogrzewania nawet do 70%.
						</p>
					</div>
					<div className="heatpumps_video">
						<iframe
							src="https://www.youtube.com/embed/Hr_qrZSGEpA?si=UuBu5eLxO8EzBZWL"
							title="Jak działa pompa ciepła"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="heatpumps_video_iframe"></iframe>
					</div>
				</div>
			</section>

			{/* --- RODZAJE POMP --- */}
			<section className="heatpumps_types">
				<div className="heatpumps_container heatpumps_types_grid">
					<div className="heatpumps_type_card">
						<h3 className="heatpumps_type_title">Powietrzna pompa ciepła</h3>
						<p className="heatpumps_type_desc">
							Jej działanie opiera się na poborze energii aerotermalnej
							zgromadzonej w powietrzu. Pracuje podobnie do klimatyzatora, z tą
							różnicą, że niezawodnie ogrzewa również wodę użytkową.
						</p>

						<ul className="heatpumps_type_list">
							{airAdvantages.map((adv, i) => (
								<li key={i} className="heatpumps_list_item">
									<Check size={20} className="heatpumps_list_icon" />
									<span className="heatpumps_list_text">{adv}</span>
								</li>
							))}
						</ul>
						<img
							src={pompaPowietrznaImg}
							alt="Schemat pompy powietrznej"
							className="heatpumps_type_image"
						/>
					</div>

					<div className="heatpumps_type_card">
						<h3 className="heatpumps_type_title">Gruntowa pompa ciepła</h3>
						<p className="heatpumps_type_desc">
							Wykorzystuje energię geotermalną. Dzięki wykonaniu odpowiednich
							odwiertów, urządzenie pobiera ciepło z gruntu, stając się
							całkowicie niezależnym od warunków na zewnątrz.
						</p>

						<ul className="heatpumps_type_list">
							{groundAdvantages.map((adv, i) => (
								<li key={i} className="heatpumps_list_item">
									<Check size={20} className="heatpumps_list_icon" />
									<span className="heatpumps_list_text">{adv}</span>
								</li>
							))}
						</ul>
						<img
							src={pompaGruntowaImg}
							alt="Schemat pompy gruntowej"
							className="heatpumps_type_image"
						/>
					</div>
				</div>
			</section>

			{/* --- PARTNERZY --- */}
			<section className="heatpumps_partners">
				<div className="heatpumps_container">
					<h2 className="heatpumps_partners_title">Współpracujemy z</h2>
					<div className="heatpumps_partners_grid">
						<div className="heatpumps_partner_logo">
							{/* <img src={logo1} alt="Partner 1" className="heatpumps_partner_image" /> */}
							<span>Logo 1</span>
						</div>
						<div className="heatpumps_partner_logo">
							{/* <img src={logo2} alt="Partner 2" className="heatpumps_partner_image" /> */}
							<span>Logo 2</span>
						</div>
						<div className="heatpumps_partner_logo">
							{/* <img src={logo3} alt="Partner 3" className="heatpumps_partner_image" /> */}
							<span>Logo 3</span>
						</div>
						<div className="heatpumps_partner_logo">
							{/* <img src={logo4} alt="Partner 4" className="heatpumps_partner_image" /> */}
							<span>Logo 4</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HeatPumps;
