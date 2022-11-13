const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// middlewares
const { checkUpdateToken } = require("../middlewares/checkUpdateToken");
const middlewares = [express.json(), checkUpdateToken];

router.use(middlewares);

// controller
const {
	createToDo,
	getAll,
	getDescAll,
	getDescById,
	editToDo,
	deleteToDoAll,
	deleteToDoById,
} = require("../controller/todos");

// get all todo without desc
router.get("/", getAll);

// make new todo
router.post("/new", createToDo);

// get todo desc
router.get("/detail", getDescAll);

// get todo desc by id
router.get("/detail/:id", getDescById);

// edit todo by id
router.post("/edit/:id", editToDo);

// delete all
router.delete("/delete", deleteToDoAll);

// delete by id
router.delete("/delete/:id", deleteToDoById);

module.exports = router;
