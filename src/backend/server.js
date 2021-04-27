const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;
const mongoose = require("mongoose");
app.use(cors());
const router = express.Router();

mongoose.connect("localhost:27017", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.use("/", router);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

1
let order = require("./model/order");

router.route("/getData").get(function(req, res) {
    order.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });