const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { auth } = require("../middleware/authMiddleware");

// Publiczne
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/refresh", authController.refresh);

// Chronione (wymaga ważnego auth_token)
router.get("/me", auth, authController.checkAuth);

module.exports = router;
