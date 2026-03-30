import { Check } from "lucide-react";
import "../styles/pages/photovoltaics.scss";
import PageHero from "../components/ui/PageHero";

// --- IMPORTY TYLKO ISTNIEJĄCYCH ZDJĘĆ ---
import heroImage from "../images/fotowoltaika.webp";
import fotowDach from "../images/fotow-dach.webp";

const Photovoltaics = () => {
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
			{/* --- HERO W KOMPONENCIE --- */}
			<PageHero
				title="Fotowoltaika"
				subtitle="Energia Słoneczna prosto do Twojego domu"
				description="Zacznij produkować własny prąd ze słońca. Oferujemy kompleksowe instalacje fotowoltaiczne dla domów oraz wielkoskalowe farmy dla przemysłu, gwarantujące niezależność i wymierne oszczędności."
				images={[heroImage]}
			/>

			{/* --- INTRO --- */}
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

			{/* --- RODZAJE INSTALACJI --- */}
			<section className="photovoltaics_types">
				<div className="photovoltaics_container photovoltaics_types_grid">
					<div className="photovoltaics_type_card">
						<h3 className="photovoltaics_type_title">Fotowoltaika dla domu</h3>
						<p className="photovoltaics_type_desc">
							Rozwiązania dopasowane do potrzeb gospodarstw domowych.
							Kompleksowo wykonujemy instalacje, podłączamy je do sieci i
							załatwiamy wszelkie formalności z Operatorem.
						</p>

						<ul className="photovoltaics_type_list">
							{homeAdvantages.map((adv, i) => (
								<li key={i} className="photovoltaics_list_item">
									<Check size={20} className="photovoltaics_list_icon" />
									<span className="photovoltaics_list_text">{adv}</span>
								</li>
							))}
						</ul>
					</div>

					<div className="photovoltaics_type_card">
						<h3 className="photovoltaics_type_title">
							Dla Przemysłu / Farmy PV
						</h3>
						<p className="photovoltaics_type_desc">
							Zaawansowane systemy dla biznesu. Budujemy instalacje
							wielkoskalowe na gruntach i dachach hal produkcyjnych,
							zabezpieczając firmy przed wahaniami cen na rynku energii.
						</p>

						<ul className="photovoltaics_type_list">
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

			{/* --- PARTNERZY (PUSTE POLA) --- */}
			<section className="photovoltaics_partners">
				<div className="photovoltaics_container">
					<h2 className="photovoltaics_partners_title">Współpracujemy z</h2>
					<div className="photovoltaics_partners_grid">
						<div className="photovoltaics_partner_logo">Partner 1</div>
						<div className="photovoltaics_partner_logo">Partner 2</div>
						<div className="photovoltaics_partner_logo">Partner 3</div>
						<div className="photovoltaics_partner_logo">Partner 4</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Photovoltaics;
