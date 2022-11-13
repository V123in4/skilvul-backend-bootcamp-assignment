const db = require("../models");
const user = db.user;

const bcrypt = require("bcrypt");

module.exports = {
	registerUser: async (req, res) => {
		// is email already in table?
		const data = req.body;
		const isExist = await user.findAll({
			where: {
				email: data.email.toLowerCase(),
			},
		});

		// deny if exsist
		if (Object.keys(isExist) >= "0") {
			// error response
			res.status(400).send({
				message: "email already registered",
			});
			return;
		}

		// insert data
		const salt = 5;

		bcrypt.hash(data.password, salt, function (err, hash) {
			user.create({
				name: data.name,
				email: data.email,
				password: hash,
			});
		});

		// success response
		res.status(201).send({
			message: "account succesfully created",
		});
		return;
	},
};
