const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pablo2350.",
    port: 3306,
    // database: "medical_db"
});

connection.connect((err)=>{
    if (err){
        console.log("Error de conexion con el servidor: "+err);
        return;
    };
    console.log("Estado de conexión: CONECTADA");

    const sql = 'CREATE DATABASE IF NOT EXISTS portfolio_db';

    connection.query(sql, (err, results)=>{
        if (err){
            console.error('Error al crear la base de datos: ', err);
            return;
        };
        console.log("Base de datos: CREADA/EXISTENTE/GARANTIZADA");
        connection.changeUser({database: "portfolio_db"}, ()=>{
            if (err){
                console.error('Error al cambiar a la base de datos movies_db', err);
                return;
            };
            const createTablePatientsQuery = `
                CREATE TABLE IF NOT EXISTS Pacientes (
                    DNI INT NOT NULL PRIMARY KEY,
                    Nombre VARCHAR(45) NOT NULL,
                    Apellido VARCHAR(45) NOT NULL,
                    Fecha_Nacimiento DATE NOT NULL,
                    Sexo VARCHAR(20) NOT NULL,
                    Nacionalidad VARCHAR(50) NOT NULL
                );
            `;
            connection.query(createTablePatientsQuery, (err, results)=>{
                if (err) {
                    console.error('Error al crear la tabla: ', err);
                    return;
                };
                console.log("Tabla: CREADA/EXISTENTE/GARANTIZADA");
            });
            const createTableSpecialistsQuery = `
                CREATE TABLE IF NOT EXISTS Especialidades (
                    IdEspecialidades INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    Nombre VARCHAR(45) NOT NULL
                );
            `;
            connection.query(createTableSpecialistsQuery, (err, results)=>{
                if (err) {
                    console.error('Error al crear la tabla: ', err);
                    return;
                };
                console.log("Tabla: CREADA/EXISTENTE/GARANTIZADA");
            });
            const createTableProfessionalsQuery = `
                CREATE TABLE IF NOT EXISTS Profesionales (
                    IdDoctor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    Nombre VARCHAR(45) NOT NULL,
                    Apellido VARCHAR(45) NOT NULL,
                    DNI INT NOT NULL,
                    Matricula INT NOT NULL,
                    Especialidades_IdEspecialidades INT NOT NULL,
                    FOREIGN KEY (Especialidades_IdEspecialidades) REFERENCES Especialidades(IdEspecialidades)
                );
            `;
            connection.query(createTableProfessionalsQuery, (err, results)=>{
                if (err) {
                    console.error('Error al crear la tabla: ', err);
                    return;
                };
                console.log("Tabla: CREADA/EXISTENTE/GARANTIZADA");
            });
            const createTableSucursalQuery = `
                CREATE TABLE IF NOT EXISTS Sucursal (
                    IdSucursal INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                    Dirección VARCHAR(45) NOT NULL,
                    Horario_Atención VARCHAR(45) NOT NULL
                );
            `;
            connection.query(createTableSucursalQuery, (err, results)=>{
                if (err) {
                    console.error('Error al crear la tabla: ', err);
                    return;
                };
                console.log("Tabla: CREADA/EXISTENTE/GARANTIZADA");
            });
        });
    });
});

module.exports = connection;