select u.username, avg(p.price*o.quantity) as avg_transaction from orders as o
left join products as p on p.id = o.id_product
left join users as u on u.id = o.id_user
where o.date between date_sub(sysdate(), interval 31 day) and sysdate()
group by u.username
order by u.username;