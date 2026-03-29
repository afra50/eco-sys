import React, { useState, useEffect } from "react";
import { Check, Wind, Thermometer, Settings, Wrench } from "lucide-react";
import "../styles/pages/airconditioning.scss";
import Button from "../components/ui/Button";

// --- IMPORTY ZDJĘĆ Z FOLDERU SRC ---
import heroSlide1 from "../images/klimatyzacja-dom.webp";
import heroSlide2 from "../images/klimatyzacja-vrf.webp";

import klim1 from "../images/klim-1.webp";
import klim2 from "../images/klim-2.webp";
import klim3 from "../images/klim-3.webp";
import klim4 from "../images/klim-4.webp";
import klim5 from "../images/klim-5.webp";

import vrf1 from "../images/vrf-zdjecie-1.webp";
import vrf2 from "../images/vrf-zdjecie-2.webp";
import vrf3 from "../images/vrf-zdjecie-3.webp";
import vrf4 from "../images/vrf-zdjecie-4.webp";
import vrf5 from "../images/vrf-zdjecie-5.webp";
import vrf6 from "../images/vrf-zdjecie-6.webp";
import vrf7 from "../images/vrf-zdjecie-7.webp";

const AirConditioning = () => {
	// --- GŁÓWNY HERO SLIDER ---
	const [currentSlide, setCurrentSlide] = useState(0);
	const slides = [
		{
			url: heroSlide1,
			alt: "Klimatyzacja domowa premium w nowoczesnym salonie (wersja XXL)",
		},
		{
			url: heroSlide2,
			alt: "Klimatyzacja przemysłowa VRF na dachu",
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
		}, 4000);
		return () => clearInterval(timer);
	}, [slides.length]);

	// --- MINI-SLIDER: KLIMATYZACJA DLA DOMU ---
	const [currentHomeSlide, setCurrentHomeSlide] = useState(0);
	const homeSlides = [klim1, klim2, klim3, klim4, klim5];

	useEffect(() => {
		const homeTimer = setInterval(() => {
			setCurrentHomeSlide((prev) =>
				prev === homeSlides.length - 1 ? 0 : prev + 1,
			);
		}, 4000);
		return () => clearInterval(homeTimer);
	}, [homeSlides.length]);

	// --- MINI-SLIDER: KLIMATYZACJA PRZEMYSŁOWA (VRF) ---
	const [currentVrfSlide, setCurrentVrfSlide] = useState(0);
	const vrfSlides = [vrf1, vrf2, vrf3, vrf4, vrf5, vrf6, vrf7];

	useEffect(() => {
		const vrfTimer = setInterval(() => {
			setCurrentVrfSlide((prev) =>
				prev === vrfSlides.length - 1 ? 0 : prev + 1,
			);
		}, 4000);
		return () => clearInterval(vrfTimer);
	}, [vrfSlides.length]);

	// --- TEKSTY ---
	const homeAdvantages = [
		"Skuteczne chłodzenie latem i dogrzewanie w okresach przejściowych",
		"Systemy Split (1 na 1) oraz Multi-Split (wiele jednostek do jednego agregatu)",
		"Zaawansowane filtry i jonizacja poprawiające jakość powietrza",
		"Cicha praca, idealna do sypialni i salonu",
		"Zdalne sterowanie za pomocą modułu Wi-Fi",
		"Nowoczesny design dopasowany do każdego wnętrza",
	];

	const vrfAdvantages = [
		"Systemy ze zmiennym przepływem czynnika chłodniczego (VRF/VRV)",
		"Możliwość podłączenia kilkudziesięciu jednostek wewnętrznych",
		"Niezależne sterowanie temperaturą w różnych strefach (biura, hotele)",
		"Działanie na bardzo długich rurociągach",
		"Wysoka energooszczędność i optymalizacja kosztów utrzymania",
		"Niezawodność i praca ciągła pod dużym obciążeniem",
	];

	return (
		<div className="airconditioning">
			<section className="airconditioning_hero">
				<div className="airconditioning_slider">
					{slides.map((slide, index) => (
						<img
							key={index}
							src={slide.url}
							alt={slide.alt}
							className={`airconditioning_slide ${index === currentSlide ? "active" : ""}`}
						/>
					))}
					<div className="airconditioning_overlay"></div>
				</div>

				<div className="airconditioning_container airconditioning_hero_container">
					<div className="airconditioning_hero_content">
						<h1 className="airconditioning_title">Klimatyzacja</h1>
						<p className="airconditioning_subtitle">
							Komfort dla Domu i Biznesu
						</p>
						<p className="airconditioning_desc">
							Zapewniamy optymalną temperaturę i czyste powietrze przez cały
							rok. Od estetycznych rozwiązań do mieszkań i domów
							jednorodzinnych, po zaawansowane systemy przemysłowe VRF dla
							dużych obiektów komercyjnych.
						</p>
					</div>
				</div>
			</section>

			<section className="airconditioning_section airconditioning_section_light">
				<div className="airconditioning_container airconditioning_split">
					<div className="airconditioning_image_box">
						{/* --- NOWY MINI-SLIDER: DOM --- */}
						<div className="airconditioning_mini_slider">
							{homeSlides.map((img, index) => (
								<img
									key={index}
									src={img}
									alt={`Klimatyzacja Domowa ${index + 1}`}
									className={`airconditioning_mini_slide ${index === currentHomeSlide ? "active" : ""}`}
								/>
							))}
						</div>
					</div>

					<div className="airconditioning_text_box">
						<h2 className="airconditioning_section_title">
							Klimatyzacja dla Domu
						</h2>
						<p className="airconditioning_section_desc">
							Idealne rozwiązanie dla mieszkań i domów. Dostarczamy urządzenia,
							które nie tylko niezawodnie chłodzą, ale również ogrzewają i
							oczyszczają powietrze z alergenów, dbając o zdrowie Twojej
							rodziny.
						</p>
						<ul className="airconditioning_list">
							{homeAdvantages.map((adv, i) => (
								<li key={i} className="airconditioning_item">
									<Check size={20} className="airconditioning_icon" />
									<span className="airconditioning_list_text">{adv}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<section className="airconditioning_section airconditioning_section_dark">
				<div className="airconditioning_container airconditioning_split airconditioning_split_reverse">
					<div className="airconditioning_image_box">
						{/* --- MINI-SLIDER: VRF --- */}
						<div className="airconditioning_mini_slider">
							{vrfSlides.map((img, index) => (
								<img
									key={index}
									src={img}
									alt={`Klimatyzacja Przemysłowa ${index + 1}`}
									className={`airconditioning_mini_slide ${index === currentVrfSlide ? "active" : ""}`}
								/>
							))}
						</div>
					</div>

					<div className="airconditioning_text_box">
						<h2 className="airconditioning_section_title">
							Klimatyzacja Przemysłowa (VRF)
						</h2>
						<p className="airconditioning_section_desc">
							Zaprojektowana dla wymagających przestrzeni: biurowców, hoteli,
							hal i obiektów handlowych. Systemy VRF to potężna wydajność,
							precyzyjne sterowanie strefowe i skalowalność, która rośnie wraz z
							Twoim biznesem.
						</p>
						<ul className="airconditioning_list">
							{vrfAdvantages.map((adv, i) => (
								<li key={i} className="airconditioning_item">
									<Check size={20} className="airconditioning_icon" />
									<span className="airconditioning_list_text">{adv}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<section className="airconditioning_standards">
				<div className="airconditioning_container">
					<h2 className="airconditioning_standards_title">Jak pracujemy?</h2>
					<div className="airconditioning_standards_grid">
						<div className="airconditioning_standard_card">
							<Thermometer
								className="airconditioning_standard_icon"
								size={48}
							/>
							<h3>Fachowy dobór</h3>
							<p>
								Dopasowujemy moc i rodzaj urządzenia precyzyjnie do kubatury i
								specyfiki Twojego budynku.
							</p>
						</div>
						<div className="airconditioning_standard_card">
							<Wrench className="airconditioning_standard_icon" size={48} />
							<h3>Uprawnienia F-Gazy</h3>
							<p>
								Nasi instalatorzy posiadają wszystkie wymagane prawem
								certyfikaty, gwarantując bezpieczny montaż.
							</p>
						</div>
						<div className="airconditioning_standard_card">
							<Settings className="airconditioning_standard_icon" size={48} />
							<h3>Estetyka i czystość</h3>
							<p>
								Montaż przeprowadzamy z dbałością o detale, zostawiając po sobie
								idealny porządek.
							</p>
						</div>
						<div className="airconditioning_standard_card">
							<Wind className="airconditioning_standard_icon" size={48} />
							<h3>Autoryzowany serwis</h3>
							<p>
								Zapewniamy regularne przeglądy, czyszczenie i odgrzybianie
								instalacji klimatyzacyjnych.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="airconditioning_cta">
				<div className="airconditioning_container">
					<h2 className="airconditioning_cta_title">
						Potrzebujesz pomocy w wyborze systemu?
					</h2>
					<p className="airconditioning_cta_desc">
						Skontaktuj się z naszymi doradcami. Przeanalizujemy Twoje potrzeby i
						dobierzemy najbardziej efektywne urządzenie dla Twojego obiektu.
					</p>
					<Button to="/kontakt">Skontaktuj się z nami</Button>
				</div>
			</section>
		</div>
	);
};

export default AirConditioning;
