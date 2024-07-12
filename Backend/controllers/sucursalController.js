const db = require("../db/db.js");

const getAllSucs = (req, res)=>{
    const sql = "SELECT * FROM Sucursal";
    db.query(sql, (error, results)=>{
        if (error){throw error};
        res.json(results);
    });
};

const getSucById = (req, res)=>{
    const {id} = req.params;
    const sql = 'SELECT * FROM Sucursal WHERE IdSucursal = ?';
    db.query(sql, [id], (error, results)=>{
        if (error){throw error};
        res.json(results);
    });
};

const createSuc = (req, res)=>{
    const {Dirección, Horario_Atención} = req.body;
    const sql = 'INSERT INTO Sucursal (Dirección, Horario_Atención) VALUES (?, ?)';
    db.query(sql, [Dirección, Horario_Atención], (error, results)=>{
        if (error){throw error};
        res.json({mensaje: "Sucursal creada"});
    });
};

const updateSuc = (req, res)=>{
    const {id} = req.params;
    const {Dirección, Horario_Atención} = req.body;
    const sql = 'UPDATE Sucursal SET Dirección = ?, Horario_Atención = ? WHERE IdSucursal = ?';
    db.query(sql, [Dirección, Horario_Atención, id], (error, results)=>{
        if (error){throw error};
        res.json({mensaje: "Sucursal actualizada"});
    });
};

const deleteSuc = (req, res)=>{
    const {id} = req.params;
    const sql = 'DELETE FROM Sucursal WHERE IdSucursal = ?';
    db.query(sql, [id], (error, results)=>{
        if (error){throw error};
        res.json({mensaje: "Sucursal dada de baja"});
    });
};

module.exports = {
    getAllSucs,
    getSucById,
    createSuc,
    updateSuc,
    deleteSuc
};