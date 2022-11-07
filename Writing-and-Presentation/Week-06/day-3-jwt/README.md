# Authentication
Authorization adalah proses seorang mendapatkan suatu hak akses menggunakan informasi diketahui oleh orang itu dan tempat untku authorisasi pada suatu aplikasi/entity/data.

Contohnya saya login ke [steam](https://store.steampowered.com/), Setelah saya login saya dapat menerima data yang saya diberikan akses seperti game yang sudah dibeli, user data sebuah game yang dimiliki dan dapat membeli game yang belum saya punya.

# Authorization
Authorization adalah proses penentuan apakah orang tersebut yang sudah melakukan authentikasi diizinkan atau ditolak untuk melakukan sebuah aksi terhadap data/informasi pada sistem tersebut. 

Contoh dapat dilakukan pada [steam](https://store.steampowered.com/), Setelah login saya terauthorisasi untuk mengakses data seperti game yang dibeli, memainkan game yang saya miliki, sedangkan saya tidak terauthorisasi mengakses game yang belum saya beli.

# Encryption
enkripsi adalah proses dimana data diamankan saat "perjalanan" sehingga data tersebut tidak dapat diakses/intercept oleh orang yang tidak memiliki "kunci" yang tepat.

contoh:
```
kunci: goldvianyChavMomen

kita disini berasumsi jika data V123in4 di enkripsi menjadi 
qopweiurqwopeiurq dengan kunci goldvianyChavMomen
```
![](./enkripsi.png)

server router disini tidak dapat melihat informasi yang dikirimkan hanya meneruskan, tetapi server yang memiliki kunci yang sama bisa membaca data tersebut.

# Hashing
hashing adalah proses "manghancurkan" data satu arah dengan prosedur. 
Satu arah berarti sekali hash dilakukan hash tidak dapat dikembalikan ke bentuk semula. 
Hashing algorithm akan membuat hasil yang sama dengan data awal yang sama.

contoh dengan data: x menggunakan algoritma SHA256


hash menjadi: 2d711642b726b04401627ca9fbac32f5c8530fb1903cc4db02258717921a4881

hashing biasa digunakan untuk penyimpanan password pada database diserver, sehingga server adminpun tidak dapat melihat data sebelum dihashing. Meski server admin dapat merubah kode untuk masuk sebagai akun lain. Namun penyimpanan demikian baik dikarenakan jika database "bocor" orang yang mengakses password tidak dapat menggunakan data bocor tersebut.
# Salting
salting merupakan proses untuk merubah password dengan cara menambahkan karakter acak untuk merubah nilai sebelum dilakukan hashing.

misalnya ada 2 user yang memiliki password yang sama.
```
A : 12345678
B : 12345678
```
menggunakan SHA-1 akan menjadi 7c222fb2927d828af22f592134e8932480637c0d

didatabase juga akan menyimpan data yang sama oleh karena itu ada salting.

sebelum password di hash ditambahkan huruf acak sebanyak 3 digit
```
A : 12345678qwe
hash SHA-1 : a6e3bdeab0f8b4e36f019537592398112980e163

B : 12345678hdf
hash SHA-1 : 03cf1e8d9b221ba8918e4d4dc415c3aa4cad0b42
```
hash menjadi sangat berbeda meski ditambah salt sedikit saja.

# JWT
![](./pengertian-kasar-jwt.png) catatan saat kelas

### Flow JWT
```
User <---> server <--- secret
```
1. user mengirimkan data untuk autentikasi.
2. server akan membuat token dengan data dan sebuah secret key.
3. server mengirimkan token kembali untuk identifikasi user tersebut.
4. setiap request selanjutnya user bisa mengirimkan token untuk menandakan user tersebutlah yang membuat aksi.
5. server bisa verifikasi dengan cara decrypt menggunakan secret.
6. jika user merubah token server akan menolak permintaan dari user.

# JWT
## Installasi
```bash
npm install jsonwebtoken
```
seperti library lainnya jwt juga harus di import menggunakan
```js
const jwt = require("jsonwebtoken");
```
kemudian baru bisa digunakan.

## JWT tokening
token pada jwt dibagi menjadi 3 bagian
```
xxxx.yyyy.zzzz
```
xxxx -> header value umumnya berisi algoritma dan tipe token

yyyy -> body atau data

zzzz -> signature berisikan `HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), KEY)`

penggunaan token yang baik dengan cara menggunakan expire dan mengirimkan token bari setiap user melakukan sebuah aksi. Tetapi untuk kali ini untuk mempemudah penjelasan expire **tidak** digunakan.
## jwt.sign()
```js
jwt.sign(data, key, { /* options */ });
```
contoh penggunaan:

user mengirimkan data indentifikasi

```js
// ada di file router
const KEY = a6b1840c1cc475c14f9e14218a6d755a6ac7a; // contoh key yang digunakan
const { id } = req.body; // contoh data yang digunakan

// disini token dibuat
const token = jwt.sign(
    {
        id,
    },
    KEY
);

res.status(200).json({
    "message" : "Berhasil",
    token
}); // token dikirimkan kembali ke user dengan sebuah pesan dalam beuntuk json
```

## jwt.verify()
untuk memverifikasi token yang dikirimkan kita bisa menggunakan fungsi verify, jika verify gagal maka token yang diberikan invalid atau ada perbahan, jika berhasil informasi akan didecode dan dikembalikan ke bentuk semula
```js
const { token } = req.headers.authorization.split(' ')[1];
/*
mengingat standard bearer dengan format
Bearer this_is_your_token
*/

// token didecode dengan key menjadi data yang bisa dimengerti
const decoded = jwt.verify(token, KEY);

console.log(decoded);
```

