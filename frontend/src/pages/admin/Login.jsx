import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../utils/api"; // Upewnij się, że ścieżka jest poprawna
import Button from "../../components/ui/Button"; // Zaktualizowana ścieżka (według Twojej nowej struktury)
import "../../styles/pages/admin/login.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await authApi.login(credentials);
      // Po sukcesie ciasteczko HttpOnly ustawia się automatycznie, przekierowujemy do panelu
      navigate("/admin");
    } catch (err) {
      setError(err.response?.data?.error || "Błędny login lub hasło");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login__card">
        <div className="admin-login__header">
          <h1>Panel Admina</h1>
          <p>Zaloguj się do systemu ECO-SYS</p>
        </div>

        <form className="admin-login__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-group__label" htmlFor="username">
              Użytkownik
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-group__input"
              placeholder="Wpisz login"
              value={credentials.username}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label className="form-group__label" htmlFor="password">
              Hasło
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-group__input"
              placeholder="••••••••"
              value={credentials.password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          {/* Twój nowy przycisk Button sam obsłuży spinner dzięki isLoading */}
          <Button
            type="submit"
            variant="primary"
            className="admin-login__submit"
            isLoading={isLoading}
          >
            Zaloguj się
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
