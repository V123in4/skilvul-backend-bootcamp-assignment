const express = require("express");
const router = express.Router();

// controller
const { registerUser } = require("../controller/register");

// middleware
const middlewares = [express.json()];

router.use(middlewares);

// post data to database
router.post("/", registerUser);

module.exports = router;
