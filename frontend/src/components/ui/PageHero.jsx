import React, { useState, useEffect } from "react";
import "../../styles/components/ui/page_hero.scss";

const PageHero = ({ title, subtitle, description, images = [] }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const isSlider = images.length > 1;

	// Automatyczny slider włącza się tylko, gdy jest więcej niż 1 zdjęcie
	useEffect(() => {
		if (!isSlider) return;
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
		}, 4000);
		return () => clearInterval(timer);
	}, [isSlider, images.length]);

	return (
		<section className="page_hero">
			{/* Wrapper ogranicza zdjęcie do 65% na desktopie - koniec z ucinaniem kadru */}
			<div className="page_hero_image_wrapper">
				{images.map((img, index) => (
					<img
						key={index}
						src={img}
						alt={`${title} - zdjęcie ${index + 1}`}
						className={`page_hero_image ${index === currentSlide ? "active" : ""}`}
					/>
				))}
			</div>

			{/* Overlay jest na poziomie sekcji, żeby płynnie zblendować lewą i prawą stronę */}
			<div className="page_hero_overlay"></div>

			<div className="page_hero_container">
				<div className="page_hero_content">
					<h1 className="page_hero_title">{title}</h1>
					{subtitle && <p className="page_hero_subtitle">{subtitle}</p>}
					{description && <p className="page_hero_desc">{description}</p>}
				</div>
			</div>
		</section>
	);
};

export default PageHero;
