import React, { useState, useEffect, useRef } from "react";
import { UploadCloud, Trash2, Image as ImageIcon, X } from "lucide-react";
import Button from "../../components/ui/Button";
import Loader from "../../components/ui/Loader";
import ErrorState from "../../components/ui/ErrorState";
import ConfirmDialog from "../../components/ui/ConfirmDialog";
import { galleryApi } from "../../utils/api";
import toast from "react-hot-toast";
import "../../styles/pages/admin/admingallery.scss";

const AdminGallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const [deleteDialog, setDeleteDialog] = useState({
    isOpen: false,
    filename: null,
  });
  const [isDeleting, setIsDeleting] = useState(false);

  // 1. POBIERANIE ZDJĘĆ
  const fetchGallery = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const res = await galleryApi.getAll();
      setImages(res.data);
    } catch (error) {
      console.error("Błąd pobierania:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // 2. OBSŁUGA WYBORU PLIKÓW
  const handleFiles = (files) => {
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 5 MB w bajtach
    const validFiles = [];

    let hasTypeError = false;
    let hasSizeError = false;

    Array.from(files).forEach((file) => {
      // 1. Sprawdzamy czy to obraz
      if (!file.type.startsWith("image/")) {
        hasTypeError = true;
      }
      // 2. Sprawdzamy rozmiar pliku (max 5MB)
      else if (file.size > MAX_FILE_SIZE) {
        hasSizeError = true;
      }
      // 3. Jeśli wszystko OK, dodajemy do listy
      else {
        validFiles.push(file);
      }
    });

    // Wyświetlamy dedykowane powiadomienia (Toasty)
    if (hasTypeError) {
      toast.error("Niektóre pliki nie są obrazami i zostały odrzucone.");
    }

    if (hasSizeError) {
      toast.error("Zdjęcie jest za duże! Maksymalny rozmiar pliku to 10 MB.");
    }

    // Zapisujemy tylko te pliki, które przeszły walidację
    if (validFiles.length > 0) {
      setSelectedFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);

      // TA JEDNA LINIJKA ROZWIĄZUJE PROBLEM:
      // Zerujemy pamięć inputa, dzięki czemu ponowne wybranie tych samych plików zadziała
      e.target.value = null;
    }
  };

  const removeSelectedFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // 3. DRAG & DROP LOGIC
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  // 4. WYSYŁKA NA BACKEND
  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    setIsUploading(true);
    const loadingToast = toast.loading(
      `Wgrywanie ${selectedFiles.length} zdjęć...`,
    );

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("images", file); // "images" musi zgadzać się z upload.array('images') na backendzie
    });

    try {
      await galleryApi.upload(formData);
      toast.success("Zdjęcia zostały dodane!", { id: loadingToast });
      setSelectedFiles([]); // Czyścimy listę po sukcesie
      fetchGallery(); // Odświeżamy listę zdjęć
    } catch (error) {
      console.error("Błąd uploadu:", error);
      toast.error("Błąd podczas wgrywania zdjęć.", { id: loadingToast });
    } finally {
      setIsUploading(false);
    }
  };

  // Zmieniona funkcja otwierająca dialog zamiast confirm()
  const openDeleteDialog = (filename) => {
    setDeleteDialog({ isOpen: true, filename });
  };

  const closeDeleteDialog = () => {
    setDeleteDialog({ isOpen: false, filename: null });
  };

  // Właściwa funkcja usuwania
  const handleDelete = async () => {
    const filename = deleteDialog.filename;
    if (!filename) return;

    setIsDeleting(true);
    const loadingToast = toast.loading("Usuwanie zdjęcia...");

    try {
      await galleryApi.delete(filename);
      setImages((prev) => prev.filter((img) => img.name !== filename));
      toast.success("Zdjęcie usunięte", { id: loadingToast });
      closeDeleteDialog();
    } catch (error) {
      toast.error("Błąd usuwania", { id: loadingToast });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="admin-gallery">
      <ConfirmDialog
        isOpen={deleteDialog.isOpen}
        title="Usuwanie zdjęcia"
        message={`Czy na pewno chcesz trwale usunąć plik ${deleteDialog.filename}? Akcja jest nieodwracalna.`}
        onConfirm={handleDelete}
        onCancel={closeDeleteDialog}
        isLoading={isDeleting}
      />

      <header className="admin-dashboard__intro">
        <h1>Zarządzanie galerią</h1>
        <p>Dodawaj nowe zdjęcia lub zarządzaj obecną kolekcją.</p>
      </header>

      <section className="admin-gallery__upload-section">
        <div
          className={`upload-zone ${dragActive ? "upload-zone--active" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={onFileChange}
            style={{ display: "none" }}
          />

          <UploadCloud className="upload-zone__icon" size={48} />
          <h3>Przeciągnij i upuść zdjęcia tutaj</h3>
          <p>lub kliknij przycisk poniżej</p>

          <div className="upload-zone__actions">
            <Button
              variant="outline-dark"
              type="button"
              onClick={() => fileInputRef.current.click()}
              disabled={isUploading}
            >
              Wybierz pliki
            </Button>

            {selectedFiles.length > 0 && (
              <Button
                variant="primary"
                type="button"
                onClick={handleUpload}
                isLoading={isUploading}
              >
                Wyślij ({selectedFiles.length})
              </Button>
            )}
          </div>
        </div>

        {/* PODGLĄD WYBRANYCH PLIKÓW PRZED WYSYŁKĄ */}
        {selectedFiles.length > 0 && (
          <div className="upload-preview-grid">
            <div className="upload-preview-grid__header">
              <h4>Pliki gotowe do wgrania ({selectedFiles.length})</h4>
              <button
                className="clear-all"
                onClick={() => setSelectedFiles([])}
              >
                Wyczyść wszystko
              </button>
            </div>
            <div className="upload-preview-grid__items">
              {selectedFiles.map((file, idx) => (
                <div key={idx} className="preview-card">
                  <div className="preview-card__image">
                    {/* Tworzymy tymczasowy podgląd zdjęcia */}
                    <img src={URL.createObjectURL(file)} alt="Podgląd" />
                    <button
                      className="preview-card__remove"
                      onClick={() => removeSelectedFile(idx)}
                      title="Usuń z kolejki"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="preview-card__name">
                    <span>{file.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="admin-gallery__list-section">
        <h2>Obecne zdjęcia ({images.length})</h2>

        {isLoading ? (
          <div style={{ padding: "60px 0" }}>
            <Loader />
          </div>
        ) : hasError ? (
          <ErrorState onRetry={fetchGallery} />
        ) : images.length === 0 ? (
          <div className="empty-gallery-msg">
            <p>Brak zdjęć w galerii.</p>
          </div>
        ) : (
          <div className="admin-gallery__grid">
            {images.map((img) => (
              <div key={img.name} className="admin-image-card">
                <div className="admin-image-card__preview">
                  <img src={img.url} alt={img.name} />
                  <button
                    className="admin-image-card__delete"
                    onClick={() => openDeleteDialog(img.name)} // Wywołujemy dialog
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                <div className="admin-image-card__info">
                  <ImageIcon size={16} />
                  <span className="file-name">{img.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminGallery;
