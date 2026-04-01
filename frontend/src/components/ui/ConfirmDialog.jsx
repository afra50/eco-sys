import React from "react";
import { AlertTriangle, X } from "lucide-react";
import Button from "./Button";
import "../../styles/components/ui/confirmdialog.scss";

const ConfirmDialog = ({
  isOpen,
  title = "Czy jesteś pewien?",
  message,
  onConfirm,
  onCancel,
  confirmText = "Usuń",
  cancelText = "Anuluj",
  isLoading = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="confirm-overlay" onClick={onCancel}>
      <div className="confirm-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="confirm-dialog__close" onClick={onCancel}>
          <X size={20} />
        </button>

        <div className="confirm-dialog__content">
          <div className="confirm-dialog__icon">
            <AlertTriangle size={32} />
          </div>
          <h3 className="confirm-dialog__title">{title}</h3>
          <p className="confirm-dialog__message">{message}</p>
        </div>

        <div className="confirm-dialog__actions">
          <Button
            variant="outline-dark"
            onClick={onCancel}
            disabled={isLoading}
          >
            {cancelText}
          </Button>
          <Button variant="primary" onClick={onConfirm} isLoading={isLoading}>
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
