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

// --- KONFIGURACJA LOGGERA (Winston) ---
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
app.set("trust proxy", 1); // Ważne, jeśli serwer stoi za proxy (np. Nginx, Heroku)

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  }),
);

app.disable("x-powered-by"); // Ukrywa informację, że używasz Expressa
app.use(compression()); // Kompresuje odpowiedzi Gzip
app.use(morgan("common")); // Loguje zapytania w formacie Apache common

// --- 2. KONTROLA RUCHU (Rate Limiting) ---
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minut
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
    credentials: true, // Obsługa ciasteczek/JWT
  }),
);

app.use(express.json());
app.use(cookieParser());

// Serwowanie plików statycznych (np. zdjęcia produktów)
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));

// --- 4. TRASY (ROUTES) ---

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Serwer działa poprawnie" });
});

// Tutaj zaimportuj swoje trasy:
// const authRoutes = require("./routes/authRoutes");
// app.use("/api/auth", authRoutes);

// --- 5. OBSŁUGA BŁĘDU 404 (NIE ZNALEZIONO) ---
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Błąd 404: Ścieżka ${req.originalUrl} nie istnieje.`,
  });
});

// --- 6. GLOBALNY HANDLER BŁĘDÓW 500 (INTERNAL SERVER ERROR) ---
app.use((err, req, res, next) => {
  // Logowanie błędu do pliku/konsoli
  logger.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method}`,
  );

  // Specyficzna obsługa błędów Multer
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      code: "UPLOAD_ERROR",
      message: err.message,
    });
  }

  // Odpowiedź końcowa
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? "Wewnętrzny błąd serwera" : err.message,
    // Stack trace widoczny tylko w trybie deweloperskim
    error:
      process.env.NODE_ENV === "development" ? err.stack : "Coś poszło nie tak",
  });
});

module.exports = app;
