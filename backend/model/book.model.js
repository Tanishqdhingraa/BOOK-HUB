import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {   // Author Name
        type: String,
        required: true
    },
    title: {  // Book Title
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);
export default Book;
