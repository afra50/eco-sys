const multer = require("multer");

const storage = multer.memoryStorage(); // Trzymamy plik w pamięci RAM, żeby Sharp mógł go przetworzyć

const limits = {
  fileSize: 5 * 1024 * 1024, // Limit 5 MB na plik
};

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Dozwolone są tylko obrazy!"), false);
  }
};

const upload = multer({
  storage,
  limits,
  fileFilter,
});

module.exports = upload; // Eksportujemy prosto i czysto
