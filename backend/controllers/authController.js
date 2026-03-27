const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db"); // Upewnij się, że ścieżka do poola jest poprawna

const isProd = process.env.NODE_ENV === "production";

// Pomocnik do przeliczania czasu na milisekundy (dla ciasteczek)
const ms = (str) => {
  const n = parseInt(str, 10);
  if (str.endsWith("m")) return n * 60 * 1000;
  if (str.endsWith("h")) return n * 60 * 60 * 1000;
  if (str.endsWith("d")) return n * 24 * 60 * 60 * 1000;
  return n;
};

// Konfiguracja ciasteczek
const cookieBaseConfig = {
  httpOnly: true, // Blokuje dostęp JavaScriptowi (ochrona przed XSS)
  secure: isProd, // W produkcji wymaga HTTPS
  sameSite: "Lax", // Ochrona przed CSRF
};

const setAccessCookie = (res, token) => {
  res.cookie("auth_token", token, {
    ...cookieBaseConfig,
    path: "/",
    maxAge: ms(process.env.JWT_EXPIRES || "15m"),
  });
};

const setRefreshCookie = (res, token) => {
  res.cookie("refresh_token", token, {
    ...cookieBaseConfig,
    path: "/api/auth/refresh", // Token odświeżania wysyłany tylko do tego endpointu
    maxAge: ms(process.env.JWT_REFRESH_EXPIRES || "14d"),
  });
};

// --- ENDPOINTY ---

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // 1. Szukamy admina w bazie
    const [rows] = await db.execute("SELECT * FROM admin WHERE username = ?", [
      username,
    ]);
    const user = rows[0];

    // 2. Weryfikacja (nie zdradzamy czy login czy hasło jest błędne)
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Nieprawidłowe dane logowania" });
    }

    // 3. Generowanie tokenów
    const payload = { sub: user.id, role: "admin" };

    const access = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES || "15m",
    });
    const refresh = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRES || "14d",
    });

    // 4. Ustawienie ciasteczek
    setAccessCookie(res, access);
    setRefreshCookie(res, refresh);

    res.json({
      message: "Zalogowano pomyślnie",
      user: { id: user.id, username: user.username },
    });
  } catch (err) {
    console.error("Błąd logowania:", err);
    res.status(500).json({ error: "Błąd serwera" });
  }
};

exports.refresh = async (req, res) => {
  const rt = req.cookies?.refresh_token;
  if (!rt) return res.status(401).json({ error: "Brak tokenu odświeżania" });

  try {
    const payload = jwt.verify(rt, process.env.JWT_REFRESH_SECRET);

    // Generujemy nowy Access Token
    const newAccess = jwt.sign(
      { sub: payload.sub, role: payload.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES || "15m" },
    );

    setAccessCookie(res, newAccess);
    res.status(204).send(); // Sukces, brak treści
  } catch (err) {
    res.clearCookie("refresh_token", { path: "/api/auth/refresh" });
    return res.status(401).json({ error: "Sesja wygasła" });
  }
};

exports.logout = (req, res) => {
  res.clearCookie("auth_token", { path: "/" });
  res.clearCookie("refresh_token", { path: "/api/auth/refresh" });
  res.json({ message: "Wylogowano pomyślnie" });
};

exports.checkAuth = (req, res) => {
  // Ten endpoint wywoła middleware 'auth', więc req.user będzie już wypełniony
  res.json({
    authenticated: true,
    user: req.user,
  });
};
