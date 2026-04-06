import React from "react";
import {
	Check,
	Wind,
	ShieldCheck,
	Wrench,
	Factory,
	Leaf,
	Thermometer,
	VolumeX,
	Zap,
} from "lucide-react";
import "../styles/pages/ventilation.scss";
import PageHero from "../components/ui/PageHero";

// --- IMPORTY ZDJĘĆ ---
import heroImage from "../images/wentylacja.webp";
import przemyslImg from "../images/wentylacja.webp"; // Do dodania w folderze
import domImg from "../images/rekup.webp"; // Do dodania w folderze

const Ventilation = () => {
	return (
		<div className="ventilation">
			{/* --- HERO --- */}
			<PageHero
				title="Wentylacje"
				subtitle="Świeże powietrze w domu i w przemyśle"
				description="Zapewnij optymalną wymianę powietrza, pozbądź się wilgoci i ciesz się zdrowym mikroklimatem. Od domowych systemów rekuperacji, po zaawansowane układy odpylania dla hal produkcyjnych."
				images={[heroImage]}
			/>

			{/* --- SEKCJA 1: PRZEMYSŁ - ZAGROŻENIA I ROZWIĄZANIE --- */}
			<section className="ventilation_section">
				<div className="ventilation_container ventilation_split">
					<div className="ventilation_text_box">
						<h2 className="ventilation_section_title">
							Wentylacja przemysłowa – dlaczego nie warto na niej oszczędzać?
						</h2>
						<p className="ventilation_section_desc">
							Powietrze w halach produkcyjnych i magazynach szybko nasyca się
							pyłem, oparami i zanieczyszczeniami. Ignorowanie tego problemu to
							prosta droga do katastrofy. Narażasz zdrowie pracowników na
							długotrwałe choroby płuc, a sprzęt na zatarcia i kosztowne awarie.
							Co gorsza, wysokie stężenie niektórych pyłów to tykająca bomba –
							stwarza realne ryzyko pożaru lub wybuchu.
						</p>
						<p className="ventilation_section_desc">
							Jako eksperci od systemów HVAC, projektujemy i montujemy układy,
							które skutecznie odsysają zanieczyszczone powietrze i wtłaczają na
							jego miejsce świeże, przefiltrowane – z zachowaniem odpowiedniej
							temperatury.
						</p>
						<ul className="ventilation_list">
							<li className="ventilation_item">
								<ShieldCheck size={24} className="ventilation_icon" />
								<span className="ventilation_list_text">
									Mniej zwolnień lekarskich i bezpieczna kadra.
								</span>
							</li>
							<li className="ventilation_item">
								<Zap size={24} className="ventilation_icon" />
								<span className="ventilation_list_text">
									Ochrona maszyn przed przegrzaniem i zatarciem.
								</span>
							</li>
							<li className="ventilation_item">
								<Check size={24} className="ventilation_icon" />
								<span className="ventilation_list_text">
									Zgodność z rygorystycznymi przepisami BHP.
								</span>
							</li>
						</ul>
					</div>
					<div className="ventilation_image_box">
						<img
							src={przemyslImg}
							alt="Wentylacja w hali produkcyjnej"
							className="ventilation_fluid_image"
						/>
					</div>
				</div>
			</section>

			{/* --- SEKCJA 2: KARTY - RODZAJE WENTYLACJI --- */}
			<section className="ventilation_section ventilation_section_light">
				<div className="ventilation_container">
					<h2 className="ventilation_center_title">
						Rozwiązania dla przemysłu
					</h2>
					<div className="ventilation_cards_grid">
						<div className="ventilation_card">
							<Factory size={40} className="ventilation_card_icon" />
							<h3 className="ventilation_card_title">
								Wentylacja Ogólna (Rozcieńczająca)
							</h3>
							<p className="ventilation_card_desc">
								Działa na zasadzie ciągłej wymiany ogromnych mas powietrza w
								całej hali. Świeże powietrze rozcieńcza zanieczyszczenia do
								bezpiecznego, ledwo zauważalnego poziomu. Stosujemy potężne
								wentylatory dachowe i ścienne, dobierając moc tak, aby wymienić
								całą kubaturę budynku nawet kilka razy w ciągu godziny.
							</p>
						</div>
						<div className="ventilation_card">
							<Wind size={40} className="ventilation_card_icon" />
							<h3 className="ventilation_card_title">
								Wyciągi Stanowiskowe (Miejscowe)
							</h3>
							<p className="ventilation_card_desc">
								Najskuteczniejsza broń przeciwko pyłom i oparom. Instalujemy
								okapy, ssawy i ramiona odciągowe dokładnie w miejscu powstawania
								zanieczyszczeń (np. przy spawarkach, szlifierkach). Kurz jest
								wyłapywany u źródła, zanim w ogóle zdąży rozejść się po hali
								produkcyjnej.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- SEKCJA 3: WĄSKI PASEK (BANNER USPs) --- */}
			<section className="ventilation_banner">
				<div className="ventilation_container ventilation_banner_wrapper">
					<div className="ventilation_banner_item">
						<Wrench size={36} className="ventilation_banner_icon" />
						<div className="ventilation_banner_text">
							<h4>Kompleksowa obsługa</h4>
							<p>Od audytu, przez projektowanie, aż po montaż.</p>
						</div>
					</div>
					<div className="ventilation_banner_item">
						<ShieldCheck size={36} className="ventilation_banner_icon" />
						<div className="ventilation_banner_text">
							<h4>Własne ekipy</h4>
							<p>Brak podwykonawców. Gwarancja czystego montażu.</p>
						</div>
					</div>
					<div className="ventilation_banner_item">
						<Check size={36} className="ventilation_banner_icon" />
						<div className="ventilation_banner_text">
							<h4>Pełny serwis</h4>
							<p>Opieka gwarancyjna i pogwarancyjna systemów.</p>
						</div>
					</div>
				</div>
			</section>

			{/* --- SEKCJA 4: WENTYLACJA DLA DOMU (REKUPERACJA) - SPLIT --- */}
			<section className="ventilation_section">
				<div className="ventilation_container ventilation_split">
					<div className="ventilation_text_box">
						<h2 className="ventilation_section_title">
							Wentylacja dla Domu (Rekuperacja)
						</h2>
						<p className="ventilation_section_desc">
							Zwykłe otwieranie okien to za mało, by cieszyć się zdrowym domem,
							a do tego bezpowrotnie tracisz cenne ciepło. Rekuperacja to
							nowoczesna wentylacja mechaniczna z odzyskiem ciepła. System
							nieustannie wymienia zużyte powietrze na świeże, jednocześnie
							odzyskując z niego energię cieplną.
						</p>
						<p className="ventilation_section_desc">
							Nasze instalacje gwarantują brak wilgoci na oknach, zlikwidowanie
							zaduchu i stały dopływ przefiltrowanego powietrza – z dala od
							smogu, kurzu i owadów, bez konieczności wychładzania pomieszczeń.
						</p>
					</div>
					<div className="ventilation_image_box">
						<img
							src={domImg}
							alt="Rekuperator w domu"
							className="ventilation_fluid_image"
						/>
					</div>
				</div>
			</section>

			{/* --- SEKCJA 5: KORZYŚCI Z REKUPERACJI (BOX) --- */}
			<section className="ventilation_benefits">
				<div className="ventilation_container">
					<h2 className="ventilation_benefits_title">
						Dlaczego rekuperacja to "must-have"?
					</h2>
					<div className="ventilation_benefits_grid">
						<div className="ventilation_benefit_card">
							<Thermometer className="ventilation_benefit_icon" size={48} />
							<h3>Potężne Oszczędności</h3>
							<p>
								Odzysk ciepła z wywiewanego powietrza sięga nawet 90%.
								Zauważalnie obniżasz rachunki za ogrzewanie zimą w stosunku do
								zwykłej wentylacji grawitacyjnej.
							</p>
						</div>
						<div className="ventilation_benefit_card">
							<Leaf className="ventilation_benefit_icon" size={48} />
							<h3>Koniec ze Smogiem i Alergią</h3>
							<p>
								Czerpane z zewnątrz powietrze przechodzi przez zaawansowane
								filtry. Dom wolny jest od smogu, pyłków, roztoczy i kurzu.
							</p>
						</div>
						<div className="ventilation_benefit_card">
							<Wind className="ventilation_benefit_icon" size={48} />
							<h3>Zero Przeciągów</h3>
							<p>
								Stała i niewyczuwalna cyrkulacja powietrza w całym budynku.
								Koniec z marznięciem przy otwartym oknie podczas wietrzenia
								zimą.
							</p>
						</div>
						<div className="ventilation_benefit_card">
							<VolumeX className="ventilation_benefit_icon" size={48} />
							<h3>Cisza i spokój</h3>
							<p>
								Zamknięte okna to całkowite odcięcie od hałasu z ulicy.
								Dodatkowo brak uciążliwych komarów, much i innych insektów
								latem.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Ventilation;
