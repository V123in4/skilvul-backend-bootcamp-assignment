create table orders_list (
    id int primary key not null auto_increment,
    id_order int,
    id_list int,
    foreign key (id_order) references orders(id),
    foreign key (id_list) references list(id)
);