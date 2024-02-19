const express = require('express');
const router = express.Router();
const HabitacionController = require('../controller/habitacionController.js'); // Asegúrate de proporcionar la ruta correcta al controlador
const verifyToken = require('../middleware/authMiddleware.js');
const HabitacionValidate = require('../validator/habitacion.js'); // Asegúrate de proporcionar la ruta correcta al validador

// Middleware para verificar el token en todas las rutas
//router.use(verifyToken);

/**
 * @swagger
 * tags:
 *   name: Habitaciones
 *   description: API para gestionar habitaciones
 */

/**
 * @swagger
 * /api/habitacion:
 *   post:
 *     summary: Crear una nueva habitación
 *     tags: [Habitaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevaHabitacion'
 *     responses:
 *       201:
 *         description: Habitación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la nueva habitación
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *       500:
 *         description: Error del servidor
 */
router.post('/', HabitacionValidate.validateCreate, HabitacionController.createHabitacion);

/**
 * @swagger
 * /api/habitacion:
 *   get:
 *     summary: Obtener todas las habitaciones
 *     tags: [Habitaciones]
 *     responses:
 *       200:
 *         description: Lista de habitaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Habitacion'
 *       500:
 *         description: Error del servidor
 */
router.get('/', HabitacionController.getHabitaciones);

/**
 * @swagger
 * /api/habitacion/disponible:
 *   get:
 *     summary: Obtener todas las habitaciones disponibles
 *     tags: [Habitaciones]
 *     responses:
 *       200:
 *         description: Lista de habitaciones disponibles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Habitacion/disponible'
 *       500:
 *         description: Error del servidor
 */
router.post(
	'/disponible/',
	HabitacionValidate.validateGetByDisponible,
	HabitacionController.getHabitacionesDisponibles
);

/**
 * @swagger
 * /api/habitacion/{id}:
 *   get:
 *     summary: Obtener una habitación por ID
 *     tags: [Habitaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la habitación
 *     responses:
 *       200:
 *         description: Detalles de la habitación
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Habitacion'
 *       404:
 *         description: Habitación no encontrada
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', HabitacionValidate.validateGetById, HabitacionController.getHabitacionById);

/**
 * @swagger
 * /api/habitacion/{id}:
 *   put:
 *     summary: Actualizar una habitación por ID
 *     tags: [Habitaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la habitación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ActualizarHabitacion'
 *     responses:
 *       200:
 *         description: Habitación actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *       404:
 *         description: Habitación no encontrada
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', HabitacionValidate.validateUpdate, HabitacionController.updateHabitacion);

/**
 * @swagger
 * /api/habitacion/{id}:
 *   delete:
 *     summary: Eliminar una habitación por ID
 *     tags: [Habitaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la habitación
 *     responses:
 *       200:
 *         description: Habitación eliminada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *       404:
 *         description: Habitación no encontrada
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', HabitacionController.deleteHabitacion);

module.exports = router;
