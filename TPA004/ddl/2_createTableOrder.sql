create table orders (
    id int primary key not null auto_increment,
    id_user int,
    id_order int,
    quantity int,
    date datetime
);