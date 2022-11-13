require("dotenv").config();

const db = require("../models");
const user = db.user;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
	loginUser: async (req, res) => {
		// get email / password
		const data = req.body;

		const query = await user.findOne({
			where: {
				email: data.email,
			},
		});

		if (query == null) {
			res.status(401).send({
				message: "apakah anda sudah mendaftar?",
			});
			return;
		}

		bcrypt.compare(data.password, query.password, function (err, result) {
			if (result) {
				const payload = {
					id: query.id,
				};
				const token = jwt.sign(payload, process.env.SECRET_KEY, {
					expiresIn: "20m",
				});
				res.status(200).send({
					token,
				});
				return;
			} else {
				res.status(401).send({
					message: "password yang anda gunakan salah",
				});
				return;
			}
		});
		// kembalikan token
	},
};
