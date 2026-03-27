import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import api from "../api"; // Upewnij się, że ścieżka do Twojego pliku api.js jest poprawna

// Prosty loader na wypadek, gdybyś nie miała jeszcze swojego komponentu
const SimpleLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <p>Weryfikacja uprawnień...</p>
  </div>
);

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    let alive = true;

    const checkSession = async () => {
      try {
        // Nasz endpoint /me, który zwraca { authenticated: true, user: {...} }
        await api.get("/auth/me");
        if (alive) setStatus("authed");
      } catch (err) {
        if (alive) setStatus("guest");
      }
    };

    checkSession();

    return () => {
      alive = false;
    };
  }, []);

  if (status === "checking") {
    return <SimpleLoader />;
  }

  if (status === "guest") {
    // Przekierowanie do logowania, zapamiętując skąd użytkownik przyszedł
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
}
