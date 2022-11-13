require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const { send } = require("process");

function arrayRemove(arr, value) {
	return arr.filter((ele) => ele != value);
}

module.exports = {
	checkUpdateToken: async function (req, res, next) {
		try {
			const auth = req.headers.authorization.split(" ");
			const oldToken = auth[0] === "Bearer" ? auth[1] : "Not Bearer";

			// check bearer standard
			if (oldToken == "Not Bearer") {
				res.status(401).send({
					error: "Bearer is not used",
				});
			}

			// developer bypass
			if (oldToken == process.env.DEV_KEY) {
				console.log("developer key used");
			} else {
				// check token validity
				jwt.verify(oldToken, process.env.SECRET_KEY, (err, decode) => {
					res.status(401).send(err);
				});
			}

			// same payload from token
			const payload = {
				id: jwt.verify(oldToken, process.env.SECRET_KEY).id,
			};

			// update token header
			req.headers.authorization =
				"Bearer " +
				jwt.sign(payload, process.env.SECRET_KEY, {
					expiresIn: "2h",
				});
			next();
		} catch (error) {
			console.error(error);
		}
	},
};
