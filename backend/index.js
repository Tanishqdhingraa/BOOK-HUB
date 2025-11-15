import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";   // ✅ FIXED — added user route

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// const uri = process.env.MongoDBURI;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/book", bookRoute);   // http://localhost:5000/book
app.use("/user", userRoute);   // http://localhost:5000/user

app.get("/",()=>{
  res.json("running no issues ")
  
})
// MongoDB connection
async function connectDB() {
  try {
    await mongoose.connect(process.env.MongoDBURI);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
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
