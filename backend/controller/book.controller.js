import Book from "../model/book.model.js";
// import Book from "../model/book.model.js";
// import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};





