import mongoose from 'mongoose';
// Definir el esquema de Receta
const recetaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required:true
    },
    ingredientes: {
        type: [String],
        required:true
    },
    instrucciones:{
        type: String,
        required:true
    },
    categoria: {
        type: String,
        default: 'plato principal'
    },
    estado:{
        type: String,
        default: 'activa'
    },
    fechaCreacion: {
        type:Date,
        default: Date.now
    }
});


const Receta = mongoose.model('Receta', recetaSchema);
export default Receta;
