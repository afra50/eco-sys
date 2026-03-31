import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import routes from "./routes";

import "./styles/components/ui/toast.scss";

// Ta funkcja zajmuje się renderowaniem odpowiedniej strony z routes.jsx
function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* GLOBALNY KONTENER POWIADOMIEŃ */}
      <Toaster
        position="top-center"
        toastOptions={{
          className: "eco-toast",
          duration: 3000,
          style: {
            maxWidth: "500px",
          },
          success: {
            className: "eco-toast eco-toast--success",
            // Wymuszamy kolor ikonki sukcesu na ten sam co ramka
            iconTheme: {
              primary: "#10B981", // Szmaragdowa zieleń
              secondary: "#fff", // Kolor białego ptaszka w środku
            },
          },
          error: {
            className: "eco-toast eco-toast--error",
            // Jeśli chcesz, żeby błąd też miał spójną ikonkę,
            // wpisz tu HEX swojego czerwonego $color-secondary (np. '#E53935')
            /*
            iconTheme: {
              primary: '#TWÓJ_CZERWONY_HEX',
              secondary: '#fff',
            },
            */
          },
        }}
      />

      <div className="App">
        <Header />

        <AppRoutes />

        <Footer />
      </div>
    </Router>
  );
}
