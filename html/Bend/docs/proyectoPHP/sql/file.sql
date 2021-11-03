DROP DATABASE IF EXISTS ventaentradas;

CREATE DATABASE ventaentradas;

CREATE TABLE users(
    username varchar(255) PRIMARY KEY,
    password varchar(255),
    nombre varchar(255),
    apellidos varchar(255),
    fechaNacimiento date,
    tipoUsuario int(1)
);

CREATE TABLE organizadores(
    idOrganizador int AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(64),
    descripcion varchar(64)
);

CREATE TABLE eventos(
    idEvento int AUTO_INCREMENT PRIMARY KEY,
    idOrganizador int,
    nombreEvento varchar(255),
    descripcionEvento TEXT,
    localizacionEvento varchar(64),
    FOREIGN KEY (idOrganizador) REFERENCES organizadores(idOrganizador) ON DELETE CASCADE
);

CREATE TABLE tickets(
    idTicket int AUTO_INCREMENT PRIMARY KEY,
    idEvento int,
    precioTicket int(3),
    username varchar(255),
    FOREIGN KEY (idEvento) REFERENCES eventos(idEvento) ON DELETE CASCADE,
    FOREIGN KEY (username) REFERENCES users(username)
);

CREATE TABLE cupones(
    idCupon int AUTO_INCREMENT PRIMARY KEY,
    username varchar(255),
    codigoCupon varchar(64),
    cuantia int(3)
);

INSERT INTO users(username,password,nombre,apellidos,fechaNacimiento,tipoUsuario) values
    ("root","root","root","root","1970-01-01",1);

INSERT INTO organizadores(nombre,descripcion) values 
    ("Fabrik Madrid", "Club de Musica Electronica");

INSERT INTO eventos(idOrganizador,nombreEvento,descripcionEvento,localizacionEvento) values 
    (1,"Code Aniversario","Aniversario techno evento","Humanes, Madrid"),
    (1,"150 HeadHunterz","Hardcore","Humanes, Madrid");

INSERT INTO tickets(idEvento,precioTicket,username) values
    (1,20,null),
    (1,20,null),
    (2,30,null),
    (2,30,null);

INSERT INTO cupones(username, codigoCupon, cuantia) values
    (null,1,10),
    (null,1,10),
    (null,1,10);