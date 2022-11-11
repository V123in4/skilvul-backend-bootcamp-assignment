create table users_orders (
    id int primary key not null auto_increment,
    id_user int,
    id_order int,
    foreign key (id_user) references users(id),
    foreign key (id_order) references orders(id)
)