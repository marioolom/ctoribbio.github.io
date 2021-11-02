DELETE DATABASE IF EXISTS ventaentradas;

CREATE DATABASE ventaentradas;

CREATE TABLE users(
    username varchar(255),
    password varchar(255),
    nombre varchar(255),
    apellidos varchar(255),
    fechaNacimiento date,
    tipoUsuario, number(1),    
)