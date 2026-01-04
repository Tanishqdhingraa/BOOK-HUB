import express from "express";
import { signup, login } from "../controller/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login",authMiddleware, login);

export default router;