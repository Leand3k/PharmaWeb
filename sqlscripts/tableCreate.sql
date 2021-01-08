USE farmaciaDB;


-- CREATE TABLE TipoUsuario (
--     IdTipoUsuario int NOT NULL,
--     NombreTipo nvarchar(50) NOT NULL,
--     PRIMARY KEY(IdTipoUsuario)
-- );

-- CREATE TABLE Usuario(
--     IdUsuario INT NOT NULL,
--     IdTipoUsuario INT,
--     Correo nvarchar(100) NOT NULL,
--     Contraseña nvarchar(50) NOT NULL,
--     Nombre nvarchar(100) NOT NULL,
--     Direccion nvarchar(100) NOT NULL,
--     NumeroTelefono char(10) NOT NULL,
--     FechaRegistro DATETIME NOT NULL,
--     PRIMARY KEY (IdUsuario),
--     FOREIGN KEY (IdTipoUsuario) REFERENCES TipoUsuario(IdTipoUsuario)

-- );

-- CREATE TABLE UsuarioFarmaceutico(
--     IdUsuarioFarmaceutico INT NOT NULL,
--     IdUsuario INT NOT NULL,
--     IDFarmaceutico INT NOT NULL,
--     PRIMARY KEY (IdUsuarioFarmaceutico),
--     FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario)
-- );

-- CREATE TABLE UsuarioCliente(
--     IdUsuarioCliente INT NOT NULL,
--     IdUsuario INT NOT NULL,
--     Apellido NVARCHAR(100) NOT NULL,
--     Cedula CHAR(11) NOT NULL,
--     FechaNacimiento Date NOT NULL,
--     PRIMARY KEY (IdUsuarioCliente),
--     FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario)
-- );

-- CREATE TABLE TipoArticulo(
--     IdTipoArticulo INT NOT NULL,
--     NombreArticulo nvarchar(100) NOT NULL,
--     PRIMARY KEY (IdTipoArticulo)
-- );

-- CREATE TABLE Articulo(
--     IdArticulo INT NOT NULL,
--     IdTipoArticulo INT NOT NULL,
--     Nombre NVARCHAR(100) NOT NULL,
--     Cantidad INT NOT NULL,
--     Precio decimal(10,2) NOT NULL,
--     PRIMARY KEY (IdArticulo),
--     FOREIGN KEY (IdTipoArticulo) REFERENCES TipoArticulo(IdTipoArticulo)

-- );



