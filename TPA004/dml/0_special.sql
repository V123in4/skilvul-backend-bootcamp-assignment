select u.username, count(*) from transaction t
left join users u
on u.id = t.id_user
group by u.username
having count(*) = 3;