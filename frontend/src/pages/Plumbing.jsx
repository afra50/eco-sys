import React, { useState, useEffect } from "react";
import {
	Droplet,
	Waves,
	Wrench,
	ShieldCheck,
	Check,
	GitBranch,
	ArrowRight,
	X,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import "../styles/pages/plumbing.scss";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";

// --- IMPORTY ZDJĘĆ ---
import heroImage from "../images/wodkan.webp";
import introImg from "../images/wodkan1.webp";

// --- IMPORTY TWOICH ZDJĘĆ (SLIDERY) ---
import zmiekczacz1 from "../images/zmiekczacz1.webp";
import zmiekczacz2 from "../images/zmiekczacz2.webp";
import industrial1 from "../images/przemyslowe1.webp";
import industrial2 from "../images/przemyslowe2.webp";
import industrial3 from "../images/przemyslowe3.webp";
import industrial4 from "../images/przemyslowe4.webp";

const Plumbing = () => {
	const [softenerIndex, setSoftenerIndex] = useState(0);
	const [indusIndex, setIndusIndex] = useState(0);
	const [lightboxData, setLightboxData] = useState({
		isOpen: false,
		images: [],
		currentIndex: 0,
	});

	const softenerImages = [zmiekczacz1, zmiekczacz2];
	const industrialImages = [industrial1, industrial2, industrial3, industrial4];

	// --- AUTOMATYCZNE SLIDERY ---
	useEffect(() => {
		const timer = setInterval(() => {
			setSoftenerIndex((prev) =>
				prev === softenerImages.length - 1 ? 0 : prev + 1,
			);
		}, 4000);
		return () => clearInterval(timer);
	}, [softenerImages.length]);

	useEffect(() => {
		const timer = setInterval(() => {
			setIndusIndex((prev) =>
				prev === industrialImages.length - 1 ? 0 : prev + 1,
			);
		}, 4500);
		return () => clearInterval(timer);
	}, [industrialImages.length]);

	// --- LOGIKA LIGHTBOXA ---
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

	return (
		<div className="plumbing">
			{/* --- HERO --- */}
			<PageHero
				title="Instalacje Wod-Kan"
				subtitle="Bezpieczeństwo i trwałość na dekady"
				description="Zajmujemy się kompleksowym wykonawstwem instalacji wodno-kanalizacyjnych. Od rozprowadzenia wody wewnątrz budynku, po profesjonalne odprowadzanie ścieków i przyłącza zewnętrzne."
				images={[heroImage]}
			/>

			{/* --- INTRO --- */}
			<section className="plumbing_section">
				<div className="plumbing_container plumbing_split">
					<div className="plumbing_text_box">
						<h2 className="plumbing_section_title">
							Niezawodność ukryta w ścianach
						</h2>
						<p className="plumbing_section_desc">
							Instalacja wodno-kanalizacyjna to jeden z najważniejszych
							elementów każdego budynku. Pracujemy na materiałach najwyższej
							jakości, które charakteryzują się odpornością na ciśnienie i
							korozję.
						</p>
						<ul className="plumbing_list">
							<li className="plumbing_item">
								<Check size={24} className="plumbing_icon" />
								<span className="plumbing_list_text">
									Materiały zapobiegające zarastaniu rur kamieniem.
								</span>
							</li>
							<li className="plumbing_item">
								<Check size={24} className="plumbing_icon" />
								<span className="plumbing_list_text">
									Szczelność potwierdzona próbami ciśnieniowymi.
								</span>
							</li>
						</ul>
					</div>
					<div className="plumbing_image_box">
						<img
							src={introImg}
							alt="Instalacje"
							className="plumbing_fluid_image"
						/>
					</div>
				</div>
			</section>

			{/* --- KARTY --- */}
			<section className="plumbing_section plumbing_section_light">
				<div className="plumbing_container">
					<h2 className="plumbing_center_title">Nasz zakres prac</h2>
					<div className="plumbing_cards_grid">
						<div className="plumbing_card">
							<Droplet size={40} className="plumbing_card_icon" />
							<h3 className="plumbing_card_title">Instalacje Wodociągowe</h3>
							<p className="plumbing_card_desc">
								Rozprowadzamy instalacje zimnej i ciepłej wody użytkowej, dbając
								o ciśnienie w każdym punkcie poboru.
							</p>
						</div>
						<div className="plumbing_card">
							<Waves size={40} className="plumbing_card_icon" />
							<h3 className="plumbing_card_title">Kanalizacja Wewnętrzna</h3>
							<p className="plumbing_card_desc">
								Montujemy piony i poziomy, dbając o właściwe spadki i systemy
								napowietrzające.
							</p>
						</div>
						<div className="plumbing_card">
							<GitBranch size={40} className="plumbing_card_icon" />
							<h3 className="plumbing_card_title">Przyłącza Zewnętrzne</h3>
							<p className="plumbing_card_desc">
								Łączymy sieć budynku z infrastrukturą miejską lub instalujemy
								szamba ekologiczne.
							</p>
						</div>
						<div className="plumbing_card">
							<Wrench size={40} className="plumbing_card_icon" />
							<h3 className="plumbing_card_title">Modernizacje i Wymiany</h3>
							<p className="plumbing_card_desc">
								Wymieniamy stare rury na nowoczesne systemy, usuwamy
								nieszczelności i optymalizujemy układy.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- SLIDER 1: ZMIĘKCZACZE --- */}
			<section className="plumbing_section">
				{/* --- LEWITUJĄCY BLOK --- */}
				<div className="plumbing_floating_wrapper">
					<div className="plumbing_floating_box">
						<Droplet size={36} className="plumbing_floating_icon" />
						<h3 className="plumbing_floating_title">
							Woda to żywioł. My nad nim panujemy.
						</h3>
						<p className="plumbing_floating_desc">
							Od precyzyjnych instalacji w domach jednorodzinnych po potężne,
							skomplikowane układy na halach produkcyjnych.
						</p>
					</div>
				</div>

				<div className="plumbing_container plumbing_split">
					<div className="plumbing_text_box">
						<h2 className="plumbing_section_title">
							Twarda woda to już nie problem
						</h2>
						<p className="plumbing_section_desc">
							Zmagasz się z osadem z kamienia? Twarda woda drastycznie skraca
							żywotność Twojej pompy ciepła i kotła. Rozwiązaniem są nowoczesne{" "}
							<strong>stacje uzdatniania</strong>.
						</p>
						<Button to="/kontakt" variant="primary">
							Zapytaj o zmiękczacz wody
						</Button>
					</div>

					<div className="plumbing_image_box">
						<div className="plumbing_mini_slider">
							<div className="plumbing_mini_slider_track">
								{softenerImages.map((img, i) => (
									<img
										key={i}
										src={img}
										onClick={() => openLightbox(softenerImages, i)}
										className={`plumbing_mini_slider_img ${i === softenerIndex ? "active" : ""}`}
										alt="Zmiękczacz wody"
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- SLIDER 2: REALIZACJE --- */}
			<section className="plumbing_section plumbing_section_light">
				<div className="plumbing_container plumbing_split plumbing_split_reverse">
					<div className="plumbing_text_box">
						<h2 className="plumbing_section_title">
							Zaufanie poparte realizacjami
						</h2>
						<p className="plumbing_section_desc">
							Obsługujemy inwestycje każdego formatu. Z taką samą precyzją
							podchodzimy do montażu rur w domu jednorodzinnym, jak i do
							rozbudowanych systemów na halach produkcyjnych i w magazynach.
						</p>
						<p className="plumbing_section_desc">
							Bez względu na skalę projektu, priorytetem jest dla nas czystość
							pracy, zgodność ze sztuką budowlaną i rygorystyczne trzymanie się
							założonych terminów.
						</p>
						<Button
							to="/kontakt"
							variant="primary"
							style={{ marginTop: "1rem" }}>
							Skontaktuj się z nami{" "}
							<ArrowRight size={18} style={{ marginLeft: "8px" }} />
						</Button>
					</div>

					<div className="plumbing_image_box">
						<div className="plumbing_mini_slider">
							<div className="plumbing_mini_slider_track">
								{industrialImages.map((img, i) => (
									<img
										key={i}
										src={img}
										onClick={() => openLightbox(industrialImages, i)}
										className={`plumbing_mini_slider_img ${i === indusIndex ? "active" : ""}`}
										alt="Nasze realizacje"
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- LIGHTBOX MODAL --- */}
			{lightboxData.isOpen && (
				<div className="plumbing_lightbox" onClick={closeLightbox}>
					<button className="plumbing_lightbox_close" onClick={closeLightbox}>
						<X size={32} />
					</button>

					<button
						className="plumbing_lightbox_nav left"
						onClick={prevLightboxImg}>
						<ChevronLeft size={36} />
					</button>

					<img
						src={lightboxData.images[lightboxData.currentIndex]}
						alt="Powiększenie"
						className="plumbing_lightbox_img"
						onClick={(e) => e.stopPropagation()}
					/>

					<button
						className="plumbing_lightbox_nav right"
						onClick={nextLightboxImg}>
						<ChevronRight size={36} />
					</button>
				</div>
			)}
		</div>
	);
};

export default Plumbing;
