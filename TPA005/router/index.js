const express = require("express");
const router = express.Router();

const registerRoute = require("./register");
const loginRoute = require("./login");
const todoRoute = require("./todos");

router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/todos", todoRoute);

module.exports = router;
