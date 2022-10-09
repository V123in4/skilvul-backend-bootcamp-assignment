# Asynchronous vs Synchronous

Synchronous JS adalah program yang dijalankan secara berurutan dari atas sampai bawah. Asynchronous JS adalah suatu cara untuk program menjalankan dua atau lebih proses secara bersamaan.

contoh jika ada prosess yang berjalan tetapi memerlukan waktu lebih untuk menyelesaikanya maka js akan menunggu sampai selesai, jika kode tersebut synchronous, jika kode tersebut Async maka akan menjalankan kode lain dan jika proses tersebut selesai langsung dijalankan.

## Event loop
![](./event-loop.png)
event loop adalah proses bagaimana pemrosesan dilakukan, untuk lebih mudah menggambarkan bagaimana caranya proses dilaksanakan secara asynchronous. 

ketika javascript tau program dijakankan secara asynchronous maka program dijalankan dan diletakkan di WebAPI, kemudian proses yang tidak menunggu diletakkan di callback queue, sambil menunggu proses yang asynchronous. setelah proses asynchronous selesai, program meletakkan di callback queue.

contoh simulasi koneksi ke database menggunakan callback
```js
setTimeout(() => {
    console.log("data dari database");
}, 2000); // simulasi koneksi dan mengembalikan data selama 2 detik
// proses diatas dijalankan tetapi tidak bisa langsung mendapatkan hasil
// sehingga proses dibawah akan dijalankan terlebih dahulu
// setelah "mendapatkan data" dari database langsung dijalankan

console.log("p a");
console.log("p b");
console.log("p c");
console.log("p e");
console.log("p d");
```


## Promise
promise adalah sebuah proses yang harus mengembalikan meskipun tidak tahu apa hasilnya

promise memiliki 3 status:
1. Pending (Menunggu)
2. Rejected (Ditolak)
3. Fulfiled (Terpenuhi)


syntax untuk membuat sebuah promise
```js
let newPromise = new Promise(function(resolve, reject){
    if(/* condition */) {
        resolve("Berhasil");
    }
    reject("Gagal");
});

// menangkap promise
newPromise
    .then(function(result) {
        console.log(result); // apa yang dilakukan jika resolve dikembalikan
    })
    .catch(function(error) {
        console.log(error); // apa yang dilakukan jika reject dikembalikan
    });
```

syntax untuk membuat promise sebagai function
```js
let anotherPromise = (...param) => {
    return new Promise((resolve, reject) => {
        if((param == 12)) {
            resolve("Berhasil");
        }
        reject("Gagal");
    }
};
// panggil promise sebagai function
anotherPromise([...args])
.thenw((result) => {
    console.log(result); //// apa yang dilakukan jika resolve dikembalikan
})
.catch((error) => {
    console.log(error);// apa yang dilakukan jika reject dikembalikan
});
```


contoh penggunaan promise:
```js
let atlantis = (param) => {
    return new Promise((resolve, reject) => {
        if(param == "yes"){
            resolve("mari ke Atlantis");
        }
        reject("karena ada covid, batal ke Atlantis");
    });
};

atlantis("yes")
.then((result) => {
    console.log(result);
    return "dimana ketemuan?"
})
.then((result) => {
    console.log(result + " untar");
})
.catch((error) => {
    console.log(error);
}); // case resolve atau berhasil
// then dapat dichainning seperti berikut.

atlantis("no")
.then((result) => {
    console.log(result);
    return "dimana ketemuan?"
})
.then((result) => {
    console.log(result + " untar");
})
.catch((error) => {
    console.log(error);
}); // case reject atau error
```

## Aplikasi Proses Promise
- menunggu data dari database

dikarenakan proses dari database tidak tahu kapan selesai, ataupun akan selesai.