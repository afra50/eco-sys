import React, { useState, useEffect } from "react";
import {
	Check,
	ShieldCheck,
	Zap,
	Battery,
	ArrowRight,
	Sun,
	Home,
	Activity,
	Lightbulb,
	X,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import "../styles/pages/photovoltaics.scss";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";

// --- IMPORTY ZDJĘĆ BAZOWYCH ---
import heroImage from "../images/fotoprzem7.webp";
import fotowDach from "../images/fotow-dach.webp";
import magazynImg from "../images/magazyn.webp";

// --- IMPORTY DO SLIDERA: DOM ---
import fotoDom1 from "../images/fotodom1.webp";
import fotoDom2 from "../images/fotodom2.webp";
import fotoDom3 from "../images/fotodom3.webp";
import fotoDom4 from "../images/fotodom4.webp";
import fotoDom5 from "../images/fotodom5.webp";
import fotoDom6 from "../images/fotodom6.webp";

// --- IMPORTY DO SLIDERA: PRZEMYSŁ ---
import fotoFarma1 from "../images/fotoprzem1.webp";
import fotoFarma2 from "../images/fotoprzem2.webp";
import fotoFarma3 from "../images/fotoprzem3.webp";
import fotoFarma4 from "../images/fotoprzem4.webp";
import fotoFarma5 from "../images/fotoprzem5.webp";
import fotoFarma6 from "../images/fotoprzem6.webp";
import fotoFarma7 from "../images/fotoprzem7.webp";
import fotoFarma8 from "../images/fotoprzem8.webp";

const Photovoltaics = () => {
	// --- LOGIKA SLIDERA: DOM ---
	const [currentHomeSlide, setCurrentHomeSlide] = useState(0);
	const homeSlides = [
		fotoDom1,
		fotoDom2,
		fotoDom3,
		fotoDom4,
		fotoDom5,
		fotoDom6,
	];

	useEffect(() => {
		const homeTimer = setInterval(() => {
			setCurrentHomeSlide((prev) =>
				prev === homeSlides.length - 1 ? 0 : prev + 1,
			);
		}, 4000);
		return () => clearInterval(homeTimer);
	}, [homeSlides.length]);

	// --- LOGIKA SLIDERA: PRZEMYSŁ ---
	const [currentFarmSlide, setCurrentFarmSlide] = useState(0);
	const farmSlides = [
		fotoFarma1,
		fotoFarma2,
		fotoFarma3,
		fotoFarma4,
		fotoFarma5,
		fotoFarma6,
		fotoFarma7,
		fotoFarma8,
	];

	useEffect(() => {
		const farmTimer = setInterval(() => {
			setCurrentFarmSlide((prev) =>
				prev === farmSlides.length - 1 ? 0 : prev + 1,
			);
		}, 4000);
		return () => clearInterval(farmTimer);
	}, [farmSlides.length]);

	// --- LOGIKA LIGHTBOXA ---
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

	const homeAdvantages = [
		"Zmniejszenie lub eliminacja rachunków za prąd",
		"Wzrost wartości nieruchomości (dom 'smart')",
		"100% ekologiczna i darmowa energia",
		"Niezależność od ciągłego wzrostu cen prądu",
		"Kompleksowe załatwienie formalności z OSD",
		"Możliwość rozbudowy o magazyn energii",
	];

	const farmAdvantages = [
		"Optymalizacja kosztów operacyjnych przedsiębiorstwa",
		"Stabilizacja cen energii w długim terminie",
		"Poprawa wizerunku firmy (wizerunek proekologiczny)",
		"Możliwość odsprzedaży nadwyżek wyprodukowanej energii",
		"Wysoka stopa zwrotu z inwestycji",
		"Pełne wsparcie projektowe, montażowe i przyłączeniowe",
	];

	return (
		<div className="photovoltaics">
			{/* --- HERO --- */}
			<PageHero
				title="Fotowoltaika"
				subtitle="Energia słoneczna prosto do Twojego domu"
				description="Zacznij produkować własny prąd ze słońca. Oferujemy kompleksowe instalacje fotowoltaiczne dla domów oraz wielkoskalowe farmy dla przemysłu, gwarantujące niezależność i wymierne oszczędności."
				images={[heroImage]}
			/>

			{/* --- INTRO: DLACZEGO WARTO --- */}
			<section className="photovoltaics_intro">
				<div className="photovoltaics_container photovoltaics_intro_wrapper">
					<div className="photovoltaics_intro_text">
						<h2 className="photovoltaics_section_title">
							Dlaczego warto wybrać fotowoltaikę?
						</h2>
						<p className="photovoltaics_intro_desc">
							Instalacja PV to inwestycja, która zwraca się poprzez drastyczne
							obniżenie, a nawet całkowite wyeliminowanie rachunków za prąd. To
							innowacyjna technologia, która sprawia, że budynek staje się
							niezależny energetycznie, a produkcja prądu na własny użytek jest
							po prostu opłacalna i w 100% ekologiczna.
						</p>
					</div>
					<div className="photovoltaics_video">
						<img
							src={fotowDach}
							alt="Montaż paneli fotowoltaicznych"
							className="photovoltaics_video_iframe"
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>
			</section>

			{/* --- SEKCJA: JAK TO DZIAŁA (NIEBIESKI PASEK) --- */}
			<section className="photovoltaics_steps">
				<div className="photovoltaics_container">
					<div className="photovoltaics_steps_header">
						<h2>Jak to dokładnie działa?</h2>
						<p>
							Od promieni słonecznych do darmowego zasilania w Twoich gniazdkach
							– krok po kroku.
						</p>
					</div>

					<div className="photovoltaics_steps_grid">
						<div className="photovoltaics_steps_item">
							<Sun size={48} className="photovoltaics_steps_icon" />
							<h3>1. Pobór energii</h3>
							<p>
								Panele słoneczne zamontowane na dachu lub gruncie wychwytują
								światło słoneczne i zamieniają je na prąd stały (DC).
							</p>
						</div>

						<div className="photovoltaics_steps_item">
							<Activity size={48} className="photovoltaics_steps_icon" />
							<h3>2. Konwersja prądu</h3>
							<p>
								Sercem układu jest falownik (inwerter). Jego zadaniem jest
								zamiana prądu stałego z paneli na prąd zmienny (AC).
							</p>
						</div>

						<div className="photovoltaics_steps_item">
							<Home size={48} className="photovoltaics_steps_icon" />
							<h3>3. Bieżące zużycie</h3>
							<p>
								Wyprodukowany prąd od razu zasila urządzenia domowe, dając Ci
								realne, natychmiastowe oszczędności.
							</p>
						</div>

						<div className="photovoltaics_steps_item">
							<Battery size={48} className="photovoltaics_steps_icon" />
							<h3>4. Nadwyżki</h3>
							<p>
								Prąd, którego nie zużyjesz, trafia do sieci (do odbioru później)
								lub ładuje Twój domowy magazyn energii.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- FOTOWOLTAIKA DLA DOMU (SPLIT + SLIDER) --- */}
			<section className="photovoltaics_section">
				<div className="photovoltaics_container photovoltaics_split">
					<div className="photovoltaics_image_box">
						<div className="photovoltaics_mini_slider">
							{homeSlides.map((img, index) => (
								<img
									key={index}
									src={img}
									onClick={() => openLightbox(homeSlides, index)}
									alt={`Fotowoltaika domowa realizacja ${index + 1}`}
									className={`photovoltaics_mini_slide ${index === currentHomeSlide ? "active" : ""}`}
								/>
							))}
						</div>
					</div>
					<div className="photovoltaics_text_box">
						<h2 className="photovoltaics_section_title">
							Fotowoltaika dla domu
						</h2>
						<p className="photovoltaics_section_desc">
							Rozwiązania dopasowane do potrzeb gospodarstw domowych.
							Kompleksowo wykonujemy instalacje, podłączamy je do sieci i
							załatwiamy wszelkie formalności z Operatorem (np. wymianę licznika
							na dwukierunkowy).
						</p>
						<ul className="photovoltaics_list">
							{homeAdvantages.map((adv, i) => (
								<li key={i} className="photovoltaics_list_item">
									<Check size={20} className="photovoltaics_list_icon" />
									<span className="photovoltaics_list_text">{adv}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* --- DLA PRZEMYSŁU / FARMY PV (SPLIT REVERSE + SLIDER) --- */}
			<section className="photovoltaics_section photovoltaics_bg_light">
				<div className="photovoltaics_container photovoltaics_split_reverse">
					<div className="photovoltaics_image_box">
						<div className="photovoltaics_mini_slider">
							{farmSlides.map((img, index) => (
								<img
									key={index}
									src={img}
									onClick={() => openLightbox(farmSlides, index)}
									alt={`Fotowoltaika dla przemysłu realizacja ${index + 1}`}
									className={`photovoltaics_mini_slide ${index === currentFarmSlide ? "active" : ""}`}
								/>
							))}
						</div>
					</div>
					<div className="photovoltaics_text_box">
						<h2 className="photovoltaics_section_title">
							Dla Przemysłu / Farmy PV
						</h2>
						<p className="photovoltaics_section_desc">
							Zaawansowane systemy dla biznesu. Budujemy instalacje
							wielkoskalowe na gruntach i dachach hal produkcyjnych,
							zabezpieczając firmy przed potężnymi wahaniami cen na rynku
							energii.
						</p>
						<ul className="photovoltaics_list">
							{farmAdvantages.map((adv, i) => (
								<li key={i} className="photovoltaics_list_item">
									<Check size={20} className="photovoltaics_list_icon" />
									<span className="photovoltaics_list_text">{adv}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* --- MAGAZYNY ENERGII --- */}
			<section className="photovoltaics_intro">
				<div className="photovoltaics_container photovoltaics_split">
					<div className="photovoltaics_intro_text">
						<h2 className="photovoltaics_section_title">
							Magazyny Energii – Twoja niezależność
						</h2>
						<p className="photovoltaics_intro_desc">
							Zamiast oddawać darmowy prąd do sieci po stawkach rynkowych,
							zatrzymaj go u siebie! Magazyny energii pozwalają na potężne
							zwiększenie autokonsumpcji – ładują się w ciągu dnia, by zasilać
							Twój dom po zmroku.
						</p>
						<p className="photovoltaics_intro_desc">
							To również niezastąpione zabezpieczenie na wypadek przerw w
							dostawach prądu (funkcja EPS). Awaria na liniach energetycznych
							nie musi już oznaczać braku światła i wyłączonej lodówki.
						</p>
					</div>
					<div className="photovoltaics_video">
						<img
							src={magazynImg}
							alt="Montaż magazynu energii"
							className="photovoltaics_video_iframe"
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>
			</section>

			{/* --- WĄSKI PASEK (USPs) --- */}
			<section className="photovoltaics_banner">
				<div className="photovoltaics_container photovoltaics_banner_wrapper">
					<div className="photovoltaics_banner_item">
						<ShieldCheck size={36} className="photovoltaics_banner_icon" />
						<div className="photovoltaics_banner_text">
							<h4>Długa Gwarancja</h4>
							<p>Nawet do 25 lat gwarancji na wydajność paneli.</p>
						</div>
					</div>
					<div className="photovoltaics_banner_item">
						<Zap size={36} className="photovoltaics_banner_icon" />
						<div className="photovoltaics_banner_text">
							<h4>Pełne Bezpieczeństwo</h4>
							<p>Wysokiej klasy zabezpieczenia PPOŻ w standardzie.</p>
						</div>
					</div>
					<div className="photovoltaics_banner_item">
						<Battery size={36} className="photovoltaics_banner_icon" />
						<div className="photovoltaics_banner_text">
							<h4>Gotowi na magazyny</h4>
							<p>Instalujemy nowoczesne inwertery hybrydowe.</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- CTA + CZY WIESZ ŻE --- */}
			<section className="photovoltaics_cta">
				<div className="photovoltaics_container photovoltaics_cta_wrapper">
					<h2 className="photovoltaics_cta_title">
						Chcesz produkować własny prąd?
					</h2>
					<p className="photovoltaics_cta_desc">
						Umów się na bezpłatny audyt. Sprawdzimy warunki na Twojej posesji,
						doradzimy najlepsze rozwiązania technologiczne i przygotujemy
						dokładną kalkulację oszczędności.
					</p>

					<Button to="/kontakt">
						Zleć darmową wycenę{" "}
						<ArrowRight size={18} style={{ marginLeft: "8px" }} />
					</Button>

					{/* BLOK CROSS-SELLINGOWY */}
					<div className="photovoltaics_didyouknow">
						<div className="photovoltaics_didyouknow_header">
							<Lightbulb size={28} className="photovoltaics_didyouknow_icon" />
							<h3>Czy wiedziałeś, że...?</h3>
						</div>
						<p>
							Najlepsze efekty w użytku domowym osiągniesz, łącząc fotowoltaikę
							z nowoczesną pompą ciepła. Wykorzystaj darmowy prąd do darmowego
							ogrzewania całego domu.
						</p>
						<a href="/pompy-ciepla" className="photovoltaics_didyouknow_link">
							Sprawdź ofertę pomp ciepła &rarr;
						</a>
					</div>
				</div>
			</section>

			{/* --- LIGHTBOX MODAL Z NAWIGACJĄ --- */}
			{lightboxData.isOpen && (
				<div className="photovoltaics_lightbox" onClick={closeLightbox}>
					<button
						className="photovoltaics_lightbox_close"
						onClick={closeLightbox}>
						<X size={32} />
					</button>

					<button
						className="photovoltaics_lightbox_nav left"
						onClick={prevLightboxImg}>
						<ChevronLeft size={36} />
					</button>

					<img
						src={lightboxData.images[lightboxData.currentIndex]}
						alt="Powiększenie"
						className="photovoltaics_lightbox_img"
						onClick={(e) => e.stopPropagation()}
					/>

					<button
						className="photovoltaics_lightbox_nav right"
						onClick={nextLightboxImg}>
						<ChevronRight size={36} />
					</button>
				</div>
			)}
		</div>
	);
};

export default Photovoltaics;
