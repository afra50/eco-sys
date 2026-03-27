const express = require("express");
const router = express.Router();
const galleryController = require("../controllers/galleryController");
const { auth } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Middleware multera ustawiony na max 20 zdjęć naraz
const uploadGallery = upload.array("images", 20);

// --- TRASY GALERII ---

// Pobieranie zdjęć (Publiczne, bez auth, żeby frontend mógł to wyświetlić)
router.get("/", galleryController.getImages);

// Wgrywanie zdjęć (Tylko zalogowany admin)
router.post("/", auth, uploadGallery, galleryController.uploadImages);

// Usuwanie zdjęcia (Tylko zalogowany admin)
router.delete("/:filename", auth, galleryController.deleteImage);

module.exports = router;
