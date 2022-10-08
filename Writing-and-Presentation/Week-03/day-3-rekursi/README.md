# Rekusi
rekursi adalah sebuah fungsi yang memanggil dirinya sendiri sampai suatu kondisi tercukupi. Rekursi jarang digunakan pada programming konvensional, tetapi cukup sering dalam aplikasi scientic seperti fisika matematika, kimia, biologi.

contoh kasus matematika yang menggunakan ini adalah psudorandom number generator atau teori chaos.

## Syntax Rekursi
```js
function myFunction() {
    // kode
    myFunction();
    // kode lagi
}
```
seperti yang dapat dilihat myFunction memanggil dirinya sendiri didalam myFunction.
## Struktur rekursi
```js
function myFunction(n) {
    if( /* kondisi n*/ )
    {
        
    } else 
    {
        myFunction(n - 1 /* dapat disesuaikan dengan keperluan*/);
    }
}
```

## Contoh fungsi rekursi
```js
function countDown(start, stop) {
    if(start == stop) {
        console.log(stop);
    } else {
        console.log(start);
        countDown(start - 1, stop);
    }
}

countDown(10, -5);
```
untuk lebih berguna mungkin kita dapat mengkalkulasi nomor fibonaci
```js
function fibonaci(n) {
    if (n <= 1){
        return n;
    }
    else {
        return fibonaci(n - 1) + fibonaci(n - 2);
    }
}

console.log(5); // mencetak 55
```