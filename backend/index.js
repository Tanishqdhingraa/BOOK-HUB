import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.get('/', (req, res) => {
  res.send('CHAL GYA BHAI ');
});

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI);
    console.log(" 🛜  Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}
//cloudinary set up 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// defining routes
app.use("/api/v1/book", bookRoute);
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
    console.log(`😎 Server is listening on port http://localhost:${PORT}`);
});