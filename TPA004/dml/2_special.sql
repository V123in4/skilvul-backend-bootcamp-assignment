select c.name, count(p.id_category) as category_count from products p
left join categories c
on p.id_category = c.id
group by c.name
order by category_count desc limit 1;

-- disini sebetulnya kurang baik dikarenakan bisa saja 
-- count(p.id_category) bernilai sama sehingga data tersebut
-- tidak ditampilkan meski melanggar aturan maximum nilai tersebut sama