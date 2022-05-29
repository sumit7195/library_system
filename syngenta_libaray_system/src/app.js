const express = require("express");

const app = express();


const bookRouter =  require("./router/booksRoutes");
const orderRouter  = require("./router/orderRoutes")

// global middlewares
app.use(express.json());

//Routes
app.use("/api/v1/books", bookRouter)
app.use("/api/v1/orders", orderRouter)


module.exports =  app;



