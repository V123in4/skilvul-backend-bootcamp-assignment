select u.username, count(o.id_product) from orders as o
left join users as u
on o.id_user = u.id
group by o.id_product
having count(o.id_product) = 3;

SELECT agent_code, COUNT(agent_code) 
FROM orders  GROUP BY agent_code 
HAVING COUNT (agent_code)=( SELECT MAX(mycount) FROM ( SELECT agent_code, COUNT(agent_code) mycount FROM orders GROUP BY agent_code));