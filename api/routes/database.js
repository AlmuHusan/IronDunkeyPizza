const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get("/", function(req, res, next) {    
    res.send(databaseConnection);
});

const connection = "localhost:27017";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

module.exports = router;