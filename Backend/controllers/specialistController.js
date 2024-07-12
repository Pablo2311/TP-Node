const db = require("../db/db.js");

const getAllSpecs = (req, res)=>{
    const sql = "SELECT * FROM Especialidades";
    db.query(sql, (error, results)=>{
        if (error){throw error};
        res.json(results);
    });
};

const getSpecById = (req, res)=>{
    const {id} = req.params;
    const sql = 'SELECT * FROM Especialidades WHERE IdEspecialidades = ?';
    db.query(sql, [id], (error, results)=>{
        if (error){throw error};
        res.json(results);
    });
};

const createSpec = (req, res)=>{
    const {nombre} = req.body;
    const sql = 'INSERT INTO Especialidades (nombre) VALUES (?)';
    db.query(sql, [nombre], (error, results)=>{
        if (error){throw error};
        res.json({mensaje: "Especialidad creada"});
    });
};

const updateSpec = (req, res)=>{
    const {id} = req.params;
    const {nombre} = req.body;
    const sql = 'UPDATE Especialidades SET nombre = ? WHERE IdEspecialidades = ?';
    db.query(sql, [nombre, id], (error, results)=>{
        if (error){throw error};
        res.json({mensaje: "Especialidad actualizada"});
    });
};

const deleteSpec = (req, res)=>{
    const {id} = req.params;
    const sql = 'DELETE FROM Especialidades WHERE IdEspecialidades = ?';
    db.query(sql, [id], (error, results)=>{
        if (error){throw error};
        res.json({mensaje: "Especialidad dada de baja"});
    });
};

module.exports = {
    getAllSpecs,
    getSpecById,
    createSpec,
    updateSpec,
    deleteSpec
};