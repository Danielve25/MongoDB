import express from 'express';
import {inactivarReceta, obtenerIdReceta, obtenerRecetas, borrarReceta, postRecetas, actualizarReceta} from '../controllers/receta.controller.js';

const router = express.Router();


router.get('/recetas', obtenerRecetas);
router.post('/recetas', postRecetas);
router.get('/recetas/:id', obtenerIdReceta);
router.patch('/recetas/:id', actualizarReceta);
router.patch('/recetas/:id/inactivar', inactivarReceta);  
router.delete('/recetas/:id', borrarReceta);



export default router;