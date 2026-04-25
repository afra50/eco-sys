import React, { useState, useEffect } from "react";
import {
	Check,
	Wind,
	Thermometer,
	Settings,
	Wrench,
	Home,
	Factory,
	X,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import "../styles/pages/airconditioning.scss";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";

// --- IMPORTY ZDJĘĆ ---
import heroSlide1 from "../images/klimatyzacja-dom.webp";
import heroSlide2 from "../images/klimatyzacja-vrf.webp";

import klim1 from "../images/klim-1.webp";
import klim2 from "../images/klim-2.webp";
import klim3 from "../images/klim-3.webp";
import klim4 from "../images/klim-4.webp";
import klim5 from "../images/klim-5.webp";

// Nowe zdjęcia dołożone na początek
import vrfNew1 from "../images/vrf-1.webp";
import vrfNew2 from "../images/vrf-2.webp";

import vrf1 from "../images/vrf-zdjecie-1.webp";
import vrf2 from "../images/vrf-zdjecie-2.webp";
import vrf3 from "../images/vrf-zdjecie-3.webp";
import vrf4 from "../images/vrf-zdjecie-4.webp";

const AirConditioning = () => {
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
	// Usunąłem nieistniejące vrf5, vrf6, vrf7, żeby nie wywalało błędu i dodałem nowe na początek
	const vrfSlides = [vrfNew1, vrfNew2, vrf1, vrf2, vrf3, vrf4];

	useEffect(() => {
		const vrfTimer = setInterval(() => {
			setCurrentVrfSlide((prev) =>
				prev === vrfSlides.length - 1 ? 0 : prev + 1,
			);
		}, 4000);
		return () => clearInterval(vrfTimer);
	}, [vrfSlides.length]);

	// --- LOGIKA LIGHTBOXA (Powiększanie zdjęć) ---
	const [lightboxData, setLightboxData] = useState({
		isOpen: false,
		images: [],
		currentIndex: 0,
	});

	useEffect(() => {
		if (lightboxData.isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [lightboxData.isOpen]);

	const openLightbox = (imagesArray, index) => {
		setLightboxData({ isOpen: true, images: imagesArray, currentIndex: index });
	};

	const closeLightbox = () => {
		setLightboxData({ isOpen: false, images: [], currentIndex: 0 });
	};

	const nextLightboxImg = (e) => {
		e.stopPropagation();
		setLightboxData((prev) => ({
			...prev,
			currentIndex:
				prev.currentIndex === prev.images.length - 1
					? 0
					: prev.currentIndex + 1,
		}));
	};

	const prevLightboxImg = (e) => {
		e.stopPropagation();
		setLightboxData((prev) => ({
			...prev,
			currentIndex:
				prev.currentIndex === 0
					? prev.images.length - 1
					: prev.currentIndex - 1,
		}));
	};

	// --- TEKSTY POMOCNICZE ---
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
			<PageHero
				title="Klimatyzacja"
				subtitle="Komfort dla Domu i Biznesu"
				description="Zapewniamy optymalną temperaturę i czyste powietrze przez cały rok. Od estetycznych rozwiązań do mieszkań i domów jednorodzinnych, po zaawansowane systemy przemysłowe VRF dla dużych obiektów komercyjnych."
				images={[heroSlide1, heroSlide2]}
			/>

			<section className="airconditioning_section airconditioning_section_light">
				<div className="airconditioning_container airconditioning_split">
					<div className="airconditioning_image_box">
						<div className="airconditioning_mini_slider">
							{homeSlides.map((img, index) => (
								<img
									key={index}
									src={img}
									onClick={() => openLightbox(homeSlides, index)}
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
							oczyszczają powietrze.
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
						<div className="airconditioning_mini_slider">
							{vrfSlides.map((img, index) => (
								<img
									key={index}
									src={img}
									onClick={() => openLightbox(vrfSlides, index)}
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
							Zaprojektowana dla wymagających przestrzeni: biurowców, hoteli i
							hal. Systemy VRF to potężna wydajność i precyzyjne sterowanie.
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

			<section className="airconditioning_section airconditioning_section_light">
				<div className="airconditioning_container">
					<h2 className="airconditioning_center_title">
						Główne zalety naszych systemów
					</h2>
					<div className="airconditioning_benefits_grid">
						<div className="airconditioning_benefit_card">
							<Home size={40} className="airconditioning_benefit_icon" />
							<h3>Wygoda w Twoim domu</h3>
							<p>
								Zyskujesz nie tylko ulgę i chłód w upalne dni, ale i niezwykle
								tanie źródło ciepła w okresach przejściowych. Nasze systemy
								skutecznie filtrują zanieczyszczenia, kurz i alergeny,
								gwarantując zdrowe, rześkie powietrze dla Ciebie i Twojej
								rodziny, zachowując przy tym estetyczny wygląd wnętrza.
							</p>
						</div>
						<div className="airconditioning_benefit_card">
							<Factory size={40} className="airconditioning_benefit_icon" />
							<h3>Wydajność dla biznesu</h3>
							<p>
								Gwarantujemy niezawodność przy pracy ciągłej i potężną
								oszczędność energii elektrycznej. Otrzymujesz system pozwalający
								na niezależne sterowanie temperaturą w dziesiątkach pomieszczeń
								jednocześnie, wykorzystując do tego zaledwie jeden lub kilka
								zintegrowanych agregatów zewnętrznych.
							</p>
						</div>
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
								Dopasowujemy moc i rodzaj urządzenia precyzyjnie do kubatury
								budynku.
							</p>
						</div>
						<div className="airconditioning_standard_card">
							<Wrench className="airconditioning_standard_icon" size={48} />
							<h3>Uprawnienia F-Gazy</h3>
							<p>Nasi instalatorzy posiadają wszystkie wymagane certyfikaty.</p>
						</div>
						<div className="airconditioning_standard_card">
							<Settings className="airconditioning_standard_icon" size={48} />
							<h3>Estetyka i czystość</h3>
							<p>Montaż przeprowadzamy z dbałością o detale i porządek.</p>
						</div>
						<div className="airconditioning_standard_card">
							<Wind className="airconditioning_standard_icon" size={48} />
							<h3>Autoryzowany serwis</h3>
							<p>Zapewniamy regularne przeglądy i czyszczenie instalacji.</p>
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
						Nasz zespół doradców technicznych darmowo dobierze odpowiednie
						urządzenia i przygotuje wycenę skrojoną pod Twoje potrzeby.
					</p>
					<Button to="/kontakt">Skontaktuj się z nami</Button>
				</div>
			</section>

			{/* --- LIGHTBOX MODAL Z NAWIGACJĄ --- */}
			{lightboxData.isOpen && (
				<div className="airconditioning_lightbox" onClick={closeLightbox}>
					<button
						className="airconditioning_lightbox_close"
						onClick={closeLightbox}>
						<X size={32} />
					</button>

					<button
						className="airconditioning_lightbox_nav left"
						onClick={prevLightboxImg}>
						<ChevronLeft size={36} />
					</button>

					<img
						src={lightboxData.images[lightboxData.currentIndex]}
						alt="Powiększenie"
						className="airconditioning_lightbox_img"
						onClick={(e) => e.stopPropagation()}
					/>

					<button
						className="airconditioning_lightbox_nav right"
						onClick={nextLightboxImg}>
						<ChevronRight size={36} />
					</button>
				</div>
			)}
		</div>
	);
};

export default AirConditioning;
