const mongoose = require("mongoose")

const book_schema =  new mongoose.Schema({
    _id: mongoose.ObjectId ,
    title: {type: String, required: true},
    author : {type: String, required: true},
    category : {type: String, required:true},
    status :  {type:String, default:true,}

})



book_schema.pre(/^find/, function (next) {
  this.find({ status: { $ne: false } });

  next();
});












const book = mongoose.model("book", book_schema);







module.exports = book;

