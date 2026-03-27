import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react"; // Dodałem nową ikonę Zap
import Button from "../ui/Button";
import "../../styles/components/home/hero.scss";

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			id: 1,
			productType: "Pompy Ciepła", // NOWE: Dedykowany typ produktu
			productTitle: "Oszczędne ogrzewanie", // NOWE: Dedykowany tytuł
			productDesc:
				"Ciepło i komfort w Twoim domu przez cały rok dzięki hybrydowej technologii.", // NOWE: Dedykowany opis
			productLink: "/pompy-ciepla", // POPRAWIONE: czysty link
			// Pamiętaj, aby zapisać wygenerowany obraz w public/images/hero-pompa.jpg
			img: "/images/hero-pompa.jpg",
		},
		{
			id: 2,
			productType: "Fotowoltaika",
			productTitle: "Darmowy prąd ze słońca",
			productDesc:
				"Zainwestuj w panele fotowoltaiczne i zyskaj niezależność energetyczną.",
			productLink: "/fotowoltaika", // POPRAWIONE: czysty link
			img: "/images/hero-foto.jpg",
		},
		{
			id: 3,
			productType: "Klimatyzacja",
			productTitle: "Komfort i świeżość",
			productDesc:
				"Nowoczesna klimatyzacja i wentylacja dopasowana do potrzeb Twojej rodziny.",
			productLink: "/klimatyzacja", // POPRAWIONE: czysty link
			img: "/images/hero-klima.jpg",
		},
	];

	// Automatyczne przewijanie co 5 sekund
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
		}, 5000);
		return () => clearInterval(timer);
	}, [slides.length]);

	const nextSlide = () =>
		setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
	const prevSlide = () =>
		setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);

	return (
		<section className="hero-slider hero-slider--wrobel">
			{slides.map((slide, index) => (
				<div
					key={slide.id}
					className={`hero-slider__slide ${index === currentSlide ? "hero-slider__slide--active" : ""}`}>
					{/* Tło zdjęcia szerokie, na całą szerokość, z jasną nakładką (glow) */}
					<div className="hero-slider__bg">
						<img src={slide.img} alt={slide.productTitle} />
						<div className="hero-slider__overlay hero-slider__overlay--glow"></div>
					</div>

					{/* NOWE: Subtelny boczny panel z dedykowaną treścią produktu */}
					<div className="hero-slider__sidebar">
						<div className="hero-slider__sidebar-content">
							{/* Ikona i typ produktu */}
							<div className="hero-slider__product-meta">
								<Zap size={20} className="hero-slider__product-icon" />
								<p className="hero-slider__product-type">{slide.productType}</p>
							</div>

							{/* Tytuł i opis */}
							<h1 className="hero-slider__product-title">
								{slide.productTitle}
							</h1>
							<p className="hero-slider__product-desc">{slide.productDesc}</p>

							{/* JEDEN, główny przycisk, dedykowany do produktu */}
							<div className="hero-slider__actions">
								<Button to={slide.productLink} variant="primary">
									Dowiedz się więcej
								</Button>
							</div>
						</div>
					</div>
				</div>
			))}

			{/* Strzałki nawigacyjne (zostawiamy bez zmian) */}
			<button
				className="hero-slider__arrow hero-slider__arrow--left"
				onClick={prevSlide}>
				<ChevronLeft size={36} />
			</button>
			<button
				className="hero-slider__arrow hero-slider__arrow--right"
				onClick={nextSlide}>
				<ChevronRight size={36} />
			</button>

			{/* Kropki nawigacyjne (zostawiamy bez zmian) */}
			<div className="hero-slider__dots">
				{slides.map((_, index) => (
					<button
						key={index}
						className={`hero-slider__dot ${index === currentSlide ? "hero-slider__dot--active" : ""}`}
						onClick={() => setCurrentSlide(index)}
					/>
				))}
			</div>
		</section>
	);
};

export default Hero;
