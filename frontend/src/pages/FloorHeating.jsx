import React, { useState, useEffect } from "react";
import {
	Check,
	ShieldCheck,
	Thermometer,
	Wrench,
	ArrowRight,
	Droplets,
	Zap,
	X,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import "../styles/pages/floorheating.scss";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";

// Import tylko do baneru
import heroImage from "../images/podlogowe.webp";

// Zdjęcia z realizacji
import rurkiImage from "../images/podl1.webp";
import sterowanieImage from "../images/podl2.webp";

// NOWE IMPORTY (Slider Rodzaje Ogrzewania) - Upewnij się, że masz te zdjęcia lub zmień nazwy!
import wodne1 from "../images/wodne1.webp";
import wodne2 from "../images/wodne2.webp";
import wodne3 from "../images/wodne3.webp";
import elektryczne1 from "../images/elektryczne1.webp";
import elektryczne2 from "../images/elektryczne2.webp";
import elektryczne3 from "../images/elektryczne3.webp";

const FloorHeating = () => {
	// --- LOGIKA SLIDERA (Rodzaje ogrzewania) ---
	const [currentSlide, setCurrentSlide] = useState(0);
	const typesImages = [
		wodne1,
		elektryczne1,
		wodne2,
		elektryczne2,
		wodne3,
		elektryczne3,
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) =>
				prev === typesImages.length - 1 ? 0 : prev + 1,
			);
		}, 4000);
		return () => clearInterval(timer);
	}, [typesImages.length]);

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

			{/* --- NOWA SEKCJA: RODZAJE OGRZEWANIA (SPLIT REVERSE Z SLIDEREM) --- */}
			<section className="floorheating_types">
				<div className="floorheating_container floorheating_control_wrapper">
					<div className="floorheating_split_image_wrapper">
						<div className="floorheating_mini_slider">
							{typesImages.map((img, index) => (
								<img
									key={index}
									src={img}
									onClick={() => openLightbox(typesImages, index)}
									alt={`Rodzaj ogrzewania podłogowego ${index + 1}`}
									className={`floorheating_mini_slide ${index === currentSlide ? "active" : ""}`}
								/>
							))}
						</div>
					</div>
					<div className="floorheating_intro_text floorheating_control_text">
						<h2 className="floorheating_section_title">
							Wodne czy Elektryczne?
						</h2>
						<p className="floorheating_intro_desc">
							Wybór odpowiedniego systemu ogrzewania podłogowego zależy od
							specyfiki budynku i Twoich potrzeb. Oferujemy oba rozwiązania,
							gwarantując najwyższą jakość montażu.
						</p>

						<div className="floorheating_type_block">
							<h3 className="floorheating_type_subtitle">
								<Droplets className="floorheating_type_icon" size={24} />
								Podłogówka Wodna (PEX)
							</h3>
							<p className="floorheating_intro_desc">
								Klasyczny, najbardziej opłacalny w eksploatacji system
								dedykowany dla całych budynków. Grube rury zasilane z pompy
								ciepła zalewane są grubą warstwą wylewki, co tworzy potężny
								akumulator ciepła dla Twojego domu.
							</p>
						</div>

						<div className="floorheating_type_block">
							<h3 className="floorheating_type_subtitle">
								<Zap className="floorheating_type_icon" size={24} />
								Systemy Elektryczne (Maty)
							</h3>
							<p className="floorheating_intro_desc">
								Rozwiązanie premium, idealne przy remontach łazienek. Cienkie
								kable grzewcze montowane są w specjalnych, czerwonych matach
								kompensacyjnych (np. Schlüter-DITRA-HEAT). Mata przejmuje
								naprężenia podłoża chroniąc płytki przed pękaniem, a system
								nagrzewa się błyskawicznie.
							</p>
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

			{/* --- LIGHTBOX MODAL Z NAWIGACJĄ --- */}
			{lightboxData.isOpen && (
				<div className="floorheating_lightbox" onClick={closeLightbox}>
					<button
						className="floorheating_lightbox_close"
						onClick={closeLightbox}>
						<X size={32} />
					</button>

					<button
						className="floorheating_lightbox_nav left"
						onClick={prevLightboxImg}>
						<ChevronLeft size={36} />
					</button>

					<img
						src={lightboxData.images[lightboxData.currentIndex]}
						alt="Powiększenie"
						className="floorheating_lightbox_img"
						onClick={(e) => e.stopPropagation()}
					/>

					<button
						className="floorheating_lightbox_nav right"
						onClick={nextLightboxImg}>
						<ChevronRight size={36} />
					</button>
				</div>
			)}
		</div>
	);
};

export default FloorHeating;
