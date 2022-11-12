require("dotenv").config();

const express = require("express");
const app = express();
const allRouter = require("./router");

app.use("/", allRouter);

app.listen(process.env.PORT, () => {
	console.log(`Server Running at localhost:${process.env.PORT}`);
});
