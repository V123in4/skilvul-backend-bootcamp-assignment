create table categories (
    id int primary key not null auto_increment,
    name varchar(255),
    description_short varchar(255),
    description varchar(1023),
);