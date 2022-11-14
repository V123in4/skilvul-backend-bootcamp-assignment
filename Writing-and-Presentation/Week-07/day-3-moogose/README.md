# Installasi
mongoose adalah sebuah library ORM seperti sequelize. Installasi dapat menggunakan perintah
```bash
$ npm install mongoose
```
ingat mongoose hanyalah library sehingga tetap membutuhkan aplikasi mongodb sebagai database dan express untuk mempermudah aplikasi nodejs.

# Schema dan Model
schema dibuat untuk membuat model, model nanti akan digunakan untuk melakukan insert kedalam collection.
```js
// import library mongoose
const mongoose = require('mongoose');

// ambil kelas schema dari library
const { Schema } = mongoose;

// buat schema
const personSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true // diharuskan
    },
    password: String
});

// membuat model dari schema tersebut
const Person = mongoose.model("Person", personSchema);

// export model untuk dipakai dicontroller
module.exports = Person;
```

# CRUD Menggunakan Mongoose
sebelum melakukan CRUD file model harus diimport terlebih dahulu. Penjelasan disini juga tidak lengkapa, hanya bagian yang sering digunakan untuk lebih lengkap dapat dilihat [disini](https://www.gdoogle.com/search?q=mongoose+documentation)

## Insert
```js
// ambil model
function (req, res) {
    const Person = require("path/to/model/");
    const data = req.body;

    // simpan data kedalam model
    const person = new Person(data)

    // kirim data ke database
    person.save()

    // response
    res.json({
        message: "Data has been Inserted",
    })
}
```

## Select
```js
async function (req, res) => {
    // trycatch digunakan untuk menangkap soft error jika terjadi
    try {
        // ambil semua person
        const persons = await Person.find({}, "-__v -password");
        // data disimpan di persons

        // ambil 1 data person berdasarkan email
        const person = await Person.findOne({email: data.email});
        // data disimpan di person
    } catch (error) {
        console.log(error);
    }
  }
```

## Update
```js
async function (req, res) => {
    try {
        // ambil data
        const data = req.body;

        // update data berdasarkan email
        // Model.findOneAndUpdate(kondisi, data, callback);
        await Person.findOneAndUpdate(
            { email: data.email },
            { nama: data.nama },
            (err, docs) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(docs);
                }
            }
        );
    } catch (error) {
        console.log(error);
    }
}
```

## Delete
```js
async function (req, res) => {
    try {
        // ambil data
        const data = req.body;

        // delete data berdasarkan email
        // Model.findOneAndDelete(kondisi, callback);
        await Person.findOneAndDelete(
            { email: data.email },
            (err, docs) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(docs);
                }
            }
        );
    } catch (error) {
        console.log(error);
    }
}
```
