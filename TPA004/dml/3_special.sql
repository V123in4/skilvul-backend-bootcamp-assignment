-- tampilkan
select y.username, avg(y.total) from 

(select u.username, t.total from 
-- filter tanggal
(select * 
from transaction t
where t.time 
between date_sub(sysdate(), interval 30 day) and sysdate()) as x 

-- ambil nilai total
left join total_price t
on x.id_total = t.id

-- ambil nama user
left join users u 
on x.id_user = u.id) as y
group by y.username;