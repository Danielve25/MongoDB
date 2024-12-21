// Importar módulos
import rutas from './routes/receta.routes.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import conect from './config/bd.js';
// Inicializar la aplicación
const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();
//Middleware 
app.use(cors()); 
app.use(express.json());
conect.conectDB();

app.use('/', rutas );

    // Iniciar el servidor
    app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`)
});

