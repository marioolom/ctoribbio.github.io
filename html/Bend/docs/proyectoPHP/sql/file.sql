DROP DATABASE IF EXISTS ventaentradas;

CREATE DATABASE ventaentradas;

USE ventaentradas;

CREATE TABLE users(
    username varchar(255) PRIMARY KEY,
    password varchar(255) NOT NULL,
    nombre varchar(255) NOT NULL,
    apellidos varchar(255) NOT NULL,
    fechaNacimiento date NOT NULL,
    tipoUsuario int(1) NOT NULL
);

CREATE TABLE organizadores(
    idOrganizador int AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(64) NOT NULL,
    descripcion varchar(64) NOT NULL,
    codAcceso varchar(255) NOT NULL
);

CREATE TABLE eventos(
    idEvento int AUTO_INCREMENT PRIMARY KEY,
    idOrganizador int NOT NULL,
    nombreEvento varchar(255) NOT NULL,
    descripcionEvento TEXT NOT NULL,
    fecha DATE NOT NULL,
    localizacionEvento varchar(64) NOT NULL,
    path varchar(255) NOT NULL,
    FOREIGN KEY (idOrganizador) REFERENCES organizadores(idOrganizador) ON DELETE CASCADE
);

CREATE TABLE tickets(
    idTicket int AUTO_INCREMENT PRIMARY KEY,
    idEvento int NOT NULL,
    precioTicket int(3) NOT NULL,
    username varchar(255),
    FOREIGN KEY (idEvento) REFERENCES eventos(idEvento) ON DELETE CASCADE,
    FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
);

CREATE TABLE cupones(
    codigoCupon varchar(64) PRIMARY KEY,
    username varchar(255),
    cuantia int(3) NOT NULL
);

INSERT INTO users(username,password,nombre,apellidos,fechaNacimiento,tipoUsuario) values
    ("root",MD5("root"),"root","root","1970-01-01",1),
    ("joseluis",MD5("joseluis"),"Jose Luis","Román","1965-05-08",0);

INSERT INTO organizadores(nombre,descripcion,codAcceso) values 
    ("Fabrik Madrid", "Club de Musica Electronica",MD5("123"));

INSERT INTO cupones(username, codigoCupon, cuantia) values
    ("global","navidad2020","10");