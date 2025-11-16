import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const addBook = async (req, res) => {
  try {
    const { name, price, category, image, title } = req.body;

    // Validation (Optional but recommended)
    if (!name || !price || !category || !title) {
      return res.status(400).json({
        success: false,
        message: "Please provide required fields",
      });
    }

    const newBook = await Book.create({
      name,
      price,
      category,
      image,
      title,
    });

    return res.status(201).json({
      success: true,
      message: "Book added successfully!",
      data: newBook,
    });
  } catch (error) {
    console.error("Error adding book:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};