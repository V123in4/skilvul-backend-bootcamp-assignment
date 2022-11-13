require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const { send } = require("process");

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
					if (err) {
						res.status(401).send(err);
					}
					return;
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
