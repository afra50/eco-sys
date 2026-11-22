import React, { useState } from "react";
import Button from "../components/ui/Button";
import { contactApi } from "../utils/api";
import "../styles/components/forms.scss";
import "../styles/pages/contact.scss";

const MAP_URL = [
	"https://www.google.com/maps/embed",
	"?pb=!1m18!1m12!1m3!1d2505.46580456105!2d17.04276707693998",
	"!3d51.10006277172382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
	"!3m3!1m2!1s0x470fe297836881c1%3A0xc028974a38d1d8a",
	"!2sKrakowska%2013A%2C%2050-424%20Wroc%C5%82aw!5e0!3m2!1spl!2spl",
	"!4v1711200000000!5m2!1spl!2spl",
].join("");

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
		privacyAccepted: false,
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState({
		type: null,
		message: "",
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitStatus({ type: null, message: "" });

		if (!formData.privacyAccepted) {
			setSubmitStatus({
				type: "error",
				message: "Musisz zaakceptować politykę prywatności.",
			});
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await contactApi.sendMessage({
				name: formData.name,
				phone: formData.phone,
				email: formData.email,
				message: formData.message,
			});

			if (response.data.success) {
				setSubmitStatus({
					type: "success",
					message:
						"Wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe!",
				});
				setFormData({
					name: "",
					phone: "",
					email: "",
					message: "",
					privacyAccepted: false,
				});
			}
		} catch (error) {
			setSubmitStatus({
				type: "error",
				message:
					error.response?.data?.message ||
					"Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<main className="contact_wrapper">
			{/* Tło jako osobna warstwa, żeby nie przysłaniało tekstu */}
			<div className="contact_bg_spotlight"></div>

			<div className="contact_container">
				<header className="contact_header">
					<h1 className="contact_title">KONTAKT</h1>
					<p className="contact_subtitle">
						Masz pytania? Napisz do nas lub zadzwoń – chętnie pomożemy.
					</p>
				</header>

				<div className="contact_content">
					<div className="contact_form_box">
						<h2 className="contact_form_title">Napisz do nas</h2>

						{submitStatus.message && (
							<div
								className={`contact_status contact_status_${submitStatus.type}`}>
								{submitStatus.message}
							</div>
						)}

						<form className="contact_form" onSubmit={handleSubmit}>
							<div className="form_group_row">
								<div className="form-group">
									<label className="form-group__label">Imię i nazwisko *</label>
									<input
										type="text"
										name="name"
										value={formData.name}
										onChange={handleChange}
										className="form-group__input"
										placeholder="Jan Kowalski"
										required
										disabled={isSubmitting}
									/>
								</div>
								<div className="form-group">
									<label className="form-group__label">Telefon</label>
									<input
										type="tel"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										className="form-group__input"
										placeholder="+48 000 000 000"
										disabled={isSubmitting}
									/>
								</div>
							</div>
							<div className="form-group">
								<label className="form-group__label">E-mail *</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="form-group__input"
									placeholder="email@example.com"
									required
									disabled={isSubmitting}
								/>
							</div>

							{/* --- WRAPPER DLA ROZCIĄGANIA POLA WIADOMOŚCI --- */}
							<div className="form-group contact_textarea_wrapper">
								<label className="form-group__label">Wiadomość *</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									className="form-group__textarea contact_textarea_stretch"
									placeholder="Napisz, w czym możemy pomóc..."
									required
									disabled={isSubmitting}></textarea>
							</div>

							<label className="form-checkbox">
								<input
									type="checkbox"
									name="privacyAccepted"
									checked={formData.privacyAccepted}
									onChange={handleChange}
									className="form-checkbox__input"
									required
									disabled={isSubmitting}
								/>
								<span className="form-checkbox__mark"></span>
								<span className="form-checkbox__text">
									Zapoznałem/am się i akceptuję{" "}
									<a
										href="/polityka_prywatnosci.pdf"
										target="_blank"
										rel="noopener noreferrer"
										className="highlight">
										politykę prywatności
									</a>
								</span>
							</label>

							<div className="contact_submit_wrapper">
								<Button type="submit" disabled={isSubmitting}>
									{isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
								</Button>
							</div>
						</form>
					</div>

					<div className="contact_info_column">
						<div className="contact_info_box">
							<h3 className="contact_info_subtitle">Dane firmy</h3>
							<p className="contact_info_text">
								<strong>ECO-SYS</strong>
								<br />
								ul. Krakowska 13a
								<br />
								50-424 Wrocław
								<br />
								Polska
								<br />
								NIP: 8943030289
							</p>
							<p className="contact_info_text">
								<strong>Kontakt</strong>
								<br />
								Tel: +48 882 962 882
								<br />
								E-mail: w.jedrzejewski@eco-sys.pl
								<br />
								<a
									href="https://www.facebook.com/EcoSysPL"
									target="_blank"
									rel="noopener noreferrer"
									className="contact_social_link"
									aria-label="Facebook">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="contact_social_icon">
										<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
									</svg>
								</a>
							</p>
							<p className="contact_info_text">
								<strong>Godziny pracy</strong>
								<br />
								Pn - Pt: 8:00 - 16:00
							</p>
						</div>
						<div className="contact_info_map">
							<iframe
								src={MAP_URL}
								allowFullScreen=""
								loading="lazy"
								title="Mapa ECO-SYS"></iframe>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Contact;
