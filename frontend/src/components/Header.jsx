import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

// Importujemy Twoje prawdziwe logo
import logo from "../assets/logo-eco-sys.webp";
import "../styles/components/header.scss";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [location]);

  const toggleMobileDropdown = (menuName) => {
    if (mobileDropdown === menuName) {
      setMobileDropdown(null);
    } else {
      setMobileDropdown(menuName);
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* LOGO */}
        <Link to="/" className="header__logo">
          <img src={logo} alt="Eco-sys Logo" />
        </Link>

        {/* NAWIGACJA CENTRUM */}
        <nav
          className={`header__nav ${isMobileMenuOpen ? "header__nav--active" : ""}`}
        >
          <ul className="header__menu">
            {/* DLA KLIENTA */}
            <li className="header__menu-item">
              <div
                className="header__menu-link-wrapper"
                onClick={() => toggleMobileDropdown("klient")}
              >
                <span className="header__menu-link">
                  Dla Klienta{" "}
                  <FaChevronDown
                    className={`chevron ${mobileDropdown === "klient" ? "rotate" : ""}`}
                  />
                </span>
              </div>
              <ul
                className={`header__dropdown ${mobileDropdown === "klient" ? "open" : ""}`}
              >
                <li>
                  <NavLink to="/pompy-ciepla">Pompy ciepła</NavLink>
                </li>
                <li>
                  <NavLink to="/fotowoltaika">Fotowoltaika</NavLink>
                </li>
                <li>
                  <NavLink to="/klimatyzacja">Klimatyzacje</NavLink>
                </li>
                <li>
                  <NavLink to="/ogrzewanie-podlogowe">
                    Ogrzewanie podłogowe
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/wentylacje">Wentylacje</NavLink>
                </li>
                <li>
                  <NavLink to="/wod-kan">Instalacje Wod-Kan</NavLink>
                </li>
              </ul>
            </li>

            {/* DLA PRZEMYSŁU */}
            <li className="header__menu-item">
              <div
                className="header__menu-link-wrapper"
                onClick={() => toggleMobileDropdown("przemysl")}
              >
                <span className="header__menu-link">
                  Dla Przemysłu{" "}
                  <FaChevronDown
                    className={`chevron ${mobileDropdown === "przemysl" ? "rotate" : ""}`}
                  />
                </span>
              </div>
              <ul
                className={`header__dropdown ${mobileDropdown === "przemysl" ? "open" : ""}`}
              >
                <li>
                  <NavLink to="/fotowoltaika">Farmy fotowoltaiczne</NavLink>
                </li>
                <li>
                  <NavLink to="/klimatyzacja">Klimatyzacja przemysłowa</NavLink>
                </li>
                <li>
                  <NavLink to="/wentylacja">Wentylacja przemysłowa</NavLink>
                </li>
                <li>
                  <NavLink to="/wod-kan">Wod-Kan</NavLink>
                </li>
              </ul>
            </li>

            <li className="header__menu-item">
              <NavLink to="/galeria" className="header__menu-link">
                Galeria
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/o-nas" className="header__menu-link">
                O nas
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/kontakt" className="header__menu-link">
                Kontakt
              </NavLink>
            </li>
          </ul>

          {/* Kontakt mobilny (wyświetla się pod menu na telefonie) */}
          <div className="header__mobile-contact">
            <a href="tel:+48882962882">
              <FaPhoneAlt /> +48 882 962 882
            </a>
            <a href="mailto:w.jedrzejewski@eco-sys.pl">
              <FaEnvelope /> w.jedrzejewski@eco-sys.pl
            </a>
          </div>
        </nav>

        {/* KONTAKT PO PRAWEJ STRONIE (Desktop) + Burger */}
        <div className="header__actions">
          <div className="header__contact-desktop">
            <a href="tel:+48882962882" className="contact-link">
              <FaPhoneAlt className="icon" /> +48 882 962 882
            </a>
            <a href="mailto:w.jedrzejewski@eco-sys.pl" className="contact-link">
              <FaEnvelope className="icon" /> w.jedrzejewski@eco-sys.pl
            </a>
          </div>

          <button
            className="header__burger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
