select u.username, count(o.id_product) from orders as o
left join users as u
on o.id_user = u.id
group by o.id_product
having count(o.id_product) = 3;