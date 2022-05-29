const mongoose = require("mongoose");

function toLower(v) {
  return v.toLowerCase();
}

const order_schema = new mongoose.Schema({
  name: { type: String, set: toLower, required: true },
  mobile: {
       
    type: Number,
    required: [true, "mobile number must be unique"],
    unique: true,
    maxlength: [10, "mobile number should be of 10 numbers"],
    minlength: [10, "mobile number should be of 10 numbers"],
  },
  book_id: { type: mongoose.Types.ObjectId, ref: "book", unique: true },
  order_date: { type: Date, default: Date.now() },
  return_date:  {type:Date} 


});

const orderbooks = mongoose.model("order", order_schema);

module.exports = orderbooks;
