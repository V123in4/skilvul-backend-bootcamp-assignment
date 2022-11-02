const express = require("express");
const router = express.Router(); // deklarasi sebagai router object

// import logika dari file controller
const {
    getDb,
    addDb,
    getDataById,
} = require("../controller/app.controller.js");

// localhost:8080/db
router.get("/", getDb);
router.post("/", express.json(), addDb);

// localhost:8080/db/:id
router.get("/:id", getDataById);

module.exports = router;