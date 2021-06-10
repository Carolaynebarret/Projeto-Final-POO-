create table curriculo (
	id bigint not null auto_increment,
    nome varchar(60) not null,
    email varchar(255) not null,
    fone varchar(20)not null,
    sexo varchar(10)not null,
    experiencia varchar(255) not null,
    formacao varchar(255) not null,
    cargo_desejado varchar(255) not null,
    aptidoes varchar(255) not null,
    objetivo varchar(255) not null,
    especial varchar(255) not null,
    
    primary key (id)
	

);