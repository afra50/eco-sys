import React from "react";
import {
	Droplet,
	Waves,
	Wrench,
	ShieldCheck,
	Check,
	GitBranch, // Ikona pasująca do rozgałęzień rur
	ArrowRight,
} from "lucide-react";
import "../styles/pages/plumbing.scss";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button"; // Pamiętaj o imporcie Buttona!

// --- IMPORTY ZDJĘĆ ---
import heroImage from "../images/wodkan.webp"; // Do dodania w folderze
import introImg from "../images/wodkan.webp"; // Do dodania w folderze

const Plumbing = () => {
	return (
		<div className="plumbing">
			{/* --- HERO --- */}
			<PageHero
				title="Instalacje Wod-Kan"
				subtitle="Bezpieczeństwo i trwałość na dekady"
				description="Zajmujemy się kompleksowym wykonawstwem instalacji wodno-kanalizacyjnych. Od rozprowadzenia wody wewnątrz budynku, po profesjonalne odprowadzanie ścieków i przyłącza zewnętrzne."
				images={[heroImage]}
			/>

			{/* --- SEKCJA 1: INTRO (SPLIT) --- */}
			<section className="plumbing_section">
				<div className="plumbing_container plumbing_split">
					<div className="plumbing_text_box">
						<h2 className="plumbing_section_title">
							Niezawodność ukryta w ścianach
						</h2>
						<p className="plumbing_section_desc">
							Instalacja wodno-kanalizacyjna to jeden z najważniejszych
							elementów każdego budynku. Błędy popełnione na etapie jej
							układania są niezwykle trudne i kosztowne w naprawie, ponieważ
							wymagają niszczenia gotowych posadzek i tynków.
						</p>
						<p className="plumbing_section_desc">
							Dlatego nie ma tu miejsca na kompromisy. Pracujemy na materiałach
							najwyższej jakości (PVC, PP, PE, PEX), które charakteryzują się
							wysoką odpornością na ciśnienie, korozję oraz działanie środków
							chemicznych. Każdy układ jest przez nas precyzyjnie testowany
							przed oddaniem do użytku.
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
									Bezbłędne profilowanie spadków kanalizacyjnych.
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
							alt="Montaż instalacji wodno-kanalizacyjnej"
							className="plumbing_fluid_image"
						/>
					</div>
				</div>
			</section>

			{/* --- SEKCJA 2: KARTY (ZAKRES USŁUG WOD-KAN) --- */}
			<section className="plumbing_section plumbing_section_light">
				<div className="plumbing_container">
					<h2 className="plumbing_center_title">Nasz zakres prac</h2>
					<div className="plumbing_cards_grid">
						<div className="plumbing_card">
							<Droplet size={40} className="plumbing_card_icon" />
							<h3 className="plumbing_card_title">Instalacje Wodociągowe</h3>
							<p className="plumbing_card_desc">
								Rozprowadzamy instalacje zimnej i ciepłej wody użytkowej (ZWU i
								CWU). Wykonujemy układy trójnikowe oraz rozdzielaczowe, dbając o
								odpowiednie ciśnienie w każdym punkcie poboru i instalując pompy
								cyrkulacyjne.
							</p>
						</div>
						<div className="plumbing_card">
							<Waves size={40} className="plumbing_card_icon" />
							<h3 className="plumbing_card_title">Kanalizacja Wewnętrzna</h3>
							<p className="plumbing_card_desc">
								Montujemy piony i poziomy kanalizacyjne odprowadzające ścieki z
								urządzeń sanitarnych. Dbamy o właściwą średnicę rur, odpowiednie
								kąty nachylenia oraz systemy napowietrzające, które zapobiegają
								cofaniu się zapachów.
							</p>
						</div>
						<div className="plumbing_card">
							<GitBranch size={40} className="plumbing_card_icon" />
							<h3 className="plumbing_card_title">Przyłącza Zewnętrzne</h3>
							<p className="plumbing_card_desc">
								Łączymy wewnętrzną sieć budynku z infrastrukturą miejską.
								Wykonujemy zewnętrzne przyłącza wodociągowe oraz kanalizacyjne
								(w tym montaż studni rewizyjnych i szamb ekologicznych), zgodnie
								z warunkami zabudowy.
							</p>
						</div>
						<div className="plumbing_card">
							<Wrench size={40} className="plumbing_card_icon" />
							<h3 className="plumbing_card_title">Modernizacje i Wymiany</h3>
							<p className="plumbing_card_desc">
								Zmieniamy stare, żeliwne rury na nowoczesne i bezpieczne systemy
								z tworzyw sztucznych. Usuwamy nieszczelności, przerabiamy układy
								pod nowe projekty łazienek i optymalizujemy działanie całego
								krwiobiegu budynku.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- SEKCJA 3: WĄSKI PASEK (BANNER USPs) --- */}
			<section className="plumbing_banner">
				<div className="plumbing_container plumbing_banner_wrapper">
					<div className="plumbing_banner_item">
						<ShieldCheck size={36} className="plumbing_banner_icon" />
						<div className="plumbing_banner_text">
							<h4>Pełna szczelność</h4>
							<p>Twarde testy ciśnieniowe przed zalaniem posadzek.</p>
						</div>
					</div>
					<div className="plumbing_banner_item">
						<Wrench size={36} className="plumbing_banner_icon" />
						<div className="plumbing_banner_text">
							<h4>Zgodność z normami</h4>
							<p>Instalacje spełniające wymogi prawa budowlanego.</p>
						</div>
					</div>
					<div className="plumbing_banner_item">
						<Check size={36} className="plumbing_banner_icon" />
						<div className="plumbing_banner_text">
							<h4>Czysta woda</h4>
							<p>Atestowane materiały nie wpływające na jakość wody.</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- SEKCJA 4: ROZBUDOWANY OPIS (WIEDZA / EXPERTISE) --- */}
			<section className="plumbing_section">
				<div className="plumbing_container">
					<div className="plumbing_expertise">
						<h2 className="plumbing_section_title">Technologia ma znaczenie</h2>
						<div className="plumbing_expertise_content">
							<div className="plumbing_expertise_text">
								<h3>Kanalizacja grawitacyjna czy niskoszumowa?</h3>
								<p>
									Standardowa kanalizacja opiera się na grawitacyjnym odpływie
									ścieków. Aby działała bezawaryjnie, kluczowe jest zachowanie
									spadków rzędu 2-3%. Zbyt mały spadek doprowadzi do zatorów, a
									zbyt duży sprawi, że woda spłynie szybciej niż
									zanieczyszczenia stałe.
								</p>
								<p>
									W budynkach o podwyższonym standardzie oraz tam, gdzie piony
									przechodzą w pobliżu sypialni, proponujemy{" "}
									<strong>instalacje niskoszumowe</strong>. To specjalne rury o
									pogrubionych, wielowarstwowych ściankach, które drastycznie
									wygłuszają odgłosy spływającej wody. To różnica, którą
									docenisz każdej nocy.
								</p>

								<div className="plumbing_expertise_cta">
									<p>
										Zastanawiasz się, jakie rozwiązanie sprawdzi się w Twoim
										budynku? Porozmawiajmy o szczegółach.
									</p>
									<Button to="/kontakt">
										Wycena instalacji{" "}
										<ArrowRight size={18} style={{ marginLeft: "8px" }} />
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Plumbing;
