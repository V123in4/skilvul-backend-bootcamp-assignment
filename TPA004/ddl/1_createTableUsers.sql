create table users (
    id int primary key not null auto_increment,
    username varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null
);