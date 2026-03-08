import cloudinary from "../config/Datauri.js";
import streamifier from "streamifier";

export const uploadToCloudinary = (file, folder) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      return reject(new Error("No file provided for upload"));
    }

    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "auto",
        public_id: `${Date.now()}-${file.originalname.split(".")[0]}`,
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      }
    );

    streamifier.createReadStream(file.buffer).pipe(stream);
  });
};
