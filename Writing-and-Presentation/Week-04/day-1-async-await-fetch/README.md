# Promise
## Review Promise
promise adalah sebuah nanji yang harus mengembalikan hasil meskipun hasil tersebut gagal.

Promise object dibuat seperti berikut 
```js
let myPromise = (param) => {
    return new Promise (resolve, reject) => {
        if(param == "True") {
            resolve("Berhasil!");
        }
        reject("Gagal!");
    }
}
```
Promise digunakan dengan cara memanggilnya dan menggunakan `then` menangkap untuk kasus berhasil dan `catch` untuk kasus gagal. Perlu diingat pernyataan `then` dapat dichain dengan cara mengembalikan value di then sebelum then kedua.
```js
myPromise("True")
.then((result) => { // case berhasil
    console.log(result); 
    return "Then 1"; // mengembalikan nilai "Then 1" 
})
.then(result => { // result menangkap "Then 1" yang dikembalikan oleh then pertama
    console.log(result);
})
.catch(error => { // case error
    console.log(error)
});
```

# Async & Await
async seperti yang pernah dibahas membuat sebuah fungsi berjalan secara pararel. Await digunakan untuk menunggu sebuah value sampai selesai.

```js
async function myFunctionAsync() {
	try {
		let result = await myPromise("True"); // tunggu hasil promise
		console.log(result); // tangkap jika berhasil
	} catch (error) {
		console.log(error); // tangkap jika gagal
	}
} // definisikan fungsi async

myFunctionAsync() // panggil fungsi async 
// ingat pembuatan function tidak memanggil fungsi, sehingga 
// fungsi async yang dibuat harus dipanggil setelah dibuat
```

# Fetch
fetch merupakan sebuah aplikasi dari promise. Fetch merupakan object dari promise. Fetch digunakan dengan cara memberikan sebuah argument url. Hasil dari fetch ditangkap seperti promise, dapat menggunakan `.then` dan `.catch` atau fungsi `async`.

contoh penggunaan:

```js
const url = (param) => `https://www.google.com/search?q=${param}` // url berikut untuk berguna untuk search dengan google.

fetch(url("test"))
.then(result => {
	console.log(result);
})
.catch(error => {
	console.log(error);
})
```

# Aplikasi Fetch dan Async Await pada API 
API yang akan digunakan adalah API publik bernama pokeapi, penjelasan pertama dimulai dari pembuatan async function sampai penampilan response/error pada console, penjelasan kedua dimulai dari fetch sampai penampilan response/error pada console

## Penggunaan API dengan async await

```js
const url = (offset=20, count=20) => `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${count}`


// contoh 1
async function getPokemon(url) {
	try {
		const response = await fetch(url); // menunggu sampai url memberikan data dan simpan di response
		const data = await response.json(); // menunggu sampai stream data selesai dan mengubah data string menjadi json
		console.log(data); // tampilkan data
	} catch(error) {
		console.log(error); // tampilkan error
	}
}
```
## Penggunaan API dengan fetch promise
```js
// contoh 2
fetch(url)
.then(response => {
	return response.json(); // tangkap response dan rubah menjadi data json
})
.then(result => {
	console.log(result); // tangkap return then kemudian tampilkan
})
.catch(error => {
	console.log(error); // tampilkan error
})
```

## Perbandingan
dapat dibilang syntax menggunaan `fetch.then().catch()` lebih simpel secara syntax untuk digunakan. Penggunaan async function lebih ribet dan membutuhkan programmer untuk menjalankan prosess pengambilan data. saya rasa lebih baik mengunakan fetch.then().catch() untuk aplikasi sehingga mudah. untuk pembelajaran lebih baik menggunakan async function dikarenakan proses tersebut memerlukan promgrammer untuk mengerti proses.
