import express from "express";
import { createUser ,getUsers,
  getUserById,
  updateUser,
  deleteUser } from "../controllers/usercontroller";

const router = express.Router();

router.post("/", createUser);      // POST /user
router.get("/", getUsers);         // GET /user
router.get("/:id", getUserById);   // GET /user/:id
router.put("/:id", updateUser);    // PUT /user/:id
router.delete("/:id", deleteUser); // DELETE /user/:id

export default router;
