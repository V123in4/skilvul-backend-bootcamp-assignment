# Day 2 JS Data Types, Built in Methods

## Data Types
data types adalah tipe data

data types garis besar dibagi menjadi 2 kategori primitive dan objects, tipe daya dijavascript tidak memiliki fondasi yang kuat contohnya kita bisa merubah-ubah tipe data.
```js
let myVar = "s" // tipe string
myVar = 1 // tipe number
myVar = {x:1} // tipe object
myVar = Undefined // tipe Undefined
myVar = NaN // tipe NaN (not a number)
```

### Primitive Data Types
primitive hanya memiliki 1 sifat.
primitive data types terdiri dari:
- Boolean: mendeskripsikan nilai true/false atau 1/0
```js
let bool = true;
```
- Null: menandakan sebuah variabel tidak ada isi
```js
let nullExample = null;
```
- Undefined: menandakan sebuah variabel belum terdefinisi suatu nilai atau "undefined"
```js
let x;
```
- Numeric
  - Number: menandakan variabel sebagai angka
  - BigInt: dapat menyimpan variabel diluar jangkauan aman number
  - NaN: menandakan variabel bukanlah angka
```js
let num = 10;
// sebuah variabel angka

let bigNum = BigInt(1000000000000000000000000000000);
// sebuah variabel angka yang SAANGGATTTT BESARRR, 
// harus disimpan menggunakan BigInt(); 
// karena jika melewati Number.MAX_SAFE_INTEGER 
// akan menjadi Number.MAX_SAFE_INTEGER
// contoh:
console.log(Number.MAX_SAFE_INTEGER == Number.MAX_SAFE_INTEGER + 100 ? "sama" : "beda");
// akan mencetak sama

let nanExample = 0/0;
// menjadi NaN dikarenakan string tidak dapat dikalikan number
```
- String: menandakan variabel sebuah huruf, dan string memiliki sifat yang tidak dapat dimutasikan.
```js
let str = "abcd";
```


### Object Data Types
Properti dari object:
- value: Nilai yang diambil oleh akses dengan properti.
- writable: boolan yang menandakan apakah nilai dapat dirubah dengan perintah. `obj.name = "envyx"`
- enumerable: object dapat diiterasikan dengan menggunakan `for in...`
- configurable: sebuah boolean yang mengindikasikan apakah nilai/properti dari object dapat dirubah seperti di detele atau tambah.

## Built in Methods
### Math
Math adalah sebuah fungsi yang ada di javascript dan dapat diakses menggunakan `Math.`
```js
Math.method()
// atau
Math.property
```

beberapa method yang sering digunakan adalah sebagai berikut
- Math.PI, menampilkan nilai PI `3.14...`
```js
console.log(Math.PI);
```
- Math.abs(), membuat seluruh nilai positif
```js
console.log(Math.abs(-1));
// mencetak 1
```
- Math.ceil(), membulatkan keatas
```js
console.log(Math.ceil(Math.PI));
// mencetak 4
```
- Math.floor(), membulatkan kebawah
```js
console.log(Math.floor(Math.PI));
// mencetak 3
```
- Math.round(), membulatkan ke nilai terdekat jika 5.1 kebawah menjadi 5, 5.5 keatas menjadi 6s
```js
console.log(Math.round(Math.PI));
// mencetak 3
```
- Math.random(), memberikan angka acak dari dari 0 sampai 1
```js
console.log(Math.random());
// mencetak angka acak dari 0 sampai 1
```

list dari **seluruh** Math property dan methods yang ada https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math?retiredLocale=id

### Prototype functions
prototype function adalah method atau properti yang ada pada sebuah variabel, contohnya jika kita memiliki variable 

integer memiliki beberapa prototype function

list dari seluruuh prototype function int dapat dilihat di https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

```js
let x = 1.129391208347;
// mari kita simpan x di foo
let foo = x.toFixed(3);
// toFixed akan mengambil angka sampai desimal ke-3
// maka foo akan berisikan 1.129
console.log(foo);
```
string juga memiliki prototype function 

list dari seluruh prototype function string https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String?retiredLocale=id
```js
let str = "   Hello mate!      ";
console.log(str.toUpperCase());
// str akan dicetak semua tetapi huruf kapital dengan spasi

console.log(str.toLowerCase())
// str akan dicetak semua tetapi huruf kecil dengan spasi

console.log(str.trim());
// str akan mencetak str tampa spasi dikanan dan kiri

// kita dapat menggunakan beberapa prototype sekaligus
console.log(str.trim().toUpperCase());
// str akan dicetak semua tetapi huruf kapital tanpa spasi
```

selain itu kita dapat membuat prototype function dengan cara seperti ini
```js
String.prototype.sarkas = function() {
	newStr = "";
	str = String(this);
	for(let i = 0; i < str.length; i++) {
		if(i % 2) {
			newStr += str[i].toLowerCase();
		} else {
			newStr += str[i].toUpperCase();
		}
	}
	return newStr;
}
```
prototype function akan merubah string dari `"saya suka makan atau tidak"` menjadi `"SaYa sUkA MaKaN AtAu tIdAk"`

fungsi tersebut berada di String.prototype.methods sehingga seluruh tipe data string dapat mengakses method tersebut.
