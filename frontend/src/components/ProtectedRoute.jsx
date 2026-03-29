import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // <-- UŻYWAMY USE-NAVIGATE
import api from "../utils/api";

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
  const navigate = useNavigate(); // <-- HOOK DO PRZEKIEROWAŃ W TLE
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    let alive = true;

    const checkSession = async () => {
      try {
        // To jest to zapytanie, które Chrome pokazuje jako "api"
        await api.get("/auth/me");
        if (alive) setStatus("authed");
      } catch (err) {
        if (alive) {
          setStatus("guest");
          // OTO MAGIA: Od razu w bloku błędu uciekamy na stronę logowania!
          navigate("/admin/login", {
            state: { from: location },
            replace: true,
          });
        }
      }
    };

    checkSession();

    return () => {
      alive = false;
    };
  }, [navigate, location]);

  if (status === "checking") {
    return <SimpleLoader />;
  }

  // Jeśli jesteś 'guest', zwracamy nic (null), bo funkcja navigate() wyżej
  // już wzięła Cię za fraki i przenosi na stronę logowania.
  if (status === "guest") {
    return null;
  }

  return children;
}
