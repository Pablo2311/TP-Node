const express = require("express");

const app = express();

const medicalRoutes = require("../routes/medicalRoutes");
const specialistRoutes = require("../routes/specialistRoutes");

const PORT = 3001;

app.use(express.json());

app.use("/profesionales", medicalRoutes);
app.use("/especialidad", specialistRoutes);
app.use("/pacientes", medicalRoutes);
app.use("/sucursales", medicalRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`);
});