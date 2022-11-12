const express = require("express");
const router = express.Router();

const { loginUser } = require("../controller/login");

// login
// middleware
const middlewares = [express.json()];

router.use(middlewares);

router.post("/", loginUser);

module.exports = router;
