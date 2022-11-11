create table orders (
    id int primary key not null auto_increment,
    quantity int,
    notes varchar(255),
    date datetime
);