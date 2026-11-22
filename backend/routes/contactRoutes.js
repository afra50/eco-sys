const express = require("express");
const sendEmail = require("../utils/email");

const router = express.Router();

router.post("/", async (req, res) => {
	try {
		const { name, email, phone, subject, message } = req.body;

		if (!name || !email || !message) {
			return res.status(400).json({
				success: false,
				message:
					"Proszę wypełnić wszystkie wymagane pola (Imię, E-mail, Wiadomość).",
			});
		}

		const defaultSubject = message.includes("KALKULATORA REKUPERACJI")
			? "Zapytanie z kalkulatora rekuperacji – ECO-SYS"
			: "Nowe zapytanie z formularza kontaktowego – ECO-SYS";

		await sendEmail({
			name,
			email,
			phone,
			subject: subject || defaultSubject,
			message,
		});

		res.status(200).json({
			success: true,
			message: "Wiadomość została wysłana pomyślnie!",
		});
	} catch (error) {
		console.error("Błąd wysyłania emaila:", error);
		res.status(500).json({
			success: false,
			message:
				"Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.",
		});
	}
});

module.exports = router;
