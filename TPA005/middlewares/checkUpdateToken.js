require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const { send } = require("process");

function arrayRemove(arr, value) {
	return arr.filter((ele) => ele != value);
}

module.exports = {
	checkUpdateToken: async function (req, res, next) {
		const data = req.body;
		const auth = req.headers.authorization.split(" ");
		const oldToken = auth[0] === "Bearer" ? auth[1] : "Not Bearer";

		// check bearer standard
		if (oldToken == "Not Bearer") {
			res.status(401).send({
				error: "Bearer is not used",
			});
		}

		// // unfinised payload
		// const payload = {
		// 	id: data.id,
		// };

		// developer bypass
		if (oldToken == process.env.DEV_KEY) {
			console.log("developer key used");
		} else {
			// check token validity
			try {
				jwt.verify(oldToken, process.env.SECRET_KEY);
			} catch (error) {
				res.status(401).send({
					error,
				});
			}
		}

		const payload = {
			id: jwt.verify(oldToken, process.env.SECRET_KEY).id,
		};

		// update token
		req.headers.authorization = jwt.sign(payload, process.env.SECRET_KEY, {
			expiresIn: "2h",
		});

		next();
	},
	getAll: (req, res) => {},
};
