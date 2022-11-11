select p.name, count(id_product) as mode from transaction t
left join products p
on p.id = t.id_product
group by t.id_product
order by count(t.id_product) desc limit 3;

-- disini sebetulnya kurang baik karena 
-- tidak ada handle case modus sama seandainya 
-- jika ada 4 modus bernilai sama maka salah satu dari 
-- produk tersebut tidak ditampilkan

-- idealnya keempat produk tersebut ditampilkan 
-- meskipun melanggar aturan "3 tertinggi"
-- dikarenakan nilainya sama