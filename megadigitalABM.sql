CREATE DATABASE megadigitalABM;
use megadigitalABM;
-- Crear la tabla persona
CREATE TABLE persona (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombrecompleto VARCHAR(100) NOT NULL,
    nrodocumento VARCHAR(20) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL
);

-- Crear la tabla habitacion
CREATE TABLE habitacion (
    id INT PRIMARY KEY AUTO_INCREMENT,
    habitacionpiso INT CHECK (habitacionpiso > 0 AND habitacionpiso <= 10),
    habitacionnro INT CHECK (habitacionnro > 0 AND habitacionnro <= 20),
    cantcamas INT CHECK (cantcamas >= 1 AND cantcamas <= 4),
    tienetelevision BOOLEAN NOT NULL,
    tienefrigobar BOOLEAN NOT NULL
);

-- Crear la tabla reserva
CREATE TABLE reserva (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fechareserva DATETIME NOT NULL,
    fechaentrada DATETIME NOT NULL,
    fechasalida DATETIME NOT NULL,
    habitacionid INT,
    personaid INT,
	montoreserva DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (habitacionid) REFERENCES habitacion(id),
    FOREIGN KEY (personaid) REFERENCES persona(id)
);

-- Crear un nuevo usuario
CREATE USER 'dba'@'%' IDENTIFIED BY '123';

-- Darle todos los privilegios para la base de datos 
GRANT ALL PRIVILEGES ON megadigitalABM.* TO 'dba'@'%';

-- Recargar privilegios
FLUSH PRIVILEGES;





