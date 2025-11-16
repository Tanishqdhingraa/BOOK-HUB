import express from "express";
import { getBook,addBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/getbook", getBook);
router.post("/postbook", addBook);

export default router;