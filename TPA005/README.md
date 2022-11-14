# TPA-005 Documentation

## Init
command inisialisasi dapat dilihat di file `init.sh`

## Register
pertamakali digunakan untuk menyimpan akun di database.
#### POST: `localhost:PORT/register`
##### request body:
```json
{
    "name" : "name",
    "email" : "email@email.com",
    "password" : "password"
}
```

jika akun berhasil dibuat akan memberikan pesan, jika akun sudah ada di database maka akun tidak dibuat dan menampilkan error.


## Login
berfungsi untuk proses authorisasi. Client setelah terauthorisasi menerima token, token harus disertakan di header authentication Bearer untuk authentikasi masa depan.

#### POST: `localhost:PORT/login`
##### Request body
```json
{
    "email" : "vinni@gmail.com",
    "password" : "password1"
}
```
##### Response body
```json
{
    "token" : "thisistoken"
}
```
## ToDo
endpoint ini akan mengirimkan sebuah token baru untuk update token lama sehingga sesi akan terus berlanjut jika melakukan aksi. Token baru dikirim dengan format.
```json
{
    "token" : "thisistoken"
}
```

### GET: `localhost:PORT/todos`
Header Bearer harus disertakan. Endpoint bertugas mengambil seluruh todolist yang dimiliki user tersebut. Request akan merespon dengan sebuah token baru dan data berbentuk array of objects
```json
{
    "token": "Bearer thisistoken",
    "data": [
        {
            "id": 26,
            "title": "asdlkfjadsas;jkl",
            "check": false,
            "updatedAt": "2022-11-13T10:29:45.000Z"
        }
    ]
}
```

### POST: `localhost:PORT/todos`
Header Bearer harus disertakan. Endpoint bertugas untuk membuat sebuah todo list milik user.

##### Request Body
```json
{
    "data" : {
        "title" : "asdlkfjadsas;jkl",
        "description" : "459068-2890-"
    }
}
```



### DELETE: `localhost:PORT/todos`
Header Bearer harus disertakan. Endpoint bertugas untuk menghapus **SELURUH todolist** yang dimiliki oleh User.

### PUT: `localhost:PORT/todos/:id`
Header Bearer harus disertakan. Endpoint bertugas untuk mengedit todolist berdasarkan user dan id todolist. Request harus disertakan dengan body
```json
{
    "data":  {
        "title" : "new title"
    }
}
```

### DELETE: `localhost:PORT/todos/:id`
Header Bearer harus disertakan. Endpoint bertugas untuk menghapus todolist berdasarkan user dan id todolist.

### GET: `localhost:PORT/detail/:id`
Header Bearer harus disertakan. Endpoint bertugas untuk mengembalikan detail dari todolist berdasarkan id yang diberikan.
```json
{
    "token": "Bearer thisistoken",
    "data": [
        {
            "id": 26,
            "description": "asdlkfjadsas;jkl",
            "updatedAt": "2022-11-13T10:29:45.000Z"
        }
    ]
}
```
