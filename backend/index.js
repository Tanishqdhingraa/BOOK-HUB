// server.js
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from "./controllers/usercontroller.js";  // <-- added .js

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.MongoDBURI;

// Middleware
app.use(express.json());
app.use(cors());



app.post("/user",createUser)

// MongoDB connection
async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // stop server if DB fails
  }
}
connectDB();

app.get("/", (req, res) => {
  res.send("🚀 Express server is running and MongoDB is connected");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
