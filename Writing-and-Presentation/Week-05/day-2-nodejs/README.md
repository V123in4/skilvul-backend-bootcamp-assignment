# NodeJS
NodeJS merupakan sebuah runtime yang dapat menjalankan javascript di komputer tidak di browser, engine yang digunakan oleh NodeJS adalah V8 sama dengan browser berbasis chromium. NodeJS juga membuka kemungkinan untuk membuat program server.

# Cara menjalankan kode NodeJS
Untuk menjalankan node js kita perlu untuk menginstall aplikasi node js terlebih dahulu. Setelah diinstall kita dapat menjalankan script javascript di terminal dengan menggunakan perintah `node nama_script.js`.

contoh kita menggunakan file berisi.
```js
console.log("Hello World!");
```

kemudian disimpan dengan nama `hello.js`.

kita dapat membuka terminal dan menjalankan perintah berikut berasumsi kita berada di direktori file hello.js tadi.
```sh
node hello.js
```

terminal mencetak:
`Hello World!`

# Library File System (fs)
fs merupakan library built-in yang cukup penting karena, library ini dapat membuat program node yang kita buat nyambung dengan file system lokal

fungsi didalam fs sangat banyak disini hanya membahas membaca dan menulis sebuah file lebih lengkap [click disini](https://nodejs.org/api/fs.html)

```js
// membaca file 347324342.txt

// import fs
const fs = require("fs");

// read from a file
fs.readFile("./347324342.txt", "utf8", (err, data) => {
    if(err){
        return console.log(err);
    }
    console.log(data);
});

// write to a file
fs.writeFile("./347324342.txt", "AAAAAAAAAAA", (err) => {
    if(err){
        return console.log(err);
    }
    console.log("file made successfully");
});
```
# Library Event (events)
events dapat membuat dan juga menangkap event pada node js disini kita hanya membahas pembuatan dan penangkapan event lebih lengkap [klik disini](https://nodejs.org/api/events.html)

```js
// menangkap event "y"

// import library
const eventEmitter = require("events");

// membuat sebuah event object
const event = new eventEmitter(); 

// dengarkan event y
// dapat di istilahkan mendengarkan dari suatu sumber
event.on("y", (param) => {
    console.log("action", param);
});
// eventObj.on("event_name", callback)
// callback dijalankan ketika event terdengar

// pancar event y
// teriak ke sumber y
event.emit("y", "chav nt");
// eventObj.emit("event_name", ...args)
```

# Membuat webserver
pembuatan webserver tidak menggunakan library `express` untuk penggunaan `express` dibahas di middleware.

```js
// import library http

// menggunakan require untuk import library 
const http = require("http");
```