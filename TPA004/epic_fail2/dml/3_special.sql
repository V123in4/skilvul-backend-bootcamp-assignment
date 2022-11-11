select * from (
select o.id, p.name, l.quantity, p.price from ( 
select id, date from orders as o 
where o.date between date_sub(sysdate(), interval 30 day) and sysdate() ) as o

-- category name
left join orders_lists as ol
on o.id = ol.id_order

left join lists as l
on ol.id_list = l.id

left join products as p
on l.id_product = p.id) as new_o

-- username
left join users_orders as uo
on uo.id_order = new_o.id

left join users as u
on uo.id_user = u.id
;