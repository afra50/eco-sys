import { Check } from "lucide-react";
import "../styles/pages/heatpumps.scss"; // <--- MAŁYMI LITERAMI

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
		<div className="heat-pumps">
			<section className="heat-pumps__intro">
				<div className="heat-pumps__container heat-pumps__intro-wrapper">
					<div className="heat-pumps__intro-text">
						<h1 className="heat-pumps__title">Jak działa pompa ciepła?</h1>
						<p className="heat-pumps__intro-desc">
							Pompy ciepła są ekologicznym sposobem ogrzania domu. To odnawialne
							źródło energii pozwala nie tylko skutecznie dbać o środowisko i
							redukować emisję CO2, ale przede wszystkim obniżyć koszty
							ogrzewania nawet do 70%.
						</p>
					</div>
					<div className="heat-pumps__video">
						<iframe
							src="https://www.youtube.com/embed/Hr_qrZSGEpA?si=UuBu5eLxO8EzBZWL"
							title="Jak działa pompa ciepła"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>
				</div>
			</section>

			<section className="heat-pumps__types">
				<div className="heat-pumps__container heat-pumps__types-grid">
					<div className="heat-pumps__type-card">
						<h2 className="heat-pumps__type-title">Powietrzna pompa ciepła</h2>
						<p className="heat-pumps__type-desc">
							Jej działanie opiera się na poborze energii aerotermalnej
							zgromadzonej w powietrzu. Pracuje podobnie do klimatyzatora, z tą
							różnicą, że niezawodnie ogrzewa również wodę użytkową.
						</p>

						<ul className="heat-pumps__type-list">
							{airAdvantages.map((adv, i) => (
								<li key={i} className="heat-pumps__list-item">
									<Check size={20} className="heat-pumps__list-icon" />
									<span className="heat-pumps__list-text">{adv}</span>
								</li>
							))}
						</ul>
						<img
							src="/images/pompa-powietrzna.jpg"
							alt="Schemat pompy powietrznej"
							className="heat-pumps__type-image"
						/>
					</div>

					<div className="heat-pumps__type-card">
						<h2 className="heat-pumps__type-title">Gruntowa pompa ciepła</h2>
						<p className="heat-pumps__type-desc">
							Wykorzystuje energię geotermalną. Dzięki wykonaniu odpowiednich
							odwiertów, urządzenie pobiera ciepło z gruntu, stając się
							całkowicie niezależnym od warunków na zewnątrz.
						</p>

						<ul className="heat-pumps__type-list">
							{groundAdvantages.map((adv, i) => (
								<li key={i} className="heat-pumps__list-item">
									<Check size={20} className="heat-pumps__list-icon" />
									<span className="heat-pumps__list-text">{adv}</span>
								</li>
							))}
						</ul>
						<img
							src="/images/pompa-gruntowa.jpg"
							alt="Schemat pompy gruntowej"
							className="heat-pumps__type-image"
						/>
					</div>
				</div>
			</section>

			<section className="heat-pumps__partners">
				<div className="heat-pumps__container">
					<h2 className="heat-pumps__partners-title">Współpracujemy z</h2>
					<div className="heat-pumps__partners-grid">
						<div className="heat-pumps__partner-logo">LOGO 1</div>
						<div className="heat-pumps__partner-logo">LOGO 2</div>
						<div className="heat-pumps__partner-logo">LOGO 3</div>
						<div className="heat-pumps__partner-logo">LOGO 4</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HeatPumps;
