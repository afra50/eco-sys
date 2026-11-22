import React, { useState } from "react";
import api from "../../utils/api";
import Button from "../ui/Button";
import "../../styles/components/home/calculator.scss";

const Calculator = () => {
  // Stan parametrów technicznych
  const [area, setArea] = useState(150);
  const [floors, setFloors] = useState("1 kondygnacja");
  const [investmentType, setInvestmentType] = useState("Nowy budynek");
  const [anemostaty, setAnemostaty] = useState(false);

  // Stan formularza kontaktowego
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    clientType: "Dom prywatny",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Szacunkowa wydajność m3/h wyliczana dynamicznie pod powierzchnię
  const estimatedCapacity = Math.round((area * 2.33) / 10) * 10;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // Formatowanie danych z suwaków w czytelną treść maila dla backendu
    const formattedMessage = `
--- ZAPYTANIE Z KALKULATORA REKUPERACJI ---
Typ klienta: ${formData.clientType}
Powierzchnia budynku: ${area} m²
Liczba kondygnacji: ${floors}
Typ inwestycji: ${investmentType}
Szacunkowa wydajność urządzenia: ${estimatedCapacity} m³/h
Anemostaty gipsowe (sufit podwieszany): ${anemostaty ? "Tak" : "Nie"}

Dodatkowe uwagi:
${formData.notes || "Brak uwag"}
        `.trim();

    try {
      // Strzał do Twojego gotowego endpointu kontaktowego
      await api.post("/contact", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formattedMessage,
      });

      setIsSuccess(true);
    } catch (error) {
      console.error("Błąd wysyłki formularza audytu:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "Wystąpił błąd podczas wysyłania zapytania. Spróbuj ponownie lub zadzwoń do nas.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="calculator_section">
      <div className="calculator_card">
        <div className="calculator_header">
          <span className="calculator_accent_bar"></span>
          <h2>Kalkulator rekuperacji</h2>
        </div>

        {/* SUWAK POWIERZCHNI */}
        <div className="calc_group">
          <div className="calc_label_row">
            <label htmlFor="calc-area-range">Powierzchnia budynku</label>
            <span className="calc_value_highlight">{area} m²</span>
          </div>
          <input
            id="calc-area-range"
            type="range"
            min="50"
            max="500"
            step="5"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="calc_slider"
          />
          <div className="calc_slider_range">
            <span>50 m²</span>
            <span>500 m²</span>
          </div>
        </div>

        {/* KONDYGNACJE */}
        <div className="calc_group">
          <label className="calc_group_title">Liczba kondygnacji</label>
          <div className="calc_btn_group">
            {["1 kondygnacja", "2 kondygnacje", "3 kondygnacje"].map((item) => (
              <button
                key={item}
                type="button"
                className={`calc_select_btn ${floors === item ? "active" : ""}`}
                onClick={() => setFloors(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* TYP INWESTYCJI */}
        <div className="calc_group">
          <label className="calc_group_title">Typ inwestycji</label>
          <div className="calc_btn_group two_cols">
            {["Nowy budynek", "Modernizacja"].map((item) => (
              <button
                key={item}
                type="button"
                className={`calc_select_btn ${investmentType === item ? "active" : ""}`}
                onClick={() => setInvestmentType(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* OPCJE DODATKOWE */}
        <div className="calc_group">
          <label className="calc_group_title">Opcje dodatkowe</label>
          <label className="calc_checkbox_box">
            <input
              type="checkbox"
              checked={anemostaty}
              onChange={(e) => setAnemostaty(e.target.checked)}
            />
            <span>Anemostaty gipsowe (montaż w suficie podwieszanym)</span>
          </label>
        </div>

        {/* PODSUMOWANIE PARAMETRÓW */}
        <div className="calc_summary_box">
          <span className="calc_summary_tag">PARAMETRY TWOJEJ INSTALACJI</span>
          <div className="calc_summary_row">
            <span>Powierzchnia</span>
            <strong>{area} m²</strong>
          </div>
          <div className="calc_summary_row">
            <span>Kondygnacje</span>
            <strong>{floors.replace(/ kondygnacj[ae]/, "")}</strong>
          </div>
          <div className="calc_summary_row">
            <span>Typ inwestycji</span>
            <strong>{investmentType}</strong>
          </div>
          <div className="calc_summary_row">
            <span>Szacunkowa wydajność urządzenia</span>
            <strong>{estimatedCapacity} m³/h</strong>
          </div>
          <div className="calc_summary_row">
            <span>Anemostaty gipsowe</span>
            <strong>{anemostaty ? "Tak" : "Nie"}</strong>
          </div>
          <p className="calc_summary_note">
            Dokładna wycena uwzględni projekt instalacji, materiały i robociznę.
          </p>
        </div>

        <div className="calc_divider"></div>

        {/* FORMULARZ KONTAKTOWY */}
        {isSuccess ? (
          <div className="calc_success_box">
            <h3>Dziękujemy za przesłanie parametrów!</h3>
            <p>
              Wycena zostanie przygotowana i przesłana na podany adres e-mail w
              ciągu 1 godziny roboczej.
            </p>
          </div>
        ) : (
          <form className="calc_contact_form" onSubmit={handleSubmit}>
            <h3>Wyślij zapytanie o wycenę</h3>
            <p className="calc_form_desc">
              Gdy przygotujemy wycenę, prześlemy ją na Twój e-mail w ciągu 48h.
            </p>

            <div className="calc_form_grid">
              <div className="calc_field">
                <label htmlFor="calc-name">Imię i nazwisko *</label>
                <input
                  id="calc-name"
                  type="text"
                  name="name"
                  placeholder="Jan Kowalski"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="calc_field">
                <label htmlFor="calc-phone">Telefon *</label>
                <input
                  id="calc-phone"
                  type="tel"
                  name="phone"
                  placeholder="+48 ___ ___ ___"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="calc_field">
              <label htmlFor="calc-email">Adres e-mail *</label>
              <input
                id="calc-email"
                type="email"
                name="email"
                placeholder="jan@kowalski.pl"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="calc_field">
              <span className="calc_label_text">Typ klienta *</span>
              <div className="calc_radio_group">
                <label className="calc_radio_label">
                  <input
                    type="radio"
                    name="clientType"
                    value="Dom prywatny"
                    checked={formData.clientType === "Dom prywatny"}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                  Dom prywatny
                </label>
                <label className="calc_radio_label">
                  <input
                    type="radio"
                    name="clientType"
                    value="Firma"
                    checked={formData.clientType === "Firma"}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                  Firma
                </label>
              </div>
            </div>

            <div className="calc_field">
              <label htmlFor="calc-notes">Dodatkowe informacje</label>
              <textarea
                id="calc-notes"
                name="notes"
                rows="3"
                placeholder="Dodatkowe uwagi, pytania, adres inwestycji..."
                value={formData.notes}
                onChange={handleInputChange}
                disabled={isSubmitting}
              ></textarea>
            </div>

            {errorMessage && <p className="calc_error_text">{errorMessage}</p>}

            <Button
              type="submit"
              variant="primary"
              className="calc_submit_btn"
              isLoading={isSubmitting}
            >
              Wyślij zapytanie o wycenę &rarr;
            </Button>

            <span className="calc_privacy_text">
              Twoje dane są bezpieczne. Nie wysyłamy spamu.{" "}
              <a href="/polityka-prywatnosci">Polityka prywatności</a>
            </span>
          </form>
        )}
      </div>
    </section>
  );
};

export default Calculator;
