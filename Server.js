// Importar módulos

import express from'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
const Receta = require("./models/receta.model");
const conect = require("./config/bd.js")
// Inicializar la aplicación
const app = express();
const PORT = process.env.PORT || 4000;
const rutas = require("./routes/receta.routes.js")
//Middleware 
app.use(cors()); 
app.use(express.json());
conect.conectDB();

app.use('/', rutas );

    // Iniciar el servidor
    app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`)
});

