import { Sun, Wind, Thermometer, Fan } from "lucide-react";
import "../../styles/components/home/ecosystem.scss";

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
			<div className="ecosystem__container">
				<div className="ecosystem__content">
					<h2 className="ecosystem__title">Systemy najnowszej generacji</h2>
					<p className="ecosystem__subtitle">
						Zobacz, jak współpracują nasze rozwiązania, tworząc dom w pełni
						niezależny energetycznie.
					</p>

					<div className="ecosystem__list">
						{features.map((feature) => (
							<div key={feature.id} className="ecosystem__item">
								<div className="ecosystem__icon">{feature.icon}</div>
								<div className="ecosystem__text">
									<h3>{feature.title}</h3>
									<p>{feature.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="ecosystem__image">
					<img
						src="/images/house-ecosystem.jpg"
						alt="Przekrój domu - ekosystem OZE"
					/>
				</div>
			</div>
		</section>
	);
};

export default Ecosystem;
