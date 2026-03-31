import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ImageOff } from "lucide-react";
import { galleryApi } from "../utils/api";
import Loader from "../components/ui/Loader";
import ErrorState from "../components/ui/ErrorState";
import "../styles/pages/gallery.scss";

// Sub-komponent siatki
const GalleryImage = ({ src, alt, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`gallery__item ${isVisible ? "is-visible" : ""} ${hasError ? "has-error" : ""}`}
      onClick={!hasError ? onClick : undefined} // Blokujemy klikanie w zepsute zdjęcia
    >
      {/* ERROR STATE */}
      {hasError && (
        <div className="gallery__status gallery__status--error">
          <ImageOff size={40} />
          <span>Brak zdjęcia</span>
        </div>
      )}

      {/* OBRAZEK */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
      )}
    </div>
  );
};

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasFetchError, setHasFetchError] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(null);

  // Stany do obsługi wczytywania konkretnego zdjęcia w Lightboxie
  const [isLightboxLoaded, setIsLightboxLoaded] = useState(false);
  const [lightboxError, setLightboxError] = useState(false);

  // Pobieranie zdjęć z backendu
  const fetchGallery = async () => {
    setIsLoading(true);
    setHasFetchError(false);
    try {
      const res = await galleryApi.getAll();
      setImages(res.data);
    } catch (error) {
      console.error("Błąd pobierania galerii:", error);
      setHasFetchError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Blokowanie scrolla przy otwartym lightboxie
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      setIsLightboxLoaded(false);
      setLightboxError(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  // Klawiatura
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const showNext = () => {
    setIsLightboxLoaded(false);
    setLightboxError(false);
    setSelectedIndex((prev) => {
      let nextIndex = prev === images.length - 1 ? 0 : prev + 1;
      return nextIndex;
    });
  };

  const showPrev = () => {
    setIsLightboxLoaded(false);
    setLightboxError(false);
    setSelectedIndex((prev) => {
      let prevIndex = prev === 0 ? images.length - 1 : prev - 1;
      return prevIndex;
    });
  };

  // Obsługa ładowania całej strony
  if (isLoading) {
    return (
      <div
        className="gallery-page"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader message="Wczytywanie galerii..." />
      </div>
    );
  }

  // Obsługa błędu pobierania
  if (hasFetchError) {
    return (
      <div className="gallery-page">
        <div className="gallery-page__container" style={{ paddingTop: "60px" }}>
          <ErrorState
            title="Błąd połączenia"
            message="Nie udało się wczytać galerii. Spróbuj odświeżyć stronę."
            onRetry={fetchGallery}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-page">
      <div className="gallery-page__container">
        <header className="gallery-page__header">
          <h1>Nasze realizacje</h1>
          <div className="separator"></div>
        </header>

        {/* Informacja o braku zdjęć */}
        {images.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              color: "rgba(0,0,0,0.5)",
              marginTop: "40px",
              fontFamily: "inherit",
            }}
          >
            Brak zdjęć do wyświetlenia.
          </div>
        ) : (
          <div className="gallery__grid">
            {images.map((image, index) => (
              <GalleryImage
                key={image.name} // Używamy unikalnej nazwy z backendu jako klucza
                src={image.url}
                alt={`Realizacja ECO-SYS ${index + 1}`}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && images.length > 0 && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="gallery-lightbox__close"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={32} />
          </button>

          <button
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            <ChevronLeft size={40} />
          </button>

          <div
            className="gallery-lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* PUSTY PLACEHOLDER PODCZAS ŁADOWANIA */}
            {!isLightboxLoaded && !lightboxError && (
              <div className="gallery-lightbox__placeholder"></div>
            )}

            {/* ERROR W LIGHTBOXIE */}
            {lightboxError && (
              <div className="gallery-lightbox__placeholder gallery-lightbox__placeholder--error">
                <ImageOff size={48} />
                <span>Zdjęcie niedostępne</span>
              </div>
            )}

            {/* WŁAŚCIWY OBRAZEK LIGHTBOXA */}
            {!lightboxError && (
              <img
                key={selectedIndex}
                src={images[selectedIndex].url}
                alt={`Realizacja ${selectedIndex + 1}`}
                className="lightbox-img-animated"
                style={{ display: isLightboxLoaded ? "block" : "none" }} // Ukrywamy obrazek zanim się wczyta
                onLoad={() => setIsLightboxLoaded(true)}
                onError={() => {
                  setLightboxError(true);
                  setIsLightboxLoaded(true);
                }}
              />
            )}

            <div className="gallery-lightbox__counter">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>

          <button
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
