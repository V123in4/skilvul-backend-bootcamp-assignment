create table transaction (
    id int primary key not null auto_increment,
    id_user int,
    id_product int,
    time date,
    quantity int,
    id_total int,
    foreign key (id_user) references users(id),
    foreign key (id_product) references products(id),
    foreign key (id_total) references total_price(id)
);