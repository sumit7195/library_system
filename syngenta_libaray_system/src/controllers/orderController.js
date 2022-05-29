const Orders = require("../models/orderedModel");
const books = require("../models/booksModel");

exports.orderBooks = async (req, res) => {
  try {
    const book = await books.findByIdAndUpdate(req.body.book_id, {
      status: false,
    });

    const order = await Orders.create(req.body);

    res.status(201).json({
      status: "success",
      order: order,
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.book_id === 1) {
      res.status(404).json({
        status: "fail",
        error: "book already assigned to other user",
      });

      //   console.log(error);
    } else if (error.code === 11000) {
      res.status(404).json({
        status: "fail",
        error: "Duplicates entries",
      });
    } else {
      res.status(404).json({
        error: error,
        status: "fail",
      });
    }
  }
};

exports.returnBooks = async (req, res) => {
  try {
    const id = req.params.id;
    let bookId;

    const order = await Orders.findByIdAndUpdate(id, {
      return_date: Date.now(),
    }).lean();

    bookId = order.book_id;
    const el = await books.findById(bookId);

    res.status(200).json({
      status: "success",
      data: order,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error: error,
    });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Orders.find({}).exec();

    res.status(200).json({
      status: "success",
      results: orders.length,
      data: orders,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error: error,
    });
  }
};
