const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const multer = require("multer");

// Biblioteki bezpieczeństwa i optymalizacji
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");
const winston = require("winston");

// --- IMPORT TRAS ---
const authRoutes = require("./routes/authRoutes");
const galleryRoutes = require("./routes/galleryRoutes");

// --- KONFIGURACJA LOGGERA ---
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

const app = express();

// --- 1. PROXY & BEZPIECZEŃSTWO ---
app.set("trust proxy", 1);
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.disable("x-powered-by");
app.use(compression());
app.use(morgan("common"));

// --- 2. KONTROLA RUCHU ---
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  message: { error: "Zbyt wiele zapytań, spróbuj ponownie za 15 minut." },
});
const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 150,
  delayMs: (used, req) => (used - 150) * 500,
});

app.use("/api/", limiter);
app.use("/api/", speedLimiter);

// --- 3. MIDDLEWARE APLIKACJI ---
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true, // Kluczowe dla przesyłania ciastek auth_token
  }),
);

app.use(express.json());
app.use(cookieParser()); // Kluczowe dla odczytu ciastek w authRoutes

app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));

// --- 4. TRASY (ROUTES) ---

// Testowy endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Serwer działa poprawnie" });
});

app.use("/api/auth", authRoutes);
app.use("/api/gallery", galleryRoutes);

// --- 5. OBSŁUGA BŁĘDU 404 ---
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Błąd 404: Ścieżka ${req.originalUrl} nie istnieje.`,
  });
});

// --- 6. GLOBALNY HANDLER BŁĘDÓW ---
app.use((err, req, res, next) => {
  logger.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method}`,
  );

  if (err instanceof multer.MulterError) {
    return res
      .status(400)
      .json({ success: false, code: "UPLOAD_ERROR", message: err.message });
  }

  const statusCode = err.status || 500;
  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? "Wewnętrzny błąd serwera" : err.message,
    error:
      process.env.NODE_ENV === "development" ? err.stack : "Coś poszło nie tak",
  });
});

module.exports = app;
