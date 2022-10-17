# Responsive Design
Responsive web design merupakan sebuah desain aplikasi yang dapat digunakan oleh berbagai macam ukuran layar.

contohnya layar komputer dapat menggunakan website A tanpa ada masalah, kemudian di handphone ada masalah website tersebut bukanlah website rensponsive, dikarenakan pengguna kesulitan untuk menggunakan website dilayar hp

jika pengguna dapat menggunakan website dengan desain yang baik dilayar hp, komputer, tablet, maka website tersebut adalah website responsive

## Viewport
viewport adalah

## Satuan yang dipakai untuk responsive
dalam responsive memakai satuan berbeda dengan web statis yang menggunakan px:
1. % , percent:
    
    satuan tersebut memakai ukuran relatif terhadap parent element, seandainya parent memiliki ukuran 100px, maka elemen child yang diberikan 10% adalah 10px.

    satuan persen juga berhubungan dengan vh dan vw
2. fr (fraction)
    
    fr merupakan satuan baru yang dipakai untuk css grid.
3. vh (viewport height)

    merupakan ukuran berdasarkan tinggi dari viewport, seandainya viewport 512px, elemen tersebut jika memakai 10vh, menjadi 51.2px.
4. vw (viewport width)

    merupakan ukuran berdasarkan lebar dari viewport, 


## Tag Media
tag media digunakan untuk membuat layout responsive, sehingga style didalam tag tersebut digunakan jika kondisi ukuran yang  digunakan valid terhadap kondisi yang diberikan. 

perlu diketahui tag media dapat digunakan lebih dari 1, sehingga css yang digunakan dberbagai macam dengan 1 website.

contoh:
```css
/* berlaku jika ukuran layar dibawah 600px */
@media {max-width: 323px} {
    /* css yang digunakan */
}
/* berlaku jika ukuran layar lebih dari 324px dan kurang dari 600px */
@media { min-width: 324px and max-width: 600px } {
    /* css yang digunakan */
}
```
# Bootstrap
bootstrap merupakan library css yang sudah responsif dan dibuat oleh twitter

## Cara menggunakan bootstrap
tambahkan kode berikut ke tag head atau body
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
```
jika telah menambahkan tag tersebut maka bootstrap sudah diinstall di file tersebut.
## Grid
bootstrap membuat setiap komponen menjadi grid berkolom 12. untuk setiap barisnya diberikan kelas row. setiap komponen untuk grid diberikan kelas col, disini karena colom ada 3 maka colom akan mengisi ke 12 titik colom tersebut. 

```html
<div class="container text-center">
    <div class="row">
        <div class="col">
            Column
        </div>
        <div class="col">
            Column
        </div>
        <div class="col">
            Column
        </div>
    </div>
</div>
```

col diatas memakan col sebanyak 12 dan ukuran setiap col adalah 4, ukuran col bisa diatur dengan cara menambahkan `-<ukuran>` pada kolom tersebut.
```html
<div class="container text-center">
    <div class="row">
        <div class="col">
            Column
        </div>
        <div class="col-3">
            Column
        </div>
        <div class="col">
            Column
        </div>
    </div>
</div>
```
kode diatas membuat col berukuran 4.5, 3, 4.5.
## Contoh
contoh navbar pada website bootstrap

