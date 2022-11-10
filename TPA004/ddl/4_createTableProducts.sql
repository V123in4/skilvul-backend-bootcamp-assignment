create table products (
    id int not null primary key auto_increment,
    name varchar(255),
    quantity int,
    price float,
    id_category int,
    foreign key (id_category) references categories(id)
);