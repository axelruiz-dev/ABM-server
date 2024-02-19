const express = require('express');
const router = express.Router();
const ReservaController = require('../controller/reservaController.js'); // Asegúrate de proporcionar la ruta correcta al controlador
const verifyToken = require('../middleware/authMiddleware.js');
const ReservaValidate = require('../validator/reserva.js'); // Asegúrate de proporcionar la ruta correcta al validador

// Middleware para verificar el token en todas las rutas
//router.use(verifyToken);

/**
 * @swagger
 * tags:
 *   name: Reservas
 *   description: API para gestionar reservas
 */

/**
 * @swagger
 * /api/reserva:
 *   post:
 *     summary: Crear una nueva reserva
 *     tags: [Reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevaReserva'
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la nueva reserva
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *       500:
 *         description: Error del servidor
 */
router.post('/', ReservaValidate.validateCreate, ReservaController.createReserva);

/**
 * @swagger
 * /api/reserva:
 *   get:
 *     summary: Obtener todas las reservas
 *     tags: [Reservas]
 *     responses:
 *       200:
 *         description: Lista de reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 *       500:
 *         description: Error del servidor
 */
router.get('/', ReservaController.getReservas);

/**
 * @swagger
 * /api/reserva/{id}:
 *   get:
 *     summary: Obtener una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Detalles de la reserva
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Reserva no encontrada
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', ReservaValidate.validateGetById, ReservaController.getReservaById);

/**
 * @swagger
 * /api/reserva/{id}:
 *   put:
 *     summary: Actualizar una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ActualizarReserva'
 *     responses:
 *       200:
 *         description: Reserva actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *       404:
 *         description: Reserva no encontrada
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', ReservaValidate.validateUpdate, ReservaController.updateReserva);

/**
 * @swagger
 * /api/reserva/{id}:
 *   delete:
 *     summary: Eliminar una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva eliminada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *       404:
 *         description: Reserva no encontrada
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', ReservaController.deleteReserva);

module.exports = router;
