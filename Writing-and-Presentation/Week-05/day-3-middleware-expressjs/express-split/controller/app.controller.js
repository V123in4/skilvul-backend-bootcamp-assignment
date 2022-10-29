let db = [
    {
        id : 1,
        str : "str 1",
    },
    {
        id : 2,
        str : "str 2",
    },
]

module.exports = {
    getDb : (req, res) => {
        res.send(db);
    },
    addDb : (req, res) => {
        const data = req.body;
        db.push(data);

        res.send(
                {
                    "message" : "Data Berhasil ditambahkan"
                }
            );
    },
    getDataById : (req, res) => {
        const param = req.params;

        const data = db.find((data) => param.id == data.id);

        res.send(data);
    }
}