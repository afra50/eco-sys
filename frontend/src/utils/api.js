import axios from "axios";

// Adres Twojego backendu (pobierany z .env lub domyślny)
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // KLUCZOWE: pozwala na wysyłanie i odbieranie ciasteczek HttpOnly
  headers: {
    "Content-Type": "application/json",
  },
});

// Mechanizm kolejkowania zapytań podczas odświeżania tokena
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

// --- INTERCEPTOR ODPOWIEDZI ---
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // 1. OCHRONA PRZED WYŁĄCZONYM SERWEREM (Zabezpieczenie przed pętlą!)
    if (!error.response) {
      console.error("Network/Server error. Is the backend running?");
      return Promise.reject(error); // Przerwij od razu, nie próbuj odświeżać tokena.
    }

    const originalRequest = error.config;

    // Jeśli błąd to 401 (Unauthorized) i nie ponawialiśmy jeszcze tego zapytania
    if (error.response?.status === 401 && !originalRequest._retry) {
      // Jeśli błąd wystąpił na logowaniu lub odświeżaniu - przerywamy (sesja wygasła definitywnie)
      if (
        originalRequest.url.includes("/auth/login") ||
        originalRequest.url.includes("/auth/refresh")
      ) {
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => api(originalRequest))
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Wywołujemy endpoint odświeżania, który ustawi nowe ciastko auth_token
        await api.post("/auth/refresh");

        processQueue(null);
        isRefreshing = false;

        return api(originalRequest); // Ponawiamy pierwotne zapytanie
      } catch (refreshError) {
        processQueue(refreshError, null);
        isRefreshing = false;

        // Tutaj opcjonalnie: window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

// ---- ENDPOINTY AUTORYZACJI ----
export const authApi = {
  login: (credentials) => api.post("/auth/login", credentials),
  logout: () => api.post("/auth/logout"),
  me: () => api.get("/auth/me"),
};

// ---- ENDPOINTY GALERII ----
export const galleryApi = {
  // Pobieranie wszystkich zdjęć
  getAll: () => api.get("/gallery"),

  // Wgrywanie zdjęć (wymaga obiektu FormData z plikami)
  upload: (formData) =>
    api.post("/gallery", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Nadpisujemy domyślny nagłówek JSON!
      },
    }),

  // Usuwanie konkretnego zdjęcia po nazwie pliku
  delete: (filename) => api.delete(`/gallery/${filename}`),
};

export default api;
