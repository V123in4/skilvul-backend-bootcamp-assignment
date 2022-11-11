create table lists (
    id int not null primary key auto_increment,
    id_product int,
    foreign key (id_product) references products(id),
    quantity int
);