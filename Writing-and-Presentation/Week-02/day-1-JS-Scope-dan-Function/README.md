# Day 1 JS Scope and Function
## Scope
scope adalah sebuah konsep dalam flow data variabel. scope menentukan, apakah variabel x dapat **diakses pada titik tertentu atau tidak**, atau manakah variable yang dapat diakses?,

Scope ditentukan oleh **block**, block adalah `{}` yang sebelumnya ada di for, while, if.

### Jenis-Jenis Scope
scope dibagi menjadi:
- global scope
- local scope

#### Global Scope
variabel yang dideklarasikan secara global dapat diakses dimanapun pada file tersebut.
```js
// pendeklarasian variable
let iAmGlobal = "global";

// pemakaian variable pada scope yang sama
console.log(iAmGlobal);

// pemakaian variable pada scope didalam for loop
for(let i = 0; i < 4; i++) {
    console.log(iAmGlobal);
}

// pemakaian variable pada sebuah arrow function
let myFunction = () => {
    console.log(iAmGlobal);
}
myFunction();
```

penggunaan variabel diatas valid semua karena deklarasi variabel global

#### Local Scope
variabel yang dideklarasikan secara local hanya bisa diakses pada scope tersebut contohnya

```js
// pendeklarasian variable
{
    // iAmLocal hanya bisa diakses disini
    let iAmLocal = "local";

    // pemakaian variable pada scope yang sama
    console.log(iAmLocal);

}

// pemakaian variabel diluar scope menimbulkan error
console.log(iAmLocal);

// pemakaian variable pada scope didalam for loop menimbulkan error
for(let i = 0; i < 4; i++) {
    console.log(iAmLocal);
}

// pemakaian variable pada sebuah arrow function dengan variable local
let myFunction = () => {
    let iAmLocal = "local";
    console.log(iAmLocal);
}
myFunction();
```

## Function
function adalah blok kode untuk menyelesaikan sebuah masalah yang dapat dipakai berulang kali. Ketika kita membutuhkan **kode yang sama** untuk menyelesaikan suatu masalah kita dapat **memanggil** function tersebut

### Cara-Cara Pendeklarasian Function
```js
// mendeklarasi fucntion dengan nama myFunction 
// yang tidak ada parameter
function myFunction() {
    console.log("hello world!");
}

// mendeklarasi function dengan nama 
// myFunction yang mewajibkan 2 buah parameter. 
// tugasnya mencetak hello world dan param1 + param2
function myFunction(param1, param2) {
    console.log("hello world!");
    console.log(param1, param2);
}

let myFunction = function() {
    console.log("hello world!");
}

// arrow function
let myFunction = () => console.log("hello world!");

let myFunction = (a, b) => a + b;

let myFunction = a => {
    return console.log(a);
}
```
**return** pada sebuah fungsi menandakan nilai yang akan dikembalikan ketika penggunakan fungsi tersebut contoh:
```js
let myFunction = a => {
    return console.log(a);
}
// menjadi myFunction = console.log(a);

let myFunction = (a, b) => a + b;
// menjadi myFunction = a + b;
```

### Cara Memanggil Function 
function dipanggil dengan cara menyebutkan nama function dan menambahkan (), jika **tidak** ingin menambahkan **argument** () saja cukup jika ingin **menambahkan argumen** 12 maka bisa ditambahkan didalam (12).

contoh:
```js
function foo(param1, param2) {
    return console.log(param1 + param2);
}

function bar() {
    console.log("Hello World!");
}

// memanggil foo
foo(1, 2);

// memanggil bar
bar();
```

### Parameter and Argument
apa yang membedakan parameter dan argumen?

parameter adalah variabel yang dapat digunakan oleh fungsi sebagai semacam **placeholder** untuk menyelesaikan suatu aksi.

arugment adalah **nilai** yang diberikan oleh programmer **pada sebuah fungsi.**
```js
// param1 dan param2 adalah sebuah parameter
function foo(param1, param2) {
    return param1 + param2;
}

// 1 dan 100 adalah argument
console.log(foo(1, 100))
```

### Default Parameter
default parameter adalah parameter jika tidak diberikan argumen akam menggunakan argumen yang diberikan pada deklarasi.
```js
function foo(name = "V") {
    console.log(name);
}

// jika dipanggil tanpa argumen
foo();
// maka mencetak V

// jika dipanggil menggunakan argumen
foo("Gday Sailor!");
// maka akan mencetak Gday Sailor!
```

### Helper Function
helper function adalah sifat fungsi yang dapat dipanggil didalam fungsi lainnya.
```js
function foo(a, b) {
    return a + b;
}

function bar(a, b) {
    console.log(foo(a, b))
}

bar(1, 2);
// akan mencetak 3
```