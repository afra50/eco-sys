import { Loader2 } from "lucide-react";
import "../../styles/components/ui/loader.scss";

const Loader = ({ fullPage = false, message = "Ładowanie..." }) => {
  return (
    <div
      className={`loader-container ${fullPage ? "loader-container--full" : ""}`}
    >
      <div className="loader-content">
        <Loader2 className="loader-spinner" size={40} />
        {message && <p className="loader-text">{message}</p>}
      </div>
    </div>
  );
};

export default Loader;
