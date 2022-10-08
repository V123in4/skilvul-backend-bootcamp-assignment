# DOM Manipulation
DOM manupulation adalah istilah yang digunakan ketika kita sebagai developer merubah elemen dari website menambahkan, menghapus, atau memodifikasi.

untuk menjelaskan lebih jelas kita lebih baik menggunakan langsung javascript.

file hyml untuk penjelasan.
```html
<body>
    <!-- kontainer web -->
    <div id="app">
        <h1>Judul</h1>
        <div id="content" alt="14054">lorem ipsum sit amet</div>
    </div>
</body>
```

## Memberikan / Memodifikasi konten pada tag
pertama-tama kita harus ambil tag yang ingin kita ubah
```js
let content = document.getElementById("content");
```

untuk merubah elemen kita dapat menggunakan 2 cara yang pertama innerHTML yang kedua innerText

perbedaan innerHTML dan innerText adalah innerText mengganggap yang kita berikan adalah sebuah string, sedangkan innerHTML mengganggap isi teks tersebut adalah kode html sehingga menangkap text tersebut

```js
content.innerHTML = "<a href='https://www.google.com'>link</a>"
```
akan dirender sebagai html tag yang dapat diklik dan kelanjutkan ke google


```js
content.innerText = "<a href='https://www.google.com'>link</a>"
```
akan dirender sebagai teks, yang dirender adalah teks tersebut

## Membuat Element
Elemen HTML dapat dibuat lebih dahulu sebelum ditambahkan kedalam file html, untuk menambahkan elemen kita harus mengambil parent element dahulu dan kemudian menambahkan element tersebut.

elemen html memliki istilah node.

```js 
let parent = document.getElementById("app");

// buat element 
let p = document.createElement("p");
// p dapat dianggap sebagai html elemen yang dapat dimodifikasi

// modifikasi element
p.innerText = "kalimat terdiri dari 2 kata";

// tambahkan ke parent
parent.appendChild(p);

// untuk menambahkan sebuah string pada parent dapat menggunakan 
parent.append("kalimat terdiri dari 2 kata");
```
append child tidak dapat menambahkan elemen string, sehingga harus menggunakan append.

## Menghapus Element
element dapat dihapus di menggunakan javascript dengan cara menambahkan .remove() pada elemen tersebut `element.remove()`
```js
// contoh menghapus app

// ambil app
let app = document.getElementById("app");

// hapus app
app.remove();
```

## Menambahkan / Mengubah attribute
```js
// menampilkan list attribute
let content = document.getElementById("content"); // element

// mencetak seluruh attribute didalam elemen tersebut.
// elem.attributes
console.log(content.attributes)

// mengambil isi dari attribute yang diinginkan 
// elem.getAttribute("attr")
// dibawah mengembalikan id
console.log(content.getAttribute("id"));

// menambahkan attribute
// elem.setAttribute("attr", "attr_value")
content.setAttribute("href", "https://www.google.com");
```

## Menghapus Attribute
syntax merubah attribute
```js
elem.removeAttribute("attribute");
```
contoh ingin manghapus attribute alt
```js
// ambil element
let elem = document.getElementById("content");

// hapus attribute
elem.removeAttribute("alt");
```

## Memberikan / Mengubah Style pada Element
syntax untuk merubah element
```js
elem.style.property = "value"
```

contoh untuk menambahkan padding sebanyak 40px di atas, bawah, kanan, dan kiri
```js
// ambil element
let app = document.getElementById("app");

// tambah style
app.style.padding = "40px"
```

## Menghapus Style pada Element
syntax menghapus element
```js
elem.style.removeProperty("property") 
```

contoh untuk menghapus padding yang dibuat
```js
app.style.removeProperty("padding")
```

## Membaca Style pada Element
kita dapat membaca style pada sebuah element dengan cara

```js
let styles = getComputedStyle(elem);
```
contoh ingin menambahkan styles pada elemen app

```js
// ambil element
let app = document.getElementById("app");

// tambahkan style
app.style.padding = "40px"
app.style.margin = "0px"
app.style.backgroundColor = "black"

// ambil style pada element
let appStyle = getComputedStyle(app);
// liat style yang ditambahkan
console.log(appStyle);
```
## Memberikan atau Menghapus Class
syntax untuk memberikan kelas
```js
elem.classList.add("myClass");
```

syntax untuk menghapus kelas
```js
elem.classList.remove("myClass")
```
contoh: ingin menambahkan kelas btn dan menghapus kelas primary

```js
// ambil element
let content = document.getElementById("content");

// tambah class btn
content.classList.add("btn");

// hapus class primary
content.classList.remove("primary");
```

## Melihat Class
syntax untuk melihat class
```js
let class = element.classList;
```

contoh ingin print classList pada content
```js
// ambil content
let content = document.getElementById("content");

// ambil class list
classes = content.classList;

console.log(classes);
```