const db = require("../models");
const user = db.user;

const bcrypt = require("bcrypt");

module.exports = {
	registerUser: async (req, res) => {
		// check apakah username ada di tabel
		const data = req.body;
		const isExist = await user.findAll({
			where: {
				email: data.email.toLowerCase(),
			},
		});

		// deny jika ada
		if (Object.keys(isExist) >= "0") {
			res.status(400).send({
				message: "email already registered",
			});
		}

		// insert jika tidak ada
		const salt = 5;

		bcrypt.hash(data.password, salt, function (err, hash) {
			user.create({
				name: data.name,
				email: data.email,
				password: hash,
			});
		});

		// berikan respon berhasil
		res.status(201).send({
			message: "account succesfully created",
		});
	},
};
