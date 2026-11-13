import React, { useState } from "react";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import "../styles/pages/about_us.scss";

// Importy zdjęć i dokumentów
import heroImage from "../images/onas.webp";
import img1 from "../images/about1.webp";
import img2 from "../images/about2.webp";
import doc1 from "../images/about7.webp";
import doc2 from "../images/about6.webp";
import cert1 from "../images/about5.webp";
import cert2 from "../images/about8.webp";
import cert3 from "../images/about9.webp";
import cert4 from "../images/about10.webp";
import cert5 from "../images/about11.webp";
import cert6 from "../images/about12.webp";

const AboutUs = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <main className="about_us">
      {/* HERO: Główne hasło wprowadzające */}
      <PageHero
        title="O nas"
        subtitle="Inżynieria HVAC dla domu i przemysłu"
        description="Łączymy wiedzę inżynierską z praktycznym podejściem do realizacji. Projektujemy, wykonujemy i dbamy o to, aby instalacje działały tak, jak powinny."
        images={[heroImage]}
      />

      {/* SEKCJA 1: Kim jesteśmy (Overlap Box) */}
      <section className="about_us_block about_us_block_hero">
        <div className="about_us_image">
          <img src={img1} alt="Zespół inżynierski ECO-SYS" />
        </div>
        <div className="about_us_contener about_us_overlap_box">
          <div className="about_us_overlap_content">
            <span className="about_us_label">Kim jesteśmy</span>
            <h2 className="about_us_subtitle">
              Wiedza inżynierska i <em>praktyka</em>
            </h2>
            <p className="about_us_text">
              Jesteśmy firmą inżynierską specjalizującą się w projektowaniu,
              wykonawstwie i modernizacji instalacji HVAC. Realizujemy zarówno
              instalacje dla domów i budynków mieszkalnych, jak i zaawansowane
              systemy dla obiektów komercyjnych oraz przemysłowych.
            </p>
          </div>
        </div>
      </section>

      {/* SEKCJA 2: Nasze podejście (Sekcja ze zdjęciem i plakietką) */}
      <section className="about_us_block">
        <div className="about_us_image about_us_image_with_badge">
          <div className="about_us_badge">
            <span className="about_us_badge_number">Kompleksowo</span>
            <span className="about_us_badge_text">HVAC</span>
          </div>
          <img src={img2} alt="Realizacja instalacji inżynieryjnych" />
        </div>
        <div className="about_us_contener">
          <span className="about_us_label">Indywidualne podejście</span>
          <h2 className="about_us_subtitle">
            Efektywność, niezawodność i komfort
          </h2>
          <p className="about_us_text" style={{ marginBottom: "1.2rem" }}>
            Do każdego projektu podchodzimy indywidualnie – analizujemy potrzeby
            obiektu, dobieramy odpowiednie rozwiązania i dbamy o ich prawidłowe
            wykonanie. Zależy nam nie tylko na sprawnym działaniu instalacji,
            ale również na jej efektywności i komforcie użytkowania.
          </p>
          <p className="about_us_text">
            Od pojedynczej instalacji w domu po kompleksowe rozwiązania dla
            przemysłu – zapewniamy fachową obsługę na każdym etapie inwestycji.
            Naszą siłą jest połączenie doświadczenia, wiedzy technicznej i
            odpowiedzialności za efekt końcowy.
          </p>
        </div>
      </section>

      {/* SEKCJA 3: 3 Kolumny oparte o hasło klienta "Projektujemy. Wykonujemy. Usprawniamy." */}
      <section className="about_us_features">
        <div className="about_us_features_grid">
          <div className="about_us_feature_item">
            <h3 className="about_us_feature_title">Projektujemy</h3>
            <p className="about_us_feature_desc">
              Dokładnie analizujemy specyfikę budynku i zapotrzebowanie, tworząc
              optymalne, energooszczędne plany dopasowane do rzeczywistych
              wymagań obiektu.
            </p>
          </div>
          <div className="about_us_feature_item">
            <h3 className="about_us_feature_title">Wykonujemy</h3>
            <p className="about_us_feature_desc">
              Współpracujemy z inwestorami, projektantami i wykonawcami.
              Gwarantujemy fachowy montaż poparty certyfikacją oraz pełną
              odpowiedzialność za realizację.
            </p>
          </div>
          <div className="about_us_feature_item">
            <h3 className="about_us_feature_title">Usprawniamy</h3>
            <p className="about_us_feature_desc">
              Modernizujemy istniejące układy i dbamy o ich bezawaryjność.
              Zapewniamy, aby każda instalacja osiągała najwyższą sprawność
              przez cały okres eksploatacji.
            </p>
          </div>
        </div>
      </section>

      {/* SEKCJA 4: Wiedza i Kwalifikacje (Dowód inżynieryjnego podejścia) */}
      <section className="about_us_qualifications">
        <div className="about_us_qualifications_container">
          <div className="about_us_qualifications_col">
            <h3 className="about_us_qualifications_title">Prace naukowe</h3>
            <p className="about_us_text">
              Działanie na korzyść klientów poparte jest wiedzą i publikacjami
              naukowymi. W swoim zapleczu posiadamy prace badawcze
              potwierdzające opłacalność oraz bilans zintegrowanych systemów OZE
              i HVAC.
            </p>
            <div className="about_us_qualifications_docs">
              <img
                src={doc1}
                alt="Okładka pracy inżynierskiej"
                onClick={() => setLightboxImage(doc1)}
              />
              <img
                src={doc2}
                alt="Okładka pracy magisterskiej"
                onClick={() => setLightboxImage(doc2)}
              />
            </div>
          </div>

          <div className="about_us_qualifications_col">
            <h3 className="about_us_qualifications_title">
              Prowadzenie projektów
            </h3>
            <p className="about_us_text">
              Zarządzamy realizacjami według międzynarodowej metodyki TenStep.
              Pozwala to zachować pełną kontrolę nad budżetem, harmonogramem
              oraz technicznymi wymaganiami inwestycji.
            </p>
            <div className="about_us_qualifications_docs">
              <img
                src={cert1}
                alt="Certyfikat Ten Step"
                onClick={() => setLightboxImage(cert1)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 5: Certyfikaty i autoryzacje */}
      <section className="about_us_certificates">
        <h2 className="about_us_certificates_title">Nasze autoryzacje</h2>
        <p className="about_us_certificates_text">
          Posiadamy świadectwa autoryzowanego instalatora czołowych producentów
          urządzeń na rynku. Regularne szkolenia techniczne gwarantują standardy
          zgodne z restrykcyjnymi wytycznymi branżowymi.
        </p>
        <div className="about_us_certificates_docs">
          <img
            src={cert2}
            alt="Autoryzacja 1"
            onClick={() => setLightboxImage(cert2)}
          />
          <img
            src={cert3}
            alt="Autoryzacja 2"
            onClick={() => setLightboxImage(cert3)}
          />
          <img
            src={cert4}
            alt="Autoryzacja 3"
            onClick={() => setLightboxImage(cert4)}
          />
          <img
            src={cert5}
            alt="Autoryzacja 4"
            onClick={() => setLightboxImage(cert5)}
          />
          <img
            src={cert6}
            alt="Autoryzacja 5"
            onClick={() => setLightboxImage(cert6)}
          />
        </div>
      </section>

      {/* SEKCJA 6: Call To Action */}
      <section className="about_us_cta">
        <h2 className="about_us_cta_title">
          Porozmawiajmy o projekcie Twojej instalacji
        </h2>
        <Button
          variant="primary"
          onClick={() => (window.location.href = "/kontakt")}
        >
          SKONTAKTUJ SIĘ Z INŻYNIEREM
        </Button>
      </section>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div
          className="about_us_lightbox"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="about_us_lightbox_content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="about_us_lightbox_close"
              onClick={() => setLightboxImage(null)}
            >
              &#10005;
            </button>
            <img src={lightboxImage} alt="Powiększony dokument" />
          </div>
        </div>
      )}
    </main>
  );
};

export default AboutUs;
