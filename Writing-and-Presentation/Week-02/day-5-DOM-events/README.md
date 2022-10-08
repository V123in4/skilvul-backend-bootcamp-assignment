# DOM Event
Event adalah kejadian/kegiatan/interaksi yang terjadi pada website, interaksi tersebut diberikan oleh user sebagai input.

event merupakan pendeteksi aksi yang diberikan untuk programmer.

## Event pada DOM
sangat banyak event pada DOM semua dapat dipakai sesuai dengan kebutuhan dapat dilihat di list berikut pada w3school https://www.w3schools.com/jsref/dom_obj_event.asp

untuk penjelasan kita hanya menggunakan event onclick saja, karena onclick paling sering digunakan.

## Cara menangkap event
1. HTML attribute

```html
<div onclick="console.log('anda klik div')"> ini adalah div yang bisa diklik</div>
```

2. event property
syntax penggunaan event property
```js
element.eventType = function() {
    /* code */
}
```

berikut adalah contoh penggunaan event property pada tag a yang memiliki link, jika diklik anda akan diberikan peringatan jika keluar dari website tersebut.
```html
<a id="link-google" href="https://www.google.com">link</a>

<script>
let tagA = document.getElementById("link-google");
let warning = "anda akan dibawa website luar"; 
tagA.onclick = function() { // pendeteksian event
    alert(warning);
}
</script>
```

3. element.addEventListener()
- syntax penggunaan element.addEventListener()
```js
element.addEventListener(eventType, function() { 
    /* code */
})
```
- cara untuk menangkap event klik pada element id h1
```html
<h1 id="heading">
    Dunia akan terbelah dua
</h1>

<script>
    let elem = document.getElementById("heading"); // ambil element form
    let message = "Anda menemukan Easter Egg";

    elem.addEventListener("click", function() {
        alert(message);
    });
</script>
```
- cara untuk mengkap event form menggunakan eventlistener

```html
<h1>Halaman Pengisian Form</h1>
< id="umur-nama">
    <h2>Form</h2>
    <label for="nama">nama:</label>
    <input type="text" id="nama" name="nama" />

    <label for="umur">umur:</label>
    <input type="number" id="umur" name="umur" />

    <button type="submit">Submit</button>
</form>

<script>
    let elem = document.getElementById("umur-nama"); // ambil element form
    elem.addEventListener("submit", function (event) {
        event.preventDefault(); // mencegah supaya form tidak reload
        let data = {
            nama: document.getElementById("nama").value,
            umur: document.getElementById("umur").value,
        }; // ambil data dari form
        console.log(data); // print data pada console
        elem.reset(); // kosongkan form
    });
</script>
```