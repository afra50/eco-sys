import { Sun, Wind, Thermometer, Fan } from "lucide-react";
import "../../styles/components/home/ecosystem.scss";

// --- IMPORTY ZDJĘĆ Z FOLDERU SRC ---
import houseEcosystemImg from "../../images/house-ecosystem.jpg";

const Ecosystem = () => {
	const features = [
		{
			id: 1,
			icon: <Thermometer size={28} />,
			title: "Pompy Ciepła",
			desc: "Ogrzewanie i ciepła woda z darmowej energii z otoczenia.",
		},
		{
			id: 2,
			icon: <Sun size={28} />,
			title: "Fotowoltaika",
			desc: "Zasilanie systemów prądem ze słońca, obniżające rachunki do minimum.",
		},
		{
			id: 3,
			icon: <Wind size={28} />,
			title: "Klimatyzacja",
			desc: "Chłód latem i efektywne dogrzewanie w okresach przejściowych.",
		},
		{
			id: 4,
			icon: <Fan size={28} />,
			title: "Rekuperacja",
			desc: "Świeże powietrze i odzysk ciepła bez strat energii.",
		},
	];

	return (
		<section className="ecosystem">
			<div className="ecosystem_container">
				<div className="ecosystem_content">
					<h2 className="ecosystem_title">Systemy najnowszej generacji</h2>
					<p className="ecosystem_subtitle">
						Zobacz, jak współpracują nasze rozwiązania, tworząc dom w pełni
						niezależny energetycznie.
					</p>

					<div className="ecosystem_list">
						{features.map((feature) => (
							<div key={feature.id} className="ecosystem_item">
								<div className="ecosystem_icon">{feature.icon}</div>
								<div className="ecosystem_text">
									<h3>{feature.title}</h3>
									<p>{feature.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="ecosystem_image">
					<img src={houseEcosystemImg} alt="Przekrój domu - ekosystem OZE" />
				</div>
			</div>
		</section>
	);
};

export default Ecosystem;
