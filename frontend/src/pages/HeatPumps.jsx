import React, { useState } from "react";
import {
	Check,
	PiggyBank,
	Award,
	Wrench,
	ShieldCheck,
	Lightbulb,
	ArrowRight,
	ChevronDown,
} from "lucide-react";
import "../styles/pages/heatpumps.scss";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";

// --- IMPORTY ZDJĘĆ Z FOLDERU SRC ---
import heroImage from "../images/pompa-hero.webp";
import pompaPowietrznaImg from "../images/pompa-powietrzna.jpg";
import pompaGruntowaImg from "../images/pompa-gruntowa.jpg";

// Jak będziesz miał logotypy, odkomentuj to:
import logo1 from "../images/logo-dietrich.webp";
import logo2 from "../images/logo-junkersbosh.webp";
import logo3 from "../images/logo-nibe.webp";
import logo4 from "../images/logo-saunier.webp";
import logo5 from "../images/logo-stiebel.webp";
import logo6 from "../images/logo-vaillant.webp";
import logo7 from "../images/logo-viteco.webp";
import logo8 from "../images/logo-wolf.webp";

const HeatPumps = () => {
	// Stan do obsługi akordeonu FAQ
	const [openFaq, setOpenFaq] = useState(null);

	const toggleFaq = (index) => {
		setOpenFaq(openFaq === index ? null : index);
	};

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

	const faqData = [
		{
			question: "Czy pompa ciepła ogrzeje dom przy -20°C?",
			answer:
				"Tak, nowoczesne pompy ciepła są zaprojektowane do pracy w trudnych warunkach zimowych i z powodzeniem ogrzewają budynki oraz wodę użytkową nawet przy temperaturach spadających do -25°C.",
		},
		{
			question: "Ile prądu zużywa pompa ciepła w ciągu roku?",
			answer:
				"Zależy to od powierzchni domu i jakości jego izolacji, ale średnio dla domu 150 m² jest to około 3000-4500 kWh rocznie. W połączeniu z fotowoltaiką koszt ten można zredukować niemal do zera.",
		},
		{
			question: "Czy muszę mieć ogrzewanie podłogowe?",
			answer:
				"Nie jest to wymóg konieczny. Pompy ciepła (szczególnie modele wysokotemperaturowe) doskonale współpracują również z tradycyjnymi grzejnikami. Ogrzewanie podłogowe pozwala jednak na osiągnięcie najwyższej możliwej efektywności.",
		},
		{
			question: "Czy zewnętrzna jednostka jest głośna?",
			answer:
				"Współczesne modele renomowanych producentów są niezwykle ciche. Poziom hałasu często nie przekracza 40-50 dB, co jest porównywalne z szumem nowoczesnej lodówki lub cichą rozmową.",
		},
		{
			question: "Ile czasu zajmuje montaż pompy ciepła?",
			answer:
				"Standardowy montaż powietrznej pompy ciepła wraz z podłączeniem do instalacji zajmuje zazwyczaj od 2 do 3 dni roboczych. Instalacje gruntowe wymagają więcej czasu ze względu na wykonanie odwiertów.",
		},
		{
			question: "Jak często należy serwisować urządzenie?",
			answer:
				"Zalecamy wykonywanie przeglądu serwisowego raz w roku, najlepiej przed rozpoczęciem sezonu grzewczego. Regularny serwis zapewnia długą żywotność, wysoką sprawność i jest warunkiem utrzymania gwarancji.",
		},
	];

	return (
		<div className="heatpumps">
			{/* 1. HERO */}
			<PageHero
				title="Pompy Ciepła"
				subtitle="Energia z Natury"
				description="Zmień sposób ogrzewania na bardziej wydajny i ekologiczny. Oferujemy profesjonalny dobór, montaż oraz serwis pomp ciepła, które zapewnią Ci komfort cieplny przez cały rok."
				images={[heroImage]}
			/>

			{/* 2. INTRO (KLIP YOUTUBE) */}
			<section className="heatpumps_intro">
				<div className="heatpumps_container heatpumps_intro_wrapper">
					<div className="heatpumps_intro_text">
						<h2 className="heatpumps_section_title">
							Jak działa pompa ciepła?
						</h2>
						<p className="heatpumps_intro_desc">
							Pompy ciepła są ekologicznym sposobem ogrzania domu. To odnawialne
							źródło energii pozwala nie tylko skutecznie dbać o środowisko i
							redukować emisję CO2, ale przede wszystkim obniżyć koszty
							ogrzewania nawet do 70%.
						</p>
					</div>
					<div className="heatpumps_video">
						<iframe
							src="https://www.youtube.com/embed/Hr_qrZSGEpA?si=UuBu5eLxO8EzBZWL"
							title="Jak działa pompa ciepła"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							className="heatpumps_video_iframe"></iframe>
					</div>
				</div>
			</section>

			{/* 3. ROZWINIĘCIE (RÓŻNICE POWIETRZNA VS GRUNTOWA) */}
			<section className="heatpumps_types">
				<div className="heatpumps_container heatpumps_types_grid">
					<div className="heatpumps_type_card">
						<h3 className="heatpumps_type_title">Powietrzna pompa ciepła</h3>
						<p className="heatpumps_type_desc">
							Jej działanie opiera się na poborze energii aerotermalnej
							zgromadzonej w powietrzu. Pracuje podobnie do klimatyzatora, z tą
							różnicą, że niezawodnie ogrzewa również wodę użytkową.
						</p>

						<ul className="heatpumps_type_list">
							{airAdvantages.map((adv, i) => (
								<li key={i} className="heatpumps_list_item">
									<Check size={20} className="heatpumps_list_icon" />
									<span className="heatpumps_list_text">{adv}</span>
								</li>
							))}
						</ul>
						<img
							src={pompaPowietrznaImg}
							alt="Schemat pompy powietrznej"
							className="heatpumps_type_image"
						/>
					</div>

					<div className="heatpumps_type_card">
						<h3 className="heatpumps_type_title">Gruntowa pompa ciepła</h3>
						<p className="heatpumps_type_desc">
							Wykorzystuje energię geotermalną. Dzięki wykonaniu odpowiednich
							odwiertów, urządzenie pobiera ciepło z gruntu, stając się
							całkowicie niezależnym od warunków na zewnątrz.
						</p>

						<ul className="heatpumps_type_list">
							{groundAdvantages.map((adv, i) => (
								<li key={i} className="heatpumps_list_item">
									<Check size={20} className="heatpumps_list_icon" />
									<span className="heatpumps_list_text">{adv}</span>
								</li>
							))}
						</ul>
						<img
							src={pompaGruntowaImg}
							alt="Schemat pompy gruntowej"
							className="heatpumps_type_image"
						/>
					</div>
				</div>
			</section>

			{/* 4. NIEBIESKI PASEK (ZALETY) */}
			<section className="heatpumps_banner">
				<div className="heatpumps_container heatpumps_banner_wrapper">
					<div className="heatpumps_banner_item">
						<PiggyBank size={36} className="heatpumps_banner_icon" />
						<div className="heatpumps_banner_text">
							<h4>Maksymalna Oszczędność</h4>
							<p>Zmniejsz rachunki za ogrzewanie nawet o 70%.</p>
						</div>
					</div>
					<div className="heatpumps_banner_item">
						<Award size={36} className="heatpumps_banner_icon" />
						<div className="heatpumps_banner_text">
							<h4>Sprawdzone Marki</h4>
							<p>Montujemy wyłącznie urządzenia renomowanych producentów.</p>
						</div>
					</div>
					<div className="heatpumps_banner_item">
						<Wrench size={36} className="heatpumps_banner_icon" />
						<div className="heatpumps_banner_text">
							<h4>Kompleksowy Montaż</h4>
							<p>Od audytu i projektu, po instalację i uruchomienie.</p>
						</div>
					</div>
					<div className="heatpumps_banner_item">
						<ShieldCheck size={36} className="heatpumps_banner_icon" />
						<div className="heatpumps_banner_text">
							<h4>Gwarancja i Serwis</h4>
							<p>Wieloletnia ochrona i wsparcie serwisowe 24/7.</p>
						</div>
					</div>
				</div>
			</section>

			{/* 5. FAQ (CZĘSTO ZADAWANE PYTANIA) */}
			<section className="heatpumps_faq">
				<div className="heatpumps_container">
					<h2 className="heatpumps_faq_title">Najczęściej zadawane pytania</h2>
					<div className="heatpumps_faq_wrapper">
						{faqData.map((faq, index) => (
							<div
								key={index}
								className={`heatpumps_faq_item ${openFaq === index ? "active" : ""}`}>
								<button
									className="heatpumps_faq_question"
									onClick={() => toggleFaq(index)}>
									{faq.question}
									<ChevronDown
										size={20}
										className={`heatpumps_faq_icon ${openFaq === index ? "rotated" : ""}`}
									/>
								</button>
								<div className="heatpumps_faq_answer">
									<div className="heatpumps_faq_answer_inner">{faq.answer}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 6. PARTNERZY - 8 Klikalnych logotypów */}
			<section className="heatpumps_partners">
				<div className="heatpumps_container">
					<h2 className="heatpumps_partners_title">Współpracujemy z</h2>
					<div className="heatpumps_partners_grid">
						<a
							href="https://dedietrich.pl/pompy-ciepla/"
							target="_blank"
							rel="noopener noreferrer"
							className="heatpumps_partner_logo">
							<img
								src={logo1}
								alt="Partner 1"
								className="heatpumps_partner_image"
							/>
						</a>

						<a
							href="https://www.bosch-homecomfort.com/pl/pl/ocs/budynki-mieszkalne/pompy-ciepla-1221702-c/"
							target="_blank"
							rel="noopener noreferrer"
							className="heatpumps_partner_logo">
							<img
								src={logo2}
								alt="Partner 2"
								className="heatpumps_partner_image"
							/>
						</a>

						<a
							href="https://www.nibe.eu/pl/pl/Produkty/"
							target="_blank"
							rel="noopener noreferrer"
							className="heatpumps_partner_logo">
							<img
								src={logo3}
								alt="Partner 3"
								className="heatpumps_partner_image"
							/>
						</a>

						<a
							href="https://www.saunierduval.pl/dla-uzytkownikow/produkty-i-systemy/geniaair-split-20992.html"
							target="_blank"
							rel="noopener noreferrer"
							className="heatpumps_partner_logo">
							<img
								src={logo4}
								alt="Partner 4"
								className="heatpumps_partner_image"
							/>
						</a>

						<a
							href="https://www.stiebel-eltron.pl/pl/produkty-rozwiazania/energia_odnawialna/pompy_ciepla.html"
							target="_blank"
							rel="noopener noreferrer"
							className="heatpumps_partner_logo">
							<img
								src={logo5}
								alt="Partner 5"
								className="heatpumps_partner_image"
							/>
						</a>

						<a
							href="https://www.vaillant.pl/klienci-indywidualni/produkty-i-systemy/grupy-produktowe/pompy-ciepla/"
							target="_blank"
							rel="noopener noreferrer"
							className="heatpumps_partner_logo">
							<img
								src={logo6}
								alt="Partner 6"
								className="heatpumps_partner_image"
							/>
						</a>

						<a
							href="https://ik.pl/strefa-marek/viteco"
							target="_blank"
							rel="noopener noreferrer"
							className="heatpumps_partner_logo">
							<img
								src={logo7}
								alt="Partner 7"
								className="heatpumps_partner_image"
							/>
						</a>

						<a
							href="https://www.wolf.eu/pl-pl/doradztwo/pompy-ciepla"
							target="_blank"
							rel="noopener noreferrer"
							className="heatpumps_partner_logo">
							<img
								src={logo8}
								alt="Partner 8"
								className="heatpumps_partner_image"
							/>
						</a>
					</div>
				</div>
			</section>

			{/* 7. CTA + CZY WIESZ ŻE */}
			<section className="heatpumps_cta">
				<div className="heatpumps_container heatpumps_cta_wrapper">
					<h2 className="heatpumps_cta_title">Zainwestuj w komfort cieplny</h2>
					<p className="heatpumps_cta_desc">
						Umów się na bezpłatny audyt. Nasi eksperci dobiorą pompę ciepła
						idealnie dopasowaną do Twojego budynku i przedstawią rzetelną
						wycenę.
					</p>

					<Button to="/kontakt">
						Zapytaj o ofertę{" "}
						<ArrowRight size={18} style={{ marginLeft: "8px" }} />
					</Button>

					<div className="heatpumps_didyouknow">
						<div className="heatpumps_didyouknow_header">
							<Lightbulb size={28} className="heatpumps_didyouknow_icon" />
							<h3>Czy wiedziałeś, że...?</h3>
						</div>
						<p>
							Najlepsze efekty finansowe osiągniesz, łącząc pompę ciepła z
							własną instalacją fotowoltaiczną. Produkuj darmowy prąd ze słońca
							i zasilaj nim w pełni ekologiczne ogrzewanie Twojego domu.
						</p>
						<a href="/fotowoltaika" className="heatpumps_didyouknow_link">
							Sprawdź ofertę fotowoltaiki &rarr;
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HeatPumps;
