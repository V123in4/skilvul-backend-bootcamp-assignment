module.exports = {
	createToDo: (req, res) => {
		const payload = {
			token: req.body.newToken,
		};
		res.status(200).send(payload);
	},
};
