// Importar módulos

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectDB from './config/bd.js';
import rutas from './routes/receta.routes.js';
// Inicializar la aplicación
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

//Middleware 
app.use(cors()); 
app.use(express.json());
conectDB();

app.use('/', rutas );

    // Iniciar el servidor
    app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`)
    
});

