const express = require("express");
const router = express.Router(); // deklarasi sebagai router object
const dbRoute = require("./db.router.js");

// localhost:8080/db
router.use("/db", dbRoute);

module.exports = router;
