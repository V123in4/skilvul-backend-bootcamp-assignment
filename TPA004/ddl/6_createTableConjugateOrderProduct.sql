create table orders_products (
    id int primary key not null auto_increment,
    id_order int,
    id_product int,
    foreign key (id_order) references orders(id),
    foreign key (id_product) references products(id)
);