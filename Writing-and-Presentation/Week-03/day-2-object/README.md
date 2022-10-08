# Object
Object adalah sebuah tipe data, untuk menyimpan properti dan fungsi/method. Properti adalah sebuah data yang ada di object tersebut, dan method atau fungsi merupakan apa yang dapat object tersebut lakukan.

object dideklarasikan menggunakan `{}`, object terdiri dari 2 komponen, key dan data, key digunakan untuk mengakses data, sedangkan data adalah data yang dapat diakses oleh key.

data disini dapat berisikan semua tipe variabel (termasuk object) dan juga method.

## Syntax Pendeklarasian Object
```js
let myObject = {
    key : data
}
```

## Contoh object
```js
let manusia = {
    nama : "ElgatoBoi",
    umur : 22,
    isSingle : true,
    muka : {
        hidung: "pesek",
        mata: "belo",
        jidat: "lebar"
    },
    barangKantong : ["hp", "kunci motor", "kunci rumah"],
    "ajak main game" : function() {
        return "Maap lagi sibuk";
    }
};
```

### Cara untuk mengakses object
untuk demonstrasi kita menggunakan object manusia diatas
```js
console.log(manusia.nama); // mencetak nama
console.log(manusia.umur); // mencetak umur
console.log(manusia.isSingle); // mencetak apakah single?
console.log(manusia.muka); //  mencetak object muka
console.log(manusia.muka.hidung); // mencetak hidung yang ada di object muka
console.log(manusia.muka.jidat); // mencetak jidat yang ada di object muka
console.log(manusia.barangKantong); // mencetak array tersebut
console.log(manusia.barangKantong[0], manusia.barangKantong[1]); // mencetak isi pertama dan kedua dari array barangKantong
console.log(manusia["ajak main game"]); // bmencetak kode dari fungsi tersebut.
console.log(manusia["ajak main game"]()); // menjalanka fungsi 
```
bagaimana cara membedakan penggunaan `[]` (bracket notation) dan `.` (dot notation)???

gunakanlah bracket notation jika key terdapat spasi, gunakanlah dot notation jika key tidak ada spasi.

## Array of Objects
object juga dapat menyimpan banyak data dengan cara menaruh object didalam array contoh:
```js
let dataMaba = [
    {nama: "chardo"
    mobil: "Brio RS"},
    {nama: "v"
    mobil: null},
    {nama: "gato BOIII"
    mobil: "kijang"},
]

dataMaba.foreach((data) => {
    console.log(data.nama, data.mobil);
})
```

## Object looping
looping object dapat menggunakan `for in`. contoh kita ingin melihat semua isi dari object manusia, tetapi kita tidak tau key-nya maka dapat menggunakan.

```js
for (let key in manusia) {
    console.log(manusia[key]); // mencetak isi dari manusia
}
```

## Mendapatkan list key dari object
```js
console.log(Object.keys(manusia)); // mencetak seluruh keys dalam manusia
```