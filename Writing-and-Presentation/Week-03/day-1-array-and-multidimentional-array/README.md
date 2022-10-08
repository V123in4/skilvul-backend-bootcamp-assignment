# Day-1 Array dan Array Multi Dimensi
## Array
Array adalah sebuah tipe data yang dapat menyimpan banyak data di dalamnya, untuk javascript array dapat menyimpan data tipe apapun

array dibuat dengan cara mendeklarasi menggunakan `[]`

syntax pembuatan array:
```js
var myArray = []; // mendeklarasi array kosong
```
menambahkan isi kepada array saat deklarasi, contoh:
```js
let myArray = ["EPIC", "NER", "MOMEN"];
// array diatas hanya memiliki tipe data string
```
**INGAT** array dapat menyimpan seluruh tipe data didalam array:
```js
let myArray = ["v", 173, 34.1, true, 
              ["EPIC", "NER", "MOMEN"], 
              {key: "data"}];
```
array diatas akan digunakan untuk menjelaskan selanjutnya.

array dapat dipanggil dengan menggunakan nama dari array `myArray`

```js
console.log(myArray); // mencetak keseluruhan array
```

untuk mengakses data didalam array dapat menggunakan `[index]` setelah nama array, index adalah sebuah angka untuk menandakan data yang ingin di akses.

```js
console.log(myArray[0]); // untuk mencetak isi pertama dari array "v"
console.log(myArray[1]); // untku mencetak isi kedua dari array 173

console.log(myArray[-1]); // untuk mencetak isi terakhir dari array
```

isi dari array dapat dirubah dengan cara:
```js
myArray[index] = newData;
```
contoh:
```js
// data dengan index 1 173 ingin dirubah
myArray[1] = 100;
```

## Sifat array const
array const dapat dirubah isinya tetapi variabel tidak dapat dirubah
```js
const constArray = [1, 2, 3];
constArray[0] = 4; // tidak error
// tidak error karena merubah isi bukan keseluruhan variabel

constArray = [2, 4] // error
constArray = "str" // error
// error dikarenakan merubah keseluruhan variabel
```

## Array properties
untuk melihat seluruh properties / method dapat di link berikut https://www.w3schools.com/jsref/jsref_obj_array.asp
```js
// property yang sering digunakan adalah
myArray.length
myArray.index
myArray.constructor
myArray.input
myArray.prototype
// namun untuk pembahasan mari menggunakan length
let arrayLength = myArray.length // akan mengembalikan panjang 
// dari array tersebut, namun panjang tersebut dimulai dari 1
// tidak dari 0 seperti untuk mengakses array dengan index.
```

## Array method
```js
let data = myArray.pop(); // mengembalikan data dibelakang array dan menghapusnya
myArray.push(data); // menambahkan data dibelakang array
let data = myArray.shift(); // mengembalikan data didepan array dan menghapusnya
myArray.unshift(data); // mebambahkan data didepan array
myArray.sort(); // sort data berdasarkan alpha numnerik
```

## Array looping
foreach digunakan untuk looping suatu array tanpa membuat array baru
```js
let myArray = [1, 2, 3];

function myFunction(data, index, array) {
    array[index] = data * 0.5;
}

myArray.foreach((data, index) => {
    return data + 1; // setiap data ditambah satu
});

myArray.foreach(myFunction); // sifatnya sama dengan map
// tetapi memodifikasi myArray tidak membuat array baru
```

map untuk looping suatu array dengan membuat array baru.
```js
let newArray = myArray.map((data, index, accumulator) => {
    /* kode */
});
// data adalah data pada index n
// index adalah sampai index berapa looping sekarang
// accumulator adalah nilai yang disimpan dan akan dilanjutkan
// pada iterasi selanjutnya
// newArray dibuat untuk menyimpan data baru yang dibuat oleh map
```
contoh:
```js
let myArray = [1, 2, 10];
let newArray = myArray.map(data => data * 10);
// map mengalikan my array 10 dan menyimpannya pada newArray sebagai array
// tanpa merubah myArray
```
## Multi Dimentional Array
pada prinsipnya miltu dimentional array adalah array yang berada di dalam array sehingga pernyataan diatas tetap berlaku dengan sedikit penambahan.

```js
let multiArray = [
    ["Leo", 7],
    ["Fina", 10],
    ["Hujan", 100]
]

// mengetahui panjang array didalam array
let arr0Len = multiArray[0].length; 
// mengembalikan panjang array pertama

// mengakses data didalam array 
console.log(multiArray[0][0], multiArray[0][1]); // akan print "Leo 7"

// looping menggunakan foreach
multiArray.foreach(data => console.log(data));
// akan print array didalamnya

multiArray.foreach(data => console.log(data[0], data[1]));
// akan print data array selama looping
// perlu diingat ada array didalam array
```
