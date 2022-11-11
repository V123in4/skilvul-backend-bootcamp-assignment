select c.name as category, count(p.id_category) as itemsHas from products as p

left join categories as c
on c.id = p.id_category

group by p.id_category
order by itemsHas desc limit 1;