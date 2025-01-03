import express from "express";
import {
    loginUser,
    registerUser,
    updateUserProfile,
} from "../controllers/userController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

// User Routes
router.post("/login", loginUser);
router.post("/register", registerUser);
router.put("/profile", authenticate, updateUserProfile);

export default router;
