require("dotenv").config;
const db = require("../models");
const jwt = require("jsonwebtoken");

const todo_list = db.todo_list;

module.exports = {
	createToDo: async (req, res) => {
		const expectedValues = ["title", "description", "id_user"];

		Object.keys(req.body.data).forEach((d, i) => {
			if (!expectedValues.includes(d)) {
				res.status(400).send({
					error: `missing ${d} in request body`,
				});
			}
		});

		const x = await todo_list.create({
			title: req.body.data.title,
			description: req.body.data.description,
			check: 0,
		});

		const payload = {
			token: req.body.newToken,
			message: "succesfully added",
		};
		res.status(201).send(payload);
	},
	getAll: async (req, res) => {
		const x = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
		console.log(x);

		const data = todo_list.findAll({
			where: { id_user: 123 },
		});
		res.send(data);
	},
};
