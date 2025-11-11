const express = require("express");
const { adminOnly, protect } = require("../middleware/authMiddleware");
const { getUsers, getUserById, DeleteUser } = require("../controllers/userController");

const router = express.Router();

//User Managements Routes
router.get("/", protect, adminOnly, getUsers); //Get all users (Admin Only)
router.get("/:id", protect, getUserById); // Get a Specific user



module.exports = router;