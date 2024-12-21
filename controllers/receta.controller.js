import Receta from '../models/receta.model.js';

const postRecetas = async (req, res) => {
    try {
        const nuevaReceta = new Receta(req.body);
        const recetaGuardada = await nuevaReceta.save();
        res.status(201).json(recetaGuardada);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const actualizarReceta = async (req, res) => {
    try {
    const recetaActualizada = await Receta.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
    if (!recetaActualizada) {
        return res.status(484).json({ error: 'Receta no encontrada' });
    }
    
    res.json(recetaActualizada);
    } 
    catch (err) {
    res.status(400).json({ error: err.message });
    }
}

const borrarReceta = async (req, res) => {
    try {
    const recetaEliminada = await Receta.findByIdAndDelete(req.params.id); 
    if (!recetaEliminada) {
        return res.status(404).json({ error: 'Receta no encontrada' });
    }
    
    res.json({ mensaje: 'Receta eliminada correctamente', receta: recetaEliminada }); 
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
}


const obtenerRecetas = async (req, res) => {
    try {
        const recetas = await Receta.find();
        res.json(recetas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const obtenerIdReceta = async (req, res) => {
    try {
    const receta = await Receta.findById(req.params.id);
    if (!receta) {
    }
    return res.status(484).json({ error: 'Receta no encontrada' });
    res.json(receta);
    } catch (err) {
        res.status(500).json({ error: err.message });
    } 
}

const inactivarReceta = async (req, res) => {
    try {
    const recetaInactivada = await Receta.findByIdAndUpdate(req.params.id, 
        { estado: 'Inactiva' }, 
        { new: true }); 
    if (!recetaInactivada) {
        return res.status(484).json({ error: 'Receta no encontrada' });
    }
    
    res.json({ mensaje: 'Receta marcada como inactiva', receta: recetaInactivada });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
export {
    inactivarReceta, 
    obtenerIdReceta, 
    obtenerRecetas, 
    borrarReceta,
    postRecetas,
    actualizarReceta
};