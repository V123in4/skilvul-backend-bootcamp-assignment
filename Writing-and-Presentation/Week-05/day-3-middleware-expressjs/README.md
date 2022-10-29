# Nodemon
Nodemon merupakan library yang dipakai oleh developer untuk memudahkan proses development. Nodemon dapat mendeteksi perubahan file dan merestart server node jika ada perubahan pada file. Nodemon dapat diinstall dengan cara menulisan 

```sh
$ npm i -D nodemon
# -D menandakan kode nodemon tidak dijalankan bersama dengan program.
```

nodemon dapat dijalankan dengan cara mengubah file `package.json`. Pada scripts, scripts memiliki isi object `{"key-word" : "command"}`. key word dapat ditambahkan sesuai kebutuhan. Untuk menjalankan nodemon dapat menggunakan key-word `dev` dan command `nodemon run nama-file.js` untuk menjalankan `nama-file.js` dengan nodemon.

pada terminal dapat menjalankan command
```sh
$ npm run dev
```
sehingga command dengan keyword dev dijalankan.

# ExpressJS
expressJS adalah library nodeJSyang mempermudah prosses development webserver. Express server jauh lebih mudah dan sederhana untuk digunakan serta memiliki opsi untuk memisah router dan controller sehingga file yang dipakai tidak terlalu menumpuk, menjadi lebih rapi.

## Server dengan ExpressJS
```js
// import express
const express = require("express");

// panggil express
const app = express();

// tentukan port
const PORT = 8080;

// handle request get tanpa endpoint 
app.get("/", (req, res) => {
    res.send("Hello default!");
});

// handle request get dengan endpoint foo
app.get("/foo", (req, res) => {
    res.send("Hello foo!");

    // ambil argument dalam request
    const data = req.params;
});

// handle request post dengan end point foo
app.post("/foo", (req, res) => {
    res.send("Hello post foo!");

    // ambil data body dalam request
    const data = req.body;
});

// handle request delete dengan endpoint foo
app.delete("/foo", (req, res) => {
    res.send("Hello delete foo!");

    // ambil data body dalam request
    const data = req.body;
});

// handle request put dengan endpoint foo
app.put("/foo", (req, res) => {
    res.send("Hello put foo!");

    // ambil data body dalam request
    const data = req.body;
})

// dengarkan request di port
app.listen(PORT);
```

express juga menyediakan fitur untuk memisah-misahkan file server berdasarkan fungsi seperti router, controller dan app. Karena sulit dijelasan secara jelas menggunakan kata-kata penjelasan dilakukan menggunakan kode di `express-split`

## Router
berfungsi untuk mengarahkan endpoint berdasarkan request.
```js
app.get("/foo", function(req, res) { /* */ }); // ini merupakan router
```

## Controller
controller adalah logika didalam webserver. Setelah di route request dihandle oleh controller sesuai dengan keperluan.
```js
app.get("/", 
function(req, res) { console.log(req, res); }); // ini merupakan controller
```

# Middleware
Middleware adalah sebuah "lapisan software/logika" yang harus dilewati sebelum mencapai ke controller.

sebelumnya di nodeJS disini **tidak menggunakan** express request langsung dijalankan ke server sehingga alur `request -> server`. Menggunakan middleware alur berubah menjadi `request -> middleware -> server`.

# Middleware Global Express
Middleware global adalah sebuah lapisan software yang dilalui oleh seluruh **request** dari sebuah rounter object.

```js
// import express
const express = require("express");

// panggil express
const app = express();

// tentukan port
const PORT = 8080;

const log = (req, res, next) => { // middleware log
    console.log(req.split('\n').join(' '));
    next(); // sangat penting memberikan info jike middleware selesai
}

app.use(express.json()); // memanggil built in middleware dari express
app.use(log); // memanggil log

app.get('/', (req, res) => {
    res.send("yes");
});

/*
alur request response / menjadi sebagai berikut
req -> express -> express.json() -> log -> server

express, express.json(), log adakah middleware.
*/
```
# Middleware Local Express
Middleware local adalah sebuah lapisan software yang dilalui oleh request **yang ditentukan**.

```js
// import express
const express = require("express");

// panggil express
const app = express();

// tentukan port
const PORT = 8080;

const log = (req, res, next) => { // middleware log
    console.log(req.split('\n').join(' '));
    next(); // sangat penting memberikan info jike middleware selesai
}

const foo = (req, res, next) => {
    console.log("foo middleware");
    next();
}

app.use(express.json()); // memanggil built in middleware dari express
app.use(log); // memanggil log

app.get('/', (req, res) => {
    res.send("yes");
});
/*
alur request response / menjadi sebagai berikut
req -> express -> express.json() -> log -> server

express, express.json(), log adakah middleware.
*/

app.get('/bar', foo, (req, res) => {
    res.send("baz");
});

/*
alur request response /bar menjadi sebagai berikut
req -> express -> express.json() -> log -> foo -> server

express, express.json(), log, foo adakah middleware.

berbeda dengan request / , request /bar memiliki middleware lokal foo
*/
```
