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
	getDescById,
	editToDo,
	deleteToDoAll,
	deleteToDoById,
} = require("../controller/todos");

// get all todo without desc
router.get("/", getAll);

// make new todo
router.post("/", createToDo);

// delete all
router.delete("/", deleteToDoAll);

// delete by id
router.delete("/:id", deleteToDoById);

// get todo desc by id
router.get("/detail/:id", getDescById);

// edit todo by id
router.put("/edit/:id", editToDo);

module.exports = router;
