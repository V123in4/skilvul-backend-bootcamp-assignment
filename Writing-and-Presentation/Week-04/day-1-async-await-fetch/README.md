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
fetch merupakan sebuah aplikasi dari promisea, sehingga dapat dibilang fetch adalah object dari promise. Fetch digunakan dengan cara memberikan sebuah argument url 

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
```js
// ==================== FETCH ========================
// fetch -> obj promise
// di handle menggunakan promise atau async await
// API -> jembatan komunikasi ke server untuk mendapatkan data

// medapatkan data digimon
fetch("https://digimon-api.vercel.app/api/digimon")
.then(result => result.json())
.then(result => {
  console.log(result)
})
```