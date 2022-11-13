require("dotenv").config;
const db = require("../models");
const jwt = require("jsonwebtoken");

const todo_list = db.todo_list;

const jwtID = (token) => {
	try {
		return jwt.verify(token, process.env.SECRET_KEY);
	} catch (error) {
		throw new Error("Token expired");
	}
};

module.exports = {
	createToDo: async (req, res) => {
		const expectedValues = ["title", "description"];
		const body = req.body;
		Object.keys(body.data).forEach((d, i) => {
			if (!expectedValues.includes(d)) {
				res.status(400).send({
					error: `missing ${d} in request body`,
				});
			}
		});

		const userID = jwtID(req.headers.authorization.split(" ")[1]);

		const insert = await todo_list.create({
			title: body.data.title,
			description: body.data.description,
			id_user: userID.id,
			check: 0,
		});

		const payload = {
			token: req.headers.authorization,
			message: "succesfully added",
		};
		res.status(201).send(payload);
	},

	getAll: async (req, res) => {
		const id_user = jwtID(req.headers.authorization.split(" ")[1]);

		const data = await todo_list.findAll({
			attributes: ["id", "title", "check", "updatedAt"],
			where: { id_user: id_user.id },
		});

		const payload = {
			token: req.headers.authorization,
			data,
		};

		res.send(payload);
	},

	getDescAll: async (req, res) => {
		const id_user = jwtID(req.headers.authorization.split(" ")[1]);

		const data = await todo_list.findAll({
			attributes: ["id", "description"],
			where: { id_user: id_user.id },
		});

		const payload = {
			token: req.headers.authorization,
			data,
		};

		res.send(payload);
	},

	getDescById: async (req, res) => {
		const id_user = jwtID(req.headers.authorization.split(" ")[1]);
		const { id } = req.params;

		const data = await todo_list.findAll({
			attributes: ["id", "description"],
			where: {
				id_user: id_user.id,
				id,
			},
		});

		const payload = {
			token: req.headers.authorization,
			data,
		};

		res.send(payload);
	},

	editToDo: async (req, res) => {
		const id_user = jwtID(req.headers.authorization.split(" ")[1]);
		const { id } = req.params;
		const body = req.body;

		const update = await todo_list.update(
			{
				title: body.title,
			},
			{
				where: {
					id_user: id_user.id,
					id,
				},
			}
		);

		const payload = {
			token: req.headers.authorization,
			message: "Update Succesful",
		};

		res.send(payload);
	},

	deleteToDoAll: async (req, res) => {
		const id_user = jwtID(req.headers.authorization.split(" ")[1]);

		const update = await todo_list.destroy({
			where: {
				id_user: id_user.id,
			},
		});

		const payload = {
			token: req.headers.authorization,
			message: "Delete Succesful",
		};

		res.send(payload);
	},
	deleteToDoById: async (req, res) => {
		const id_user = jwtID(req.headers.authorization.split(" ")[1]);
		const { id } = req.params;

		const s = await todo_list.destroy({
			where: {
				id_user: id_user.id,
				id,
			},
		});

		const payload = {
			token: req.headers.authorization,
			message: `Delete for user ${id_user.id}, list ${id} Succesful`,
		};

		res.send(payload);
	},
};
