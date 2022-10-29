// gunakan express
const express = require("express");
const app = express();

// import router file
const router = require("./router/app.router.js");
const PORT = 8080;

const middleWare = (req, res, next) => {
    console.log("aku middleware");
    next();
}

// gunakan middleware
app.use(middleWare);
app.use(router);

app.listen(PORT);