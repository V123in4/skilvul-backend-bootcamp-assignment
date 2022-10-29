# Web Server
Web server dibagi menjadi 2 bagian, software dan hardware. Pada sisi software sebuah web server harus dapat mengerti permintaan melalui web address (URL) dan protokol http untuk browser meminta data pada webserver tersebut. Ketika user meminta data melalui URL webserver harus dapat memberikan respon. Pada sisi hardware server merupakan sebuah komputer berskala besar yang terhubung dengan internet dan mendukung perpindahan data pada perangkat lain yang terhubung.

# Static Site
static site akan **mengirimkan data yang sama** (hard coded) berdasarkan permintaan. contoh:
```
client -- REQ --> server -----v
client <-- RES -- server <--- database
```
data yang dikirimkan server akan selalu sama
# Dynamic Site
dynamic site akan **mengirimkan data yang berbeda** umumnya dipakai untuk aplikasi web application. Sehingga permintaan user A dan B akan berbeda. contoh:

```
client -- REQ --> server --> web application <-> database
                                    V
client <-- RES -- server <-----------
```
pada tahan web application, web application akan meminta data kedatabase dan **merubah data** tersebut **berdasarkan ketentuan dari web application tersebut**.

# RESTful API
RESTful API sebetulnya sebuah API yang berstandard REST. Apa yang dimaksud dengan REST?. REST adalah REpresentational State Transfer. Standard REST digunakan untuk mengirimkan/menerima data tanpa mementingkan state. 

Sehingga **memisahkan client dan server**. Masalah client dapat diurus oleh client sendiri tanpa memerlukan server, jika server diperlukan client akan meminta data ke server. Sama dengan server. Masalah server adalah urusan server dan tidak ada hubungannya dengan client.

Pengimplementasian client dan server dapat terpisah, dan independen bahkan server dan client tidak perlu tau satu sama lain.

# URL Membuat Request
URL terdiri dari beberapa komponen dan juga dibalik URL ada beberapa komponen
1. **http method** yang sering digunakan lebih lengkap [disini](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
   1. GET, mengambil data.
   2. POST, mem**POSTING** / membuat data.
   3. PUT, update data.
   4. DELETE, DELETE data.
2. **body**, berisi data untuk untuk POST, PUT, DELETE, dll.

contoh link URL yang baik: `https://weberserver:1230/val-desc1/val1/val-desc2/val2`

sehingga jelas dibaca seperti di **JSON**
```JSON
{
    "val-desc1" : "val1",
    "val-desc2" : "val2",
}
```

# Response Code
response code dibagi menjadi 5:
1. 1xx, **informational**.
2. 2xx, operasi **berhasil** dilakukan.
3. 3xx, **redirection**.
4. 4xx, masalah pada client (**client error**).
5. 5xx, masalah pada server (**server error**).

detail seluruh response code tidak perlu dihafalkan tapi dapat diliat di [tabel](https://https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), namun secara garis besar kode respon harus diketahui.
