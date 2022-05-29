const Books = require("../models/booksModel");
const APIFeatures = require("../utils/apiFeatures");

exports.addBook = async (req, res) => {
  try {
    const books = await Books.create(req.body);
    res.status(200).json({
      status: "success",
      data: books,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const features = new APIFeatures(Books.find(), req.query)
      .filter()
      .paginate();

    const books = await features.query;
    res.status(200).json({
      status: "success",
      total: books.length,
      data: books,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};
