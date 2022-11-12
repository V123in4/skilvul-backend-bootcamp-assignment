const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// middlewares
const { checkUpdateToken } = require("../middlewares/checkUpdateToken");
const middlewares = [express.json(), checkUpdateToken];

router.use(middlewares);

// controller
const { createToDo } = require("../controller/todos");

// get all todo without desc
router.get("/", (req, res) => null);

// buat todo baru
router.post("/new", createToDo);

// lihat detail dari todo
router.get("/detail", (req, res) => null);

// edit todo by id
router.post("/edit/:id", (req, res) => null);

// delete all
router.delete("/delete", (req, res) => null);

// delete by id
router.delete("/delete/:id", (req, res) => null);

module.exports = router;
