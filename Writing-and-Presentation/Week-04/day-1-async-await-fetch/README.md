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
Promise digunakan dengan cara memanggilnya dan menggunakan `then` untuk kasus berhasil dan `catch` untuk kasus gagal. Perlu diingat pernyataan `then` dapat dichain dengan cara mengembalikan value di then sebelum then kedua.
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

# Fetch

```js
// promise creation (membuat object promise)
let nonton = (kondisi) => {
  return new Promise((resolve, reject) => {
    if (kondisi == "jalan") {
      resolve("nonton terpenuhi")
    }
    reject("batal nonton")
  })
}

// utk menjalankan kode promise di atas
// ada 2 cara
// - promise (then catch)
// - async await

// ===================== Promise ===================
// promise
// namaPromis.then().catch()
nonton("jalan")
.then(result => {
  console.log(result);
}).catch(err => {
  console.log(err)
})

// ===================== async await ===============
// async await -> car utk nangkep obj promise
// buat async function
async function asyncNonton() {
  try {
    let result = await nonton("jalan")
    console.log(result);
  } catch (error) {
    console.log(error)
  }
}
asyncNonton()

// async arrow
// let asyncNonton = async () => { }


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