import React from "react";
import {
	Check,
	ShieldCheck,
	Thermometer,
	Wrench,
	ArrowRight,
} from "lucide-react";
import "../styles/pages/floorheating.scss";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";

// Import tylko do baneru
import heroImage from "../images/podlogowe.webp";

// Zdjęcia z realizacji
import rurkiImage from "../images/podl1.webp";
import sterowanieImage from "../images/podl2.webp";

const FloorHeating = () => {
	const benefits = [
		"Idealna współpraca z pompami ciepła (system niskotemperaturowy)",
		"Równomierny rozkład temperatury (cieplej w stopy, chłodniej w głowę)",
		"Brak widocznych grzejników, 100% wolności w aranżacji wnętrz",
		"Znacznie mniejsza cyrkulacja kurzu i roztoczy (idealne dla alergików)",
		"Akumulacja ciepła w wylewce (stabilna temperatura w domu)",
		"Możliwość chłodzenia pasywnego latem (przy odpowiedniej pompie ciepła)",
	];

	return (
		<div className="floorheating">
			{/* --- HERO W KOMPONENCIE --- */}
			<PageHero
				title="Ogrzewanie podłogowe"
				subtitle="Komfort cieplny na nowym poziomie"
				description="Zainwestuj w system, który gwarantuje idealny rozkład temperatury i maksymalną efektywność energetyczną. To optymalne rozwiązanie szczególnie w połączeniu z nowoczesnymi pompami ciepła."
				images={[heroImage]}
			/>

			{/* --- ZASADA DZIAŁANIA (SPLIT) --- */}
			<section className="floorheating_intro">
				<div className="floorheating_container floorheating_intro_wrapper">
					<div className="floorheating_intro_text">
						<h2 className="floorheating_section_title">
							Jak to działa i dlaczego warto?
						</h2>
						<p className="floorheating_intro_desc">
							Ogrzewanie podłogowe oddaje ciepło przez promieniowanie, a nie
							konwekcję jak tradycyjne grzejniki. Dzięki temu uzyskujemy profil
							temperaturowy najbardziej zbliżony do idealnego dla ludzkiego
							ciała. Dodatkowo jest to system niskotemperaturowy (woda w rurkach
							ma zazwyczaj 30-35°C), co czyni go najbardziej opłacalnym i
							wydajnym odbiornikiem dla pomp ciepła i kotłów kondensacyjnych.
						</p>
					</div>
					<div className="floorheating_split_image_wrapper placeholder_bg">
						<img
							src={rurkiImage}
							alt="Ułożone rurki ogrzewania podłogowego"
							className="floorheating_split_image"
						/>
					</div>
				</div>
			</section>

			{/* --- KORZYŚCI (KARTY/LISTA) --- */}
			<section className="floorheating_benefits">
				<div className="floorheating_container">
					<h2 className="floorheating_benefits_title">Główne zalety systemu</h2>
					<div className="floorheating_benefits_grid">
						<div className="floorheating_benefit_card">
							<ul className="floorheating_benefit_list">
								{benefits.map((benefit, i) => (
									<li key={i} className="floorheating_list_item">
										<Check size={24} className="floorheating_list_icon" />
										<span className="floorheating_list_text">{benefit}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* --- STEROWANIE (SPLIT REVERSE) --- */}
			<section className="floorheating_control">
				<div className="floorheating_container floorheating_control_wrapper">
					<div className="floorheating_split_image_wrapper placeholder_bg">
						<img
							src={sterowanieImage}
							alt="Inteligentny termostat ścienny"
							className="floorheating_split_image"
						/>
					</div>
					<div className="floorheating_intro_text floorheating_control_text">
						<h2 className="floorheating_section_title">
							Pełna kontrola nad klimatem
						</h2>
						<p className="floorheating_intro_desc">
							Nowoczesna "podłogówka" to nie tylko rury w posadzce, ale też
							zaawansowane systemy sterowania. Dzięki inteligentnym termostatom
							i precyzyjnym rozdzielaczom, możesz ustawić niezależną temperaturę
							dla każdego pomieszczenia osobno. Daje to nie tylko maksymalny
							komfort domownikom, ale również pozwala na dalszą optymalizację
							kosztów ogrzewania.
						</p>
					</div>
				</div>
			</section>

			{/* --- WĄSKI PASEK (BANNER USPs) --- */}
			<section className="floorheating_banner">
				<div className="floorheating_container floorheating_banner_wrapper">
					<div className="floorheating_banner_item">
						<ShieldCheck size={36} className="floorheating_banner_icon" />
						<div className="floorheating_banner_text">
							<h4>Pełna szczelność</h4>
							<p>Testy ciśnieniowe układu przed zalaniem posadzek.</p>
						</div>
					</div>
					<div className="floorheating_banner_item">
						<Thermometer size={36} className="floorheating_banner_icon" />
						<div className="floorheating_banner_text">
							<h4>Wysoka wydajność</h4>
							<p>Precyzyjny projekt i dobór rur pod pompy ciepła.</p>
						</div>
					</div>
					<div className="floorheating_banner_item">
						<Wrench size={36} className="floorheating_banner_icon" />
						<div className="floorheating_banner_text">
							<h4>Kompleksowy montaż</h4>
							<p>Od układania rur po instalację i kalibrację rozdzielaczy.</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- CTA (WEZWANIE DO DZIAŁANIA) --- */}
			<section className="floorheating_cta">
				<div className="floorheating_container floorheating_cta_wrapper">
					<h2 className="floorheating_cta_title">
						Gotowy na komfortową, ciepłą podłogę?
					</h2>
					<p className="floorheating_cta_desc">
						Zaprojektujemy i wykonamy nowoczesną instalację dopasowaną do
						Twojego budynku. Skontaktuj się z nami i odbierz darmową,
						niezobowiązującą wycenę.
					</p>
					<Button to="/kontakt">
						Darmowa wycena{" "}
						<ArrowRight size={18} style={{ marginLeft: "8px" }} />
					</Button>
				</div>
			</section>
		</div>
	);
};

export default FloorHeating;
