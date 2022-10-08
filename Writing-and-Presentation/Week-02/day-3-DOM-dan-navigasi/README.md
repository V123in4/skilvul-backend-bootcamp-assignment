# DOM Intro dan Navigasi
## Apa yang dimaksud dengan DOM?
DOM adalah singkatan dari **Document Object Model**, perlu diketahui DOM **BUKAN** bagian dari javascript. Melainkan bagian dari web API.

ketika sebuah halaman diload browser membuat sebuah pohon object. javascript dapat merubah elemen-elemen tersebut. Sebelum dirubah javascript harus mendapatkan elemen tersebut.

## Navigasi dalam DOM
definisi:

html collection adalah semacam **array** TAPI **BUKAN ARRAY** yang dikembalikan oleh selector jika elemen tersebut jamak (lebih dari 1).
## Mencari sebuah element DOM
```js
document.getElementById("myId");
// mengembalikan dalam bentuk html element

document.getElementsByClassName("myClass");
// mengembalikan html collection

document.getElementsByTagName("p");
// mengembalikan html collection

// query selector(s) menggunakan css selector untuk memilih sesuatu
document.querySelector("div > p");
// mengembalikan p pertama dengan parent div

document.querySelectorAll("ul > li");
// mengembalikan seluruh li dengan parent ul nilai pengembalian 
// html collection
```

## Mencari Parent Element
sebagai contoh untuk memudahkan penjelasan kita menggunakan html dibawah.
```html
<header id="parent" class="demo">
    <p id="pTag">sebuah kalimat</p>
    <div class="demo">
        <p id="child">sebuah kalimat berteks</p>
    </div>
</header>

<script>
    let parentOfP = document.getElementById("pTag").parentElement;
    // sekarang parentOfP berisi div tersebut dikarenakan 
    // parent dari elemen ber id Teks adalah header

    // closest menggunakan selector css untuk memilh sebuah elemen
    let closestDemo = document.getElementById("child").closest(".demo");
    // sekarang closestDemo bernilai div dikarenakan elemen
    // class bernama demo terdekat adalah div
</script>
```

## Mencari Sibling atau element disebelah
sibling adalah elemen yang setara secara pohon dom, atau memiliki parent terdekat yang sama. supaya lebih jelas langsung menggunakan penjelasan menggunakan contoh, disini ada unordered lists dengan isi 4 lists. 
```html
<ul>
    <li id="1">One</li>
    <li id="2">Two</li>
    <li id="3">Three</li>
    <li id="4">Four</li>
</ul>

<script>
    let listTwo = document.getElementById("2");
    let listThree = document.getElementById("3");

    console.log(listTwo.previousElementSibling);
    // mencetak element sebelum 2, yaitu li dengan id 1
     
    console.log(listTwo.nextElementSibling);
    // mencetak element sesudah 2, yaitu li dengan id 3

    console.log(listThree.previousElementSibling);
    // mencetak element sebelum 3, yaitu li dengan id 2

    console.log(listThree.nextElementSibling);
    // mencetak element sebelum 3, yaitu li dengan id 4
</script>
```

