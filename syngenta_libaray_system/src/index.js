const app =  require("./app");

const  mongoose = require("mongoose");


const port = 3001


app.listen(port, async()=>{

   mongoose
     .connect(
       "mongodb+srv://sumit624:sumit123@cluster0.kcxcylm.mongodb.net/?retryWrites=true&w=majority"
     )
     .then(console.log("DB is connected successfully"))
     .catch((error) => {
       console.log(error);
     });


   console.log(`server  is listening on port ${port}`)

})


