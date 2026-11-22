const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: Number(process.env.EMAIL_PORT),
		secure: process.env.EMAIL_SECURE === "true",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	const mailOptions = {
		from: `Formularz ECO-SYS <${process.env.EMAIL_USER}>`,
		to: process.env.EMAIL_USER,
		replyTo: options.email,
		subject: options.subject || "Nowe zapytanie ze strony ECO-SYS",
		text: [
			"Otrzymałeś nową wiadomość ze strony ECO-SYS.",
			"",
			`Imię i nazwisko: ${options.name}`,
			`E-mail: ${options.email}`,
			`Telefon: ${options.phone || "Nie podano"}`,
			"",
			"Treść wiadomości:",
			options.message,
		].join("\n"),
	};

	await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
