import express from "express";
import {
    addComment,
    updateComment,
    deleteComment,
    getCommentsByBlogId,
} from "../controllers/commentController.js";
import authenticate from "../middleware/authMiddleware.js";

const router = express.Router();

// Comment Routes
router.post("/", authenticate, addComment);
router.put("/:id", authenticate, updateComment);
router.delete("/:id", authenticate, deleteComment);
router.get("/:blogId", getCommentsByBlogId);

export default router;
