const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  createPage,
  getPages,
  getPage,
  updatePage,
  deletePage,
  getPageBySlug,
} = require("../controllers/pageController");


router.get("/slug/:slug", getPageBySlug);
router.post("/", protect, createPage);
router.get("/", getPages);
router.get("/:id", protect, getPage);
router.put("/:id", protect, updatePage);
router.delete("/:id", protect, deletePage);

module.exports = router