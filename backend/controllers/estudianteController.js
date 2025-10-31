const Estudiante = require('../models/Estudiante');

const obtenerEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll();
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const crearEstudiante = async(req, res)=>{
    try {
        const { nombre, email, edad }=req.body;
        const nuevo = await Estudiante.create({nombre, email, edad})
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const obtenerEstudiantePorId = async (req, res) => {
    try {
        const {id} = req.params;
        const estudiante = await Estudiante.findByPk(id);
        if (!estudiante) return res.status(404).json({error:'Estudiante no encontrado'})
        res.json(estudiante);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const actualizarEstudiante = async(req, res) =>{
    try {
        const {id} = req.params;
        const { nombre, email, edad } = req.body
        const estudiante = await Estudiante.findByPk(id);
        if (!estudiante) return res.status(404).json({error:'Estudiante no encontrado'})
        await estudiante.update({nombre,email,edad})
        res.json(estudiante)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
const eliminarEstudiante = async (req, res)=>{
    try {
        const {id} = req.params;
        const estudiante = await Estudiante.findByPk(id);
        if (!estudiante) return res.status(404).json({error:'Estudiante no encontrado'})
        await estudiante.destroy();
        res.json({message: 'Estudiante eliminado'})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    obtenerEstudiantes,
    crearEstudiante,
    obtenerEstudiantePorId,
    actualizarEstudiante,
    eliminarEstudiante
};