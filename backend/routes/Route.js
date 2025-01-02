// Importing dependencies
import express from "express";
import userRoutes from "./userRoutes.js";
// import blogRoutes from "./blogRoutes.js";
// import commentRoutes from "./commentRoutes.js";
// import likeRoutes from "./likeRoutes.js";
// import notificationRoutes from "./notificationRoutes.js";

const router = express.Router();

// Setting up routes
router.use("/users", userRoutes);
// router.use("/blogs", blogRoutes);
// router.use("/comments", commentRoutes);
// router.use("/likes", likeRoutes);
// router.use("/notifications", notificationRoutes);

export default router;
