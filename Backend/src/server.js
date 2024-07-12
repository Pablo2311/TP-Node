const express = require("express");

const app = express();

const medicalRoutes = require("../routes/medicalRoutes");
const specialistRoutes = require("../routes/specialistRoutes");
const patientsRoutes = require("../routes/patientsRoutes");
const sucursalRoutes = require("../routes/sucursalRoutes");


const PORT = 3001;

app.use(express.json());

app.use("/profesionales", medicalRoutes);
app.use("/especialidad", specialistRoutes);
app.use("/pacientes", patientsRoutes);
app.use("/sucursales", sucursalRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`);
});