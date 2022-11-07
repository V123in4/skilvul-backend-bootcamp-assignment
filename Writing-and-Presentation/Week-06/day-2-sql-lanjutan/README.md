Mengetahui dan memahami join multiple tables pada MySQL
Mengetahui dan memahami Aggregate Function pada MySQL
Mengetahui dan memahami penggunaan sytax UNION pada MySQL
Mengetahui dan memahami penggunaan sytax GROUP BYpada MySQL
Mengetahui dan memahami penggunaan sytax HAVING pada MySQL
Mengetahui dan memahami penggunaan sytax LIKE pada MySQL
Mengetahui dan memahami penggunaan Wildcards Characters pada MySQL

Sebelumnya dijelaskan tentang data mySQL dan query sederhana sekarang akan dijelasan query yang sambung menyambung dan juga query yang menggunakan join.
# Join mySQL
join pada mySQL dibagi menjadi beberapa jenis diantaranya:
1. left join
   1. left join merupakan join yang paling sering digunakan.
2. right join
3. inner join

contoh penggunaan:
```sql
-- 1. left join
select s.name, s.nim, c.name
from student as s
left join class as c
on s.class_id = c.id;
-- query akan menampilkan seluruh student meskipun tidak ada class_id match

-- 2. right join
select s.name, s.nim, c.name
from student as s
right join class as c
on s.class_id = c.id;
-- query menampilkan seluruh class meskipun tidak ada student yang mengambilnya

-- 3. inner join
select s.name, s.nim, c.name
from student as s
inner join class as c
on s.class_id = c.id;
-- query menampulkan seluruh class jika kelas ada student, dan student ada class
```

# Aggregate function
fungsi aggregate dapat menghitung sebuah nilai didalam kolom, fungsi aggregate yang sering digunakan sebagai berikut:
1. MAX, mengambil nilai max pada sebuah coloumn.
2. MIN, mengambil nilai min pada sebuah coloumn.
3. SUM, menjumlahkan coloumn yang dipilih.
4. COUNT, menghitung banyak baris yang dipilih.

contoh penggunaan
```sql
-- mengembalikan nilai tertinggi item bernama vegetable
select max(quantity)
from store
where item = "vegetable";

-- mengembalikan nilai terendah item bernama vegetable
select min(quantity)
from store
where item = "vegetable";

-- mengembalikan jumlah item bernama vegetable
select sum(quantity)
from store
where item = "vegetable";

-- mengembalikan jenis item bernama vegetable
select count(quantity)
from store
where item = "vegetable";
```

# Union
Union akan mengabungkan dua tabel tanpa duplikat. contoh kita ada 2 tabel, store1, dan store2.
```sql
select product from store1
union
select product from store2;
-- berasumsi product bertipe data yang sama
-- query mengembalikan product pada store1 dan store2 tanpa duplikat.
```

# Group by
mengelompokan berdasarkan data pada coloumn pilihan
```sql
select nama_depan, count(nama_depan)
from student
group by student;
-- pilih semua nama_depan dan hitung nama_depan yang sama, kelompokan bersadarkan student.
```

# Having
having berfungsi sama saja dengan where yaitu conditional, tetapi having berfungsi dengan fungsi aggregate dan where tidak.