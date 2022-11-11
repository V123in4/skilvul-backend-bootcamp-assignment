select u.username, count(l.id_product) as product_count from orders as o
left join users_orders as uo
on o.id = uo.id_order

left join users as u
on u.id = uo.id_user

left join orders_lists as ol
on o.id = ol.id_order

left join lists as l
on l.id = ol.id_order

group by u.username
having count(l.id_product) = 3
;