import React, { useState } from "react";
import {
	CheckCircle2,
	ThermometerSun,
	Sun,
	ArrowRight,
	ChevronDown,
} from "lucide-react";
import "../../styles/components/home/cleanair.scss";

// TUTAJ PODMIEŃ NAZWĘ PLIKU NA SWOJĄ ŻARÓWKĘ
import cleanAirImg from "../../images/zarowka.webp";

const CleanAir = () => {
	const [openFaq, setOpenFaq] = useState(null);

	const toggleFaq = (index) => {
		setOpenFaq(openFaq === index ? null : index);
	};

	const benefits = [
		"Zmniejszenie rachunków za ogrzewanie i prąd.",
		"Ochrona środowiska i lepsza jakość powietrza.",
		"Wzrost wartości Twojej nieruchomości.",
		"Skrócony czas zwrotu z inwestycji dzięki dotacjom.",
	];

	const faqData = [
		{
			question: "Kto może skorzystać z dofinansowania?",
			answer:
				"Program skierowany jest do właścicieli i współwłaścicieli domów jednorodzinnych, którzy chcą wymienić przestarzałe źródło ciepła (np. stary piec węglowy) na nowoczesne rozwiązania, takie jak pompa ciepła, oraz przeprowadzić termomodernizację.",
		},
		{
			question: "Ile wynosi wsparcie finansowe?",
			answer:
				"Wysokość dotacji jest ściśle uzależniona od poziomu dochodów inwestora oraz zakresu planowanych prac. W zależności od progu wsparcia, dofinansowanie może pokryć od kilkudziesięciu do nawet 100% kosztów kwalifikowanych netto.",
		},
		{
			question: "Czy pomagacie w wypełnianiu wniosków?",
			answer:
				"Nie zajmujemy się formalnościami urzędowymi. Nasza firma skupia się w 100% na tym, w czym jesteśmy ekspertami – profesjonalnym doradztwie technicznym, doborze urządzeń i rzetelnym montażu. Wniosek o dotację inwestor składa samodzielnie (np. przez gov.pl lub w gminnym punkcie konsultacyjnym).",
		},
		{
			question: "Kiedy najlepiej złożyć wniosek?",
			answer:
				"Wniosek w programie Czyste Powietrze można złożyć przed rozpoczęciem inwestycji, w trakcie jej trwania, a nawet do 6 miesięcy po poniesieniu pierwszych kosztów. Zalecamy jednak zapoznanie się z wymogami programu jeszcze przed wyborem urządzeń.",
		},
	];

	return (
		<section className="cleanair">
			<div className="cleanair_container">
				{/* GÓRNA CZĘŚĆ: ZDJĘCIE I OPIS (SPLIT) */}
				<div className="cleanair_wrapper">
					{/* LEWA STRONA: ZDJĘCIE */}
					<div className="cleanair_image_col">
						<div className="cleanair_image_wrapper">
							<img
								src={cleanAirImg}
								alt="Zielona rewolucja w energetyce"
								className="cleanair_image"
							/>
							<div className="cleanair_image_glow"></div>
						</div>
						<p className="cleanair_image_caption">
							Przyszłość zaczyna się od dobrych decyzji.
						</p>
					</div>

					{/* PRAWA STRONA: TREŚĆ */}
					<div className="cleanair_content_col">
						<h2 className="cleanair_title">
							Zainwestuj w <span className="highlight">Czyste Powietrze</span>
						</h2>

						<p className="cleanair_desc">
							Istnieją rządowe programy wsparcia, takie jak{" "}
							<strong>"Czyste Powietrze"</strong>, które pomagają sfinansować
							wymianę starego pieca na nowoczesne, bezemisyjne źródła ciepła.
							Połączenie termomodernizacji z odnawialnymi źródłami energii to
							gwarancja komfortu i radykalnego obniżenia kosztów życia.
						</p>

						<ul className="cleanair_list">
							{benefits.map((benefit, index) => (
								<li key={index} className="cleanair_list_item">
									<CheckCircle2 size={22} className="cleanair_list_icon" />
									<span>{benefit}</span>
								</li>
							))}
						</ul>

						{/* KARTY LINKUJĄCE DO PODSTRON */}
						<div className="cleanair_cards">
							<a href="/pompy-ciepla" className="cleanair_card">
								<div className="cleanair_card_icon_wrapper">
									<ThermometerSun size={24} className="cleanair_card_icon" />
								</div>
								<div className="cleanair_card_text">
									<h4>Pompy Ciepła</h4>
									<p>Wymień piec na czyste ciepło</p>
								</div>
								<ArrowRight size={18} className="cleanair_card_arrow" />
							</a>

							<a href="/fotowoltaika" className="cleanair_card">
								<div className="cleanair_card_icon_wrapper">
									<Sun size={24} className="cleanair_card_icon" />
								</div>
								<div className="cleanair_card_text">
									<h4>Fotowoltaika</h4>
									<p>Zasilaj pompę darmowym prądem</p>
								</div>
								<ArrowRight size={18} className="cleanair_card_arrow" />
							</a>
						</div>
					</div>
				</div>

				{/* DOLNA CZĘŚĆ: FAQ NA CAŁĄ SZEROKOŚĆ */}
				<div className="cleanair_faq">
					<h2 className="cleanair_faq_title">Najczęściej zadawane pytania</h2>
					<div className="cleanair_faq_wrapper">
						{faqData.map((faq, index) => (
							<div
								key={index}
								className={`cleanair_faq_item ${openFaq === index ? "active" : ""}`}>
								<button
									className="cleanair_faq_question"
									onClick={() => toggleFaq(index)}>
									{faq.question}
									<ChevronDown
										size={20}
										className={`cleanair_faq_icon ${openFaq === index ? "rotated" : ""}`}
									/>
								</button>
								<div className="cleanair_faq_answer">
									<div className="cleanair_faq_answer_inner">{faq.answer}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CleanAir;
