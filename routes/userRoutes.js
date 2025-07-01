const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const {
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", protect, adminOnly, getUsers); // Get all users (Admin only)
router.get("/:id", protect, getUserById); // Get a specific user
router.put("/:id", protect, updateUser); // Update user profile

module.exports = router;
