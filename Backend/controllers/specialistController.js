const db = require("../db/db.js");

const getAllSpecs = (req, res)=>{
    const sql = "SELECT * FROM Profesionales";
    db.query(sql, (error, results)=>{
        if (error){throw error};
        res.json(results);
    });
};

const getSpecById = (req, res)=>{
    const {id} = req.params;
    const sql = 'SELECT * FROM Profesionales WHERE id = ?';
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
    const {nombre, apellido, DNI, matricula, Especialidades_IdEspecialidades} = req.body;
    const sql = 'UPDATE Profesionales SET nombre = ?, apellido = ?, DNI = ?, matricula = ?, Especialidades_IdEspecialidades = ? WHERE id = ?';
    db.query(sql, [nombre, apellido, DNI, matricula, Especialidades_IdEspecialidades, id], ()=>{
        if (error){throw error};
        res.json({mensaje: "Doctor actualizada"});
    });
};

const deleteSpec = (req, res)=>{
    const {id} = req.params;
    const sql = 'DELETE FROM Profesionales WHERE id = ?';
    db.query(sql, [id], ()=>{
        if (error){throw error};
        res.json({mensaje: "Doctor dado de baja"});
    });
};

module.exports = {
    getAllSpecs,
    getSpecById,
    createSpec,
    updateSpec,
    deleteSpec
};