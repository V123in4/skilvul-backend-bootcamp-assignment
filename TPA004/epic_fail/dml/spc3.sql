select c.name, count(p.id_category) as hasItems from products as p
left join categories as c
on p.id_category = c.id
group by p.id_category
order by count(p.id_category) desc limit;

--tanya reinner
