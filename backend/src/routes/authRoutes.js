const express = require("express");

const router = express.Router();
const { login ,register} = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

router.post("/login", login);

router.post(
  "/register",
  register
);

router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    admin: req.admin,
  });
});

module.exports = router;