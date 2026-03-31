import { AlertTriangle, RefreshCw } from "lucide-react";
import Button from "./Button";
import "../../styles/components/ui/errorstate.scss";

const ErrorState = ({
  title = "Coś poszło nie tak",
  message = "Nie udało się załadować danych. Spróbuj odświeżyć stronę.",
  onRetry,
}) => {
  return (
    <div className="error-state">
      <div className="error-state__content">
        <div className="error-state__icon">
          <AlertTriangle size={48} />
        </div>
        <h2 className="error-state__title">{title}</h2>
        <p className="error-state__message">{message}</p>

        {onRetry && (
          <Button
            variant="outline-dark"
            onClick={onRetry}
            className="error-state__button"
          >
            <RefreshCw size={18} />
            Spróbuj ponownie
          </Button>
        )}
      </div>
    </div>
  );
};

export default ErrorState;
