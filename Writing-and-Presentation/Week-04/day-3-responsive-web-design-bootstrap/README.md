# Responsive Design
Responsive web design merupakan sebuah desain aplikasi yang dapat digunakan oleh berbagai macam ukuran layar.

contohnya layar komputer dapat menggunakan website A tanpa ada masalah, kemudian di handphone ada masalah website tersebut bukanlah website rensponsive, dikarenakan pengguna kesulitan untuk menggunakan website dilayar hp

jika pengguna dapat menggunakan website dengan desain yang baik dilayar hp, komputer, tablet, maka website tersebut adalah website responsive

## Satuan yang dipakai untuk responsive

%
fr
vh
vw
## Tag Media
tag media digunakan untuk membuat layout responsive, sehingga style didalam tag tersebut digunakan jika kondisi ukuran yang  digunakan valid terhadap kondisi yang diberikan. 

perludiketahui tag media dapat digunakan lebih dari 1, sehingga css yang digunakan dberbagai macam dengan 1 website.

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

## Grid

## Contoh