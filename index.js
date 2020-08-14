const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//setup express
const app = express();
app.use(express.json()); //to read json objects to request
app.use(cors());

//if this project runs online then it will check do we have an env online and if we use it locally its gonna use localhost:5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The server has started on port : ${PORT}`));

//set up mongoose

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

//set up routes
app.use("/users", require("./routes/userRouter"));
