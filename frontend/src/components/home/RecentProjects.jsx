import { useState, useEffect, useRef } from "react";
// Importujemy Slider
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Loader from "../ui/Loader";
import ErrorState from "../ui/ErrorState";
import { galleryApi } from "../../utils/api";
import "../../styles/components/home/recentprojects.scss";

// Awaryjne zdjęcia
import fallbackProj1 from "../../images/klim-1.webp";
import fallbackProj2 from "../../images/fotow-dach.webp";
import fallbackProj3 from "../../images/pompa-powietrzna.jpg";

// ROZWIĄZANIE BŁĘDU: Sprawdzamy czy Slider jest funkcją, czy ma właściwość .default
// To naprawia błąd "expected a string... but got: object"
const Slider = SlickSlider.default || SlickSlider;

// --- Własne komponenty strzałek ---
// React-slick wstrzykuje tu własne klasy i onClick, musimy je przyjąć
const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    className="recent_projects_arrow recent_projects_arrow--left"
    onClick={onClick}
    aria-label="Poprzednie zdjęcia"
  >
    <ChevronLeft size={32} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    type="button"
    className="recent_projects_arrow recent_projects_arrow--right"
    onClick={onClick}
    aria-label="Następne zdjęcia"
  >
    <ChevronRight size={32} />
  </button>
);

const RecentProjects = () => {
  const [fetchedImages, setFetchedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchRecentProjects = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const res = await galleryApi.getAll();
      const latestPhotos = res.data.reverse().slice(0, 9);
      setFetchedImages(latestPhotos);
    } catch (error) {
      console.error("Błąd pobierania realizacji:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentProjects();
  }, []);

  const defaultImages = [
    { url: fallbackProj1, name: "fallback-1" },
    { url: fallbackProj2, name: "fallback-2" },
    { url: fallbackProj3, name: "fallback-3" },
  ];

  const displayImages =
    fetchedImages.length > 0 ? fetchedImages : defaultImages;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600, // Czas trwania samej animacji przejścia
    autoplay: true, // Włącza autoodtwarzanie
    autoplaySpeed: 3000, // Czas postoju między slajdami (3 sekundy)
    pauseOnHover: true, // Zatrzymuje przewijanie po najechaniu myszką
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true, // Pozwala na płynniejszy swipe palcem
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          arrows: false, // Na mobile lepiej zostawić sam swipe palcem
        },
      },
    ],
  };

  return (
    <section className="recent_projects">
      <div className="recent_projects_container">
        <div className="recent_projects_header">
          <div className="recent_projects_title_wrapper">
            <span className="recent_projects_label">Nasze realizacje</span>
            <h2 className="recent_projects_title">
              Zobacz jakość naszej pracy
            </h2>
          </div>
          <Button
            to="/galeria"
            variant="outline-dark"
            className="recent_projects_btn_desktop"
          >
            Wszystkie realizacje
          </Button>
        </div>

        <div className="recent_projects_content">
          {isLoading ? (
            <div className="recent_projects_status">
              <Loader message="Wczytywanie najnowszych realizacji..." />
            </div>
          ) : hasError ? (
            <div className="recent_projects_status">
              <ErrorState
                title="Błąd wczytywania"
                message="Nie udało się pobrać zdjęć z serwera."
                onRetry={fetchRecentProjects}
              />
            </div>
          ) : (
            <div className="recent_projects_slider_wrapper">
              <Slider {...sliderSettings}>
                {displayImages.map((img, index) => (
                  <div key={`${img.name}-${index}`}>
                    <div className="recent_projects_item">
                      <img
                        src={img.url}
                        alt={`Realizacja ECO-SYS ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>

        <Button
          to="/galeria"
          variant="outline-dark"
          className="recent_projects_btn_mobile"
        >
          Wszystkie realizacje
        </Button>
      </div>
    </section>
  );
};

export default RecentProjects;
