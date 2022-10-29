const express = require("express");
const router = express.Router(); // deklarasi sebagai router object

// import logika dari file controller
const {
    getDb,
    addDb,
    getDataById,
} = require("../controller/app.controller.js");

// localhost:8080/db
router.get("/db", getDb);
router.post("/db", express.json(), addDb);

// localhost:8080/db/:id
router.get("/db/:id", getDataById);

module.exports = router;