# Web Storage
Web Storage dibagi menjadi 3:
1. Cookies
2. Local Storage
3. Session Storage

untuk melihat data yang ada di session atau local storage, kita  dapat dilihat melalui F12 -> Application -> session/local storage.

## Cookies
Cookies adalah penyimpanan data yang sangat kecil (4KB) pada web browser, umumnya cookies hanya menyimpan data untuk login/pencarian/rekomendasi ilkan. Cookies juga memiliki tanggal expired atau jikga tidak dibutuhkan browser akan menghapus cookies. Cookies dapat membuat web lebih lambat dikarenakan cookies disertakan setiap HTTP request.

## Local Storage
local storage dapat menyimpan data sampai dengan 5MB dan biasa digunakan untuk menyimpan data pencarian kita, tanpa mengefek kecepatan web browser kita.

untuk mengakses seperti menyimpan, mengambil, atau menghapus local storage dapat menggunakan perintah `localStorage`. Tetapi penyimpanan data berupa string, sehingga kita dapat memanfaatkan fungsi `JSON.stringify()`

syntax menyimpan
```js
localStorage.setItem(key, data); // key dan data HARUS string
```

syntax mengambil
```js
let data = localStorage.getItem(key); // key HARUS string
```

syntax menghapus
```js
localStorage.removeItem(key); // key HARUS string

localStorage.clear(); // menghapus seluruh data
```

contoh:
```js
let data = [1, 2, 3];

// simpan data pada local storage
localStorage.setItem("array", JSON.stringify(data));
localStorage.setItem("d", "sebuah data");

// ambil array 
let newData = localStorage.getItem("array"); // ingat ini berbentuk string
newData = JSON.parse(newData); // rubah newData menjadi sebuah array kembali

// hapus data dengan key d
localStorage.removeItem("d");

// hapus seluruh data 
localStorage.clear();
```

## Session Storage
Session storage dapat menyimpan data sampai dengan 5MB, data pada session storage akan hilang jika kita menghapus tab, data tidak hilang jika lama di refresh. 

untuk mengakses seperti menyimpan, mengambil, atau menghapus local storage dapat menggunakan perintah `sessionStorage`. key dan data yang disimpan pada session storage juga harus berbentuk STRING

syntax menyimpan
```js
sessionStorage.setItem(key, data); // key dan data HARUS string
```

syntax mengambil
```js
let data = sessionStorage.getItem(key); // key HARUS string
```

syntax menghapus
```js
sessionStorage.removeItem(key); // key HARUS string

sessionStorage.clear(); // menghapus seluruh data
```
contoh:
```js
let data = [1, 2, 3];

// simpan data pada local storage
sessionStorage.setItem("array", JSON.stringify(data));
sessionStorage.setItem("d", "sebuah data");
sessionStorage.setItem("obj", JSON.stringify({yes : "data"});

// ambil array 
let newData = sessionStorage.getItem("obj"); // ingat ini berbentuk string
newData = JSON.parse(newData); // rubah newData menjadi sebuah object kembali

// hapus data dengan key d
sessionStorage.removeItem("obj");

// hapus seluruh data 
sessionStorage.clear();
```