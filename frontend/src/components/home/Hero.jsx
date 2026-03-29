import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import Button from "../ui/Button";
import "../../styles/components/home/hero.scss";

// --- IMPORTY ZDJĘĆ Z FOLDERU SRC ---
import heroPompa from "../../images/hero-pompa.jpg";
import heroFoto from "../../images/hero-foto.jpg";
import heroKlima from "../../images/hero-klima.jpg";

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			id: 1,
			productType: "Pompy Ciepła",
			productTitle: "Oszczędne ogrzewanie",
			productDesc:
				"Ciepło i komfort w Twoim domu przez cały rok dzięki hybrydowej technologii.",
			productLink: "/pompy-ciepla",
			img: heroPompa,
		},
		{
			id: 2,
			productType: "Fotowoltaika",
			productTitle: "Darmowy prąd ze słońca",
			productDesc:
				"Zainwestuj w panele fotowoltaiczne i zyskaj niezależność energetyczną.",
			productLink: "/fotowoltaika",
			img: heroFoto,
		},
		{
			id: 3,
			productType: "Klimatyzacja",
			productTitle: "Komfort i świeżość",
			productDesc:
				"Nowoczesna klimatyzacja i wentylacja dopasowana do potrzeb Twojej rodziny.",
			productLink: "/klimatyzacja",
			img: heroKlima,
		},
	];

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
		<section className="hero_slider hero_slider_wrobel">
			{slides.map((slide, index) => (
				<div
					key={slide.id}
					className={`hero_slider_slide ${index === currentSlide ? "active" : ""}`}>
					<div className="hero_slider_bg">
						<img src={slide.img} alt={slide.productTitle} />
						<div className="hero_slider_overlay hero_slider_overlay_glow"></div>
					</div>

					<div className="hero_slider_sidebar">
						<div className="hero_slider_sidebar_content">
							<div className="hero_slider_product_meta">
								<Zap size={20} className="hero_slider_product_icon" />
								<p className="hero_slider_product_type">{slide.productType}</p>
							</div>

							<h1 className="hero_slider_product_title">
								{slide.productTitle}
							</h1>
							<p className="hero_slider_product_desc">{slide.productDesc}</p>

							<div className="hero_slider_actions">
								<Button to={slide.productLink} variant="primary">
									Dowiedz się więcej
								</Button>
							</div>
						</div>
					</div>
				</div>
			))}

			<button
				className="hero_slider_arrow hero_slider_arrow_left"
				onClick={prevSlide}>
				<ChevronLeft size={36} />
			</button>
			<button
				className="hero_slider_arrow hero_slider_arrow_right"
				onClick={nextSlide}>
				<ChevronRight size={36} />
			</button>

			<div className="hero_slider_dots">
				{slides.map((_, index) => (
					<button
						key={index}
						className={`hero_slider_dot ${index === currentSlide ? "active" : ""}`}
						onClick={() => setCurrentSlide(index)}
					/>
				))}
			</div>
		</section>
	);
};

export default Hero;
