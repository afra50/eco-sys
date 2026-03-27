const sharp = require("sharp");
const path = require("path");
const fs = require("fs").promises; // Wersja obsługująca async/await

const uploadsDir = path.join(__dirname, "../uploads");

// 1. POBIERANIE ZDJĘĆ (Zamiast z bazy, czytamy folder)
exports.getImages = async (req, res) => {
  try {
    // Sprawdzamy czy folder istnieje, jak nie to tworzymy
    await fs.mkdir(uploadsDir, { recursive: true });

    // Czytamy zawartość folderu
    const files = await fs.readdir(uploadsDir);

    // Filtrujemy tylko pliki graficzne (np. w formacie webp) i tworzymy linki do nich
    const images = files
      .filter((file) => file.match(/\.(webp|jpeg|jpg|png)$/i))
      .map((file) => ({
        name: file,
        url: `http://localhost:5000/api/uploads/${file}`,
      }));

    // Zwracamy posortowane od najnowszego (jeśli nazwa zawiera timestamp)
    images.sort((a, b) => b.name.localeCompare(a.name));

    res.json(images);
  } catch (error) {
    console.error("Błąd odczytu galerii:", error);
    res.status(500).json({ error: "Nie udało się pobrać galerii" });
  }
};

// 2. WGRYWANIE ZDJĘĆ Z KOMPRESJĄ SHARP
exports.uploadImages = async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "Brak plików do wgrania" });
  }

  try {
    await fs.mkdir(uploadsDir, { recursive: true });
    const uploadedImages = [];

    // Przechodzimy przez każdy wgrany plik (bo to array)
    for (const file of req.files) {
      // Unikalna nazwa: timestamp + losowy numer + .webp
      const filename = `gallery-${Date.now()}-${Math.round(Math.random() * 1e9)}.webp`;
      const filepath = path.join(uploadsDir, filename);

      // Kompresja Sharp:
      // - Zmiana szerokości na max 1920px (jeśli większe)
      // - Konwersja na super lekki format WEBP (jakość 80%)
      await sharp(file.buffer)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(filepath);

      uploadedImages.push({
        name: filename,
        url: `http://localhost:5000/api/uploads/${filename}`,
      });
    }

    res.status(201).json({
      message: "Zdjęcia zostały pomyślnie wgrane i skompresowane.",
      images: uploadedImages,
    });
  } catch (error) {
    console.error("Błąd kompresji/zapisu:", error);
    res.status(500).json({ error: "Błąd podczas przetwarzania zdjęć" });
  }
};

// 3. USUWANIE ZDJĘCIA Z DYSKU
exports.deleteImage = async (req, res) => {
  const { filename } = req.params;
  const filepath = path.join(uploadsDir, filename);

  try {
    // fs.unlink usuwa fizycznie plik z dysku
    await fs.unlink(filepath);
    res.json({ message: "Zdjęcie zostało usunięte" });
  } catch (error) {
    // Błąd "ENOENT" oznacza, że pliku nie ma na dysku
    if (error.code === "ENOENT") {
      return res.status(404).json({ error: "Nie znaleziono takiego zdjęcia" });
    }
    console.error("Błąd usuwania:", error);
    res.status(500).json({ error: "Nie udało się usunąć zdjęcia" });
  }
};
