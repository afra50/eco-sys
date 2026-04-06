import React from "react";
import "../styles/pages/contact.scss";

const Contact = () => {
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
						<form className="contact_form" onSubmit={(e) => e.preventDefault()}>
							<div className="form_group_row">
								<div className="form_group">
									<label className="form_label">Imię i nazwisko *</label>
									<input
										type="text"
										className="form_input"
										placeholder="Jan Kowalski"
										required
									/>
								</div>
								<div className="form_group">
									<label className="form_label">Telefon</label>
									<input
										type="tel"
										className="form_input"
										placeholder="+48 000 000 000"
									/>
								</div>
							</div>
							<div className="form_group">
								<label className="form_label">E-mail *</label>
								<input
									type="email"
									className="form_input"
									placeholder="email@example.com"
									required
								/>
							</div>
							<div className="form_group">
								<label className="form_label">Wiadomość *</label>
								<textarea
									className="form_textarea"
									placeholder="Napisz, w czym możemy pomóc..."
									required></textarea>
							</div>

							<label className="form_checkbox">
								<input
									type="checkbox"
									className="form_checkbox_input"
									required
								/>
								<span className="form_checkbox_mark"></span>
								<span className="form_checkbox_text">
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

							<button type="submit" className="btn_submit">
								Wyślij wiadomość
							</button>
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
							</p>
							<p className="contact_info_text">
								<strong>Godziny pracy</strong>
								<br />
								Pn - Pt: 8:00 - 16:00
							</p>
						</div>
						<div className="contact_info_map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.46580456105!2d17.04276707693998!3d51.10006277172382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe297836881c1%3A0xc028974a38d1d8a!2sKrakowska%2013A%2C%2050-424%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1711200000000!5m2!1spl!2spl"
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
