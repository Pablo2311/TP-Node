const db = require("../db/db.js");

const getAllDocs = (req, res)=>{
    const sql = "SELECT * FROM Profesionales";
    db.query(sql, (error, results)=>{
        if (error){throw error};
        res.json(results);
    });
};

const getDocById = (req, res)=>{
    const {id} = req.params;
    const sql = 'SELECT * FROM Profesionales WHERE IdDoctor = ?';
    db.query(sql, [id], (error, results)=>{
        if (error){throw error};
        res.json(results);
    });
};

const createDoc = (req, res)=>{
    const {nombre, apellido, DNI, matricula, Especialidades_IdEspecialidades} = req.body;
    const sql = 'INSERT INTO Profesionales (nombre, apellido, DNI, matricula, Especialidades_IdEspecialidades) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nombre, apellido, DNI, matricula, Especialidades_IdEspecialidades], (error, results)=>{
        if (error){throw error};
        res.json({mensaje: "Doctor agregado"});
    });
};

const updateDoc = (req, res)=>{
    const {id} = req.params;
    const {nombre, apellido, DNI, matricula, Especialidades_IdEspecialidades} = req.body;
    const sql = 'UPDATE Profesionales SET nombre = ?, apellido = ?, DNI = ?, matricula = ?, Especialidades_IdEspecialidades = ? WHERE IdDoctor = ?';
    db.query(sql, [nombre, apellido, DNI, matricula, Especialidades_IdEspecialidades, id], (error, results)=>{
        if (error){throw error};
        res.json({mensaje: "Doctor actualizada"});
    });
};

const deleteDoc = (req, res)=>{
    const {id} = req.params;
    const sql = 'DELETE FROM Profesionales WHERE IdDoctor = ?';
    db.query(sql, [id], (error, results)=>{
        if (error){throw error};
        res.json({mensaje: "Doctor dado de baja"});
    });
};

module.exports = {
    getAllDocs,
    getDocById,
    createDoc,
    updateDoc,
    deleteDoc
};