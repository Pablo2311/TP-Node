const db = require("../db/db.js");

const getAllPats = (req, res)=>{
    const sql = "SELECT * FROM Pacientes";
    db.query(sql, (error, results)=>{
        if (error){throw error};
        res.json(results);
    });
};

const getPatById = (req, res)=>{
    const {id} = req.params;
    const sql = 'SELECT * FROM Pacientes WHERE DNI = ?';
    db.query(sql, [id], (error, results)=>{
        if (error){throw error};
        res.json(results);
    });
};

const createPat = (req, res)=>{
    const {DNI, Nombre, Apellido, Fecha_Nacimiento, Sexo, Nacionalidad} = req.body;
    const sql = 'INSERT INTO Pacientes (DNI, Nombre, Apellido, Fecha_Nacimiento, Sexo, Nacionalidad) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [DNI, Nombre, Apellido, Fecha_Nacimiento, Sexo, Nacionalidad], (error, results)=>{
        if (error){throw error};
        res.json({mensaje: "Paciente creado"});
    });
};

const updatePat = (req, res)=>{
    const {id} = req.params;
    const {Nombre, Apellido, Fecha_Nacimiento, Sexo, Nacionalidad} = req.body;
    const sql = 'UPDATE Pacientes SET Nombre = ?, Apellido = ?, Fecha_Nacimiento = ?, Sexo = ?, Nacionalidad = ? WHERE DNI = ?';
    db.query(sql, [Nombre, Apellido, Fecha_Nacimiento, Sexo, Nacionalidad, id], (error, results)=>{
        if (error){throw error};
        res.json({mensaje: "Paciente actualizado"});
    });
};

const deletePat = (req, res)=>{
    const {id} = req.params;
    const sql = 'DELETE FROM Pacientes WHERE DNI = ?';
    db.query(sql, [id], (error, results)=>{
        if (error){throw error};
        res.json({mensaje: "Paciente dado de baja"});
    });
};

module.exports = {
    getAllPats,
    getPatById,
    createPat,
    updatePat,
    deletePat
};