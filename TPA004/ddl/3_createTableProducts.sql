create table products (
    id int primary key not null auto_increment,
    name varchar(255),
    price varchar(255),
    id_category int,
    foreign key (id_category) references categories(id)
);