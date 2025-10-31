const express = require('express');
const router = express.Router();
const controller = require('../controllers/estudianteController');

router.get('/', controller.obtenerEstudiantes);
router.post('/', controller.crearEstudiante);
router.get('/:id', controller.obtenerEstudiantePorId);
router.put('/:id', controller.actualizarEstudiante);
router.delete('/:id', controller.eliminarEstudiante);

module.exports = router;
