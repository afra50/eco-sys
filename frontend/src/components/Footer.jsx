import { Link } from "react-router-dom";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import logoWhite from "../assets/logo-without-bg.png"; // Załóżmy, że masz logo w miarę widoczne na ciemnym. Jeśli masz wersję białą, wstaw tu ścieżkę do niej!
import "../styles/components/footer.scss";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__top">
					{/* Kolumna 1: O firmie & Logo */}
					<div className="footer__col footer__col--about">
						<Link to="/" className="footer__logo">
							<img src={logoWhite} alt="Eco-sys Logo" />
						</Link>
						<p className="footer__desc">
							Twój sprawdzony partner w budowaniu energooszczędnych i
							komfortowych przestrzeni. Projektujemy i wykonujemy kompleksowe
							instalacje dla domów i przemysłu.
						</p>
						<div className="footer__socials">
							<a
								href="https://www.facebook.com/EcoSysPL"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook">
								<FaFacebookF />
							</a>
						</div>
					</div>

					{/* Kolumna 2: Szybkie linki */}
					<div className="footer__col">
						<h3 className="footer__title">Firma</h3>
						<ul className="footer__links">
							<li>
								<Link to="/o-nas">O nas</Link>
							</li>
							<li>
								<Link to="/galeria">Galeria</Link>
							</li>
							<li>
								<Link to="/kontakt">Kontakt</Link>
							</li>
						</ul>
					</div>

					{/* Kolumna 3: Nasza Oferta */}
					<div className="footer__col">
						<h3 className="footer__title">Oferta</h3>
						<ul className="footer__links">
							<li>
								<Link to="/pompy-ciepla">Pompy ciepła</Link>
							</li>
							<li>
								<Link to="/fotowoltaika">Fotowoltaika</Link>
							</li>
							<li>
								<Link to="/klimatyzacja">Klimatyzacja</Link>
							</li>
							<li>
								<Link to="/wentylacje">Wentylacje</Link>
							</li>
							<li>
								<Link to="/ogrzewanie-podlogowe">Ogrzewanie podłogowe</Link>
							</li>
							<li>
								<Link to="/wod-kan">Instalacje Wod-Kan</Link>
							</li>
						</ul>
					</div>

					{/* Kolumna 4: Kontakt */}
					<div className="footer__col footer__col--contact">
						<h3 className="footer__title">Dane kontaktowe</h3>
						<ul className="footer__contact-info">
							<li>
								<FaMapMarkerAlt className="icon" />
								<div className="info">
									<span>ul. Krakowska 13</span>
									<span>50-424 Wrocław</span>
								</div>
							</li>
							<li>
								<FaPhoneAlt className="icon" />
								<div className="info">
									<a href="tel:+48882962882">+48 882 962 882</a>
								</div>
							</li>
							<li>
								<FaEnvelope className="icon" />
								<div className="info">
									<a href="mailto:w.jedrzejewski@eco-sys.pl">
										w.jedrzejewski@eco-sys.pl
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* Dolny pasek z copyrightem */}
				<div className="footer__bottom">
					<p>
						&copy; {currentYear} ECO-SYS Wojciech Jędrzejewski. Wszelkie prawa
						zastrzeżone.
					</p>
					<div className="footer__bottom-links">
						<Link
							to="/polityka_prywatnosci.pdf"
							target="_blank"
							rel="noopener noreferrer">
							Polityka prywatności
						</Link>
						<Link to="/regulamin">Regulamin</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
