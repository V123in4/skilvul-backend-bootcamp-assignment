# Penghantar
sebelumnya sudah diajari cara pembuatan model sampai migrasi ke database mysql. Sekarang mari kita lakukan proses CRUD (create, read, update, delete). Pada tabel di database mysql menggunakan library sequelize.

# Seeder
seeder adalah sebuah file yang dapat dibuat melaui sequelize-cli. File seeder berguna untuk membuat data dummy pada tabel data dummy pada tabel dapat membantu proses querying dalam development.

file seeder berada di direktori seeder dan dapat dibuat menggunakan command 
### Membuat seeder file
```bash
$ npx sequelize-cli seed:generate --name nama-file
```

kemudian file dengan nama "nama file" dibuat di direktor seeder

### Modifikasi file seeder
file tersebut berisikan seperti ini dan dapat dimodifikasikan sesuai dengan kebutuhan.
```js
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
```
async down akan dijalankan dengan perintah undo, dan up dijalankan dengan file seed.

### Menjalankan file seeder
``` bash
$ npx sequelize-cli db:seed:all
```

### Undo file seeder
```bash
$ npx sequelize-cli db:seed:undo # undo seeder terakhir
$ npx sequelize-cli db:seed:undo --seed file-name # undo 1 dengan sebuah file seeder
$ npx sequelize-cli db:seed:undo:all # undo dengan seluruh file seeder 
```

# CRUD menggunakan sequelize
CRUD menggunakan sequelize sangatlah luas dan banyak method untuk menggunakannya, disini hanya dibahas fungsi-fungsi yang sering digunakan. Info lebih lanjut dapat dilihat [dilink ini](https://www.google.com/search?q=sequelize+documentation).

untuk membuat query harus dibuat model dan migrasikan ke databse terlebih dahulu. kode untuk melakukan CRUD dapat diletakkan di file controller.

## Insert data baru dalam tabel
letakkan kode ini didalam controller, dan pastikan model sudah dimigrasikan sebelum melakukan insert.
```js
// require model anggap disini bernama Model
const { Model } = require("path/to/model");

async function (req, res) {
    try {
        const insert = await Model.create({
            coloumn1: "data1",
            coloumn2: "data2",
            ...
            coloumnN: "dataN",
        }); // insert dapat dilakukan disini
        res.status(201).send("created");
    } catch (error) { // jika terjadi error akan ditangkap disini
        console.error(error);
        res.status(500).send(error);
    }
}
```
# Select data dari tabel
letakkan kode ini didalam controller
```js
async function (req, res) {
    try {
        // select semua data dalam tabel
        const select = await Model.findAll(); // insert dapat dilakukan disini
        
        // select data menggunakan where
        const selectWhere = await Model.findAll({
            where: {
                // condition
                id_user : 19,
            }
        });

        // select sebuah data
        const selectOne = await Mode.findOne({
            where: {
                // condition data < 1
                e: {
                    [Op.lt] : 1 // operator Op.lt adalah less than
                }
            }
        })
        res.status(200).json(select); // kirim data ke client
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}
```

## Update data dalam tabel
masukkan kode ini didalam file controller
```js
async function (req, res) {
    await Model.update({
            // data untuk updte
            coloumn1: "data1",
            coloumn2: "data2",
            ...
            coloumnN: "dataN",
    },
    {
        where: {
            // condition data == null
            coloumnN: null,
        }
    });
}
```

## Delete data di tabel
masukkan kode ini dalam file controller
```js
async function(req, res) {
    // delete menggunakan where
    await Model.destroy({
        where: {
            // condition data > 4
            id : {
                [op.gt] : 4,
            }
        }
    })

    // delete seluruh data didalam tabel
    await Model.destroy({
        truncate: true,
    });

    res.send(202).send("delete successful");
}
```
