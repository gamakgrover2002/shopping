const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 4000;
const Review = require("./models/Reviews");
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  });

app.get("/", async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});
app.post("/new", (req, res) => {
  var newreview = new Review({
    name: req.body.name,
    review: req.body.review,
  });
  newreview.save();
  res.json(newreview);
});

app.listen(port, () => {
  console.log("server is running");
});
