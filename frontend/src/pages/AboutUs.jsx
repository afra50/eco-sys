import React, { useState } from "react";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import "../styles/pages/about_us.scss";

// Docelowe importy (odkomentuj, gdy wrzucisz pliki do folderu images):
import heroImage from "../images/onas.webp";
import img1 from "../images/about1.webp";
import img2 from "../images/about2.webp";
import doc1 from "../images/about7.webp";
import doc2 from "../images/about6.webp";
import cert1 from "../images/about5.webp";
import cert2 from "../images/about8.webp";
import cert3 from "../images/about9.webp";
import cert4 from "../images/about10.webp";
import cert5 from "../images/about11.webp";
import cert6 from "../images/about12.webp";

const AboutUs = () => {
	// Stan do obsługi powiększania zdjęć (Lightbox)
	const [lightboxImage, setLightboxImage] = useState(null);

	return (
		<main className="about_us">
			<PageHero
				title="O nas"
				subtitle="Eksperci od odnawialnych źródeł energii"
				description="Od lat dostarczamy nowoczesne rozwiązania z zakresu fotowoltaiki, pomp ciepła i klimatyzacji, dbając o Twój komfort, portfel i środowisko naturalne."
				images={[heroImage]}
			/>

			{/* SEKCJA 1: Nachodzący Box (Szerokie zdjęcie, wyrównany tekst) */}
			<section className="about_us_block about_us_block_hero">
				<div className="about_us_image">
					<img src={img1} alt="Zespół ECO-SYS" />
				</div>
				<div className="about_us_contener about_us_overlap_box">
					<div className="about_us_overlap_content">
						<span className="about_us_label">Nasza misja</span>
						<h2 className="about_us_subtitle">
							Energia, która pracuje <em>dla Ciebie</em>
						</h2>
						<p className="about_us_text">
							W ECO-SYS od lat pomagamy naszym klientom obniżać rachunki za prąd
							i ogrzewanie, inwestując w sprawdzone i ekologiczne rozwiązania.
							Stawiamy na jakość, precyzję i Twoje bezpieczeństwo.
						</p>
					</div>
				</div>
			</section>

			{/* SEKCJA 2: Plakietka (Standardowa szerokość) */}
			<section className="about_us_block">
				<div className="about_us_image about_us_image_with_badge">
					<div className="about_us_badge">
						<span className="about_us_badge_number">Certyfikowany</span>
						<span className="about_us_badge_text">Montaż</span>
					</div>
					<img src={img2} alt="Montaż instalacji" />
				</div>
				<div className="about_us_contener">
					<span className="about_us_label">Dlaczego my?</span>
					<h2 className="about_us_subtitle">Od doradztwa do własnego prądu</h2>
					<p className="about_us_text" style={{ marginBottom: "1.5rem" }}>
						Nie jesteśmy tylko sprzedawcami. Nasz zespół składa się z inżynierów
						i wykwalifikowanych instalatorów z uprawnieniami UDT.
					</p>
					<p className="about_us_text">
						Zapewniamy kompleksową obsługę: od bezpłatnego audytu, przez
						profesjonalny projekt, szybki montaż, aż po pomoc w uzyskaniu
						dofinansowania. Wszystko po to, abyś mógł bezstresowo cieszyć się
						zieloną energią.
					</p>
				</div>
			</section>

			{/* SEKCJA 3: Trzy kolumny z tłem (Wyśrodkowane i rozciągnięte) */}
			<section className="about_us_features">
				<div className="about_us_features_grid">
					<div className="about_us_feature_item">
						<h3 className="about_us_feature_title">Gwarancja Jakości</h3>
						<p className="about_us_feature_desc">
							Pracujemy wyłącznie na podzespołach renomowanych producentów, co
							zapewnia długowieczność i bezawaryjność instalacji.
						</p>
					</div>
					<div className="about_us_feature_item">
						<h3 className="about_us_feature_title">Własne Ekipy</h3>
						<p className="about_us_feature_desc">
							Nie zlecamy montażu podwykonawcom. Nasi doświadczeni pracownicy to
							gwarancja precyzji i terminowości.
						</p>
					</div>
					<div className="about_us_feature_item">
						<h3 className="about_us_feature_title">Serwis 24/7</h3>
						<p className="about_us_feature_desc">
							Nawet po uruchomieniu instalacji nie zostawiamy Cię samego.
							Zapewniamy szybki serwis i wsparcie techniczne.
						</p>
					</div>
				</div>
			</section>

			{/* SEKCJA 4: Wiedza i Kwalifikacje */}
			<section className="about_us_qualifications">
				<div className="about_us_qualifications_container">
					{/* Lewa kolumna: Prace naukowe */}
					<div className="about_us_qualifications_col">
						<h3 className="about_us_qualifications_title">Prace naukowe</h3>
						<p className="about_us_text">
							Działanie na korzyść klientów poparte jest wiedzą i publikacjami
							naukowymi. W swoim zapleczu posiadamy dwie interesujące prace, z
							których jasno wynika, że system pompa ciepła + fotowoltaika jest
							opłacalny. Z wielką chęcią zaprezentujemy Państwu wyniki badań
							oraz pomożemy w doborze odpowiedniego systemu specjalnie dla
							Państwa.
						</p>
						<div className="about_us_qualifications_docs">
							<img
								src={doc1}
								alt="Okładka pracy inżynierskiej"
								onClick={() => setLightboxImage(doc1)}
							/>
							<img
								src={doc2}
								alt="Okładka pracy magisterskiej"
								onClick={() => setLightboxImage(doc2)}
							/>
						</div>
					</div>

					{/* Prawa kolumna: Prowadzenie projektów */}
					<div className="about_us_qualifications_col">
						<h3 className="about_us_qualifications_title">
							Prowadzenie projektów
						</h3>
						<p className="about_us_text">
							Nasza firma posiada wiedzę i uprawnienia z dziedziny zarządzania
							projektami według międzynarodowej metodyki Ten Step. Dzięki tej
							umiejętności możemy stworzyć definicje projektu państwa instalacji
							i z sukcesem ją poprowadzić, a Państwo otrzymają dokument z całym
							przebiegiem projektu.
						</p>
						<div className="about_us_qualifications_docs">
							<img
								src={cert1}
								alt="Certyfikat Ten Step"
								onClick={() => setLightboxImage(cert1)}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* SEKCJA 5: Certyfikaty autoryzacyjne (Dodane) */}
			<section className="about_us_certificates">
				<h2 className="about_us_certificates_title">Nasze autoryzacje</h2>
				<p className="about_us_certificates_text">
					Nasza firma posiada świadectwa autoryzowanego instalatora czołowych
					producentów urządzeń na rynku. Regularnie podnosimy nasze kwalifikacje
					i przechodzimy rygorystyczne szkolenia techniczne, aby gwarantować
					montaż zgodny z najwyższymi standardami branżowymi, co bezpośrednio
					przekłada się na bezpieczeństwo i bezawaryjność Twojej instalacji.
				</p>
				<div className="about_us_certificates_docs">
					<img
						src={cert2}
						alt="Certyfikat Autoryzacyjny 1"
						onClick={() => setLightboxImage(cert2)}
					/>
					<img
						src={cert3}
						alt="Certyfikat Autoryzacyjny 2"
						onClick={() => setLightboxImage(cert3)}
					/>
					<img
						src={cert4}
						alt="Certyfikat Autoryzacyjny 3"
						onClick={() => setLightboxImage(cert4)}
					/>
					<img
						src={cert5}
						alt="Certyfikat Autoryzacyjny 4"
						onClick={() => setLightboxImage(cert5)}
					/>
					<img
						src={cert6}
						alt="Certyfikat Autoryzacyjny 5"
						onClick={() => setLightboxImage(cert6)}
					/>
				</div>
			</section>

			{/* SEKCJA 6: Wezwanie do akcji */}
			<section className="about_us_cta">
				<h2 className="about_us_cta_title">
					Zacznij oszczędzać na rachunkach już dziś
				</h2>
				<Button
					variant="primary"
					onClick={() => (window.location.href = "/kontakt")}>
					UMÓW DARMOWY AUDYT
				</Button>
			</section>

			{/* LIGHTBOX (Zaciemnione tło i powiększone zdjęcie) */}
			{lightboxImage && (
				<div
					className="about_us_lightbox"
					onClick={() => setLightboxImage(null)}>
					<div
						className="about_us_lightbox_content"
						onClick={(e) => e.stopPropagation()}>
						<button
							className="about_us_lightbox_close"
							onClick={() => setLightboxImage(null)}>
							&#10005; {/* Znak "X" */}
						</button>
						<img src={lightboxImage} alt="Powiększony dokument" />
					</div>
				</div>
			)}
		</main>
	);
};

export default AboutUs;
