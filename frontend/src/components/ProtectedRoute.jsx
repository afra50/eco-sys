import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../utils/api";
import Loader from "./ui/Loader"; // <-- IMPORT NASZEGO NOWEGO LOADERA

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    let alive = true;

    const checkSession = async () => {
      try {
        await api.get("/auth/me");
        if (alive) setStatus("authed");
      } catch (err) {
        if (alive) {
          setStatus("guest");
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
    // <-- UŻYWAMY NOWEGO LOADERA Z OPCJĄ FULLPAGE
    return <Loader fullPage={true} message="Weryfikacja uprawnień..." />;
  }

  if (status === "guest") {
    return null;
  }

  return children;
}
