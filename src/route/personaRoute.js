const express = require('express');
const router = express.Router();
const PersonaController = require('../controller/personaController.js');
const verifyToken = require('../middleware/authMiddleware.js');
const PersonaValidate = require('../validator/persona.js');

// Middleware para verificar el token en todas las rutas
//router.use(verifyToken);

/**
 * @swagger
 * tags:
 *   name: Personas
 *   description: API para gestionar personas
 */

/**
 * @swagger
 * /api/persona:
 *   post:
 *     summary: Crear una nueva persona
 *     tags: [Personas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevaPersona'
 *     responses:
 *       201:
 *         description: Persona creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la nueva persona
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *       500:
 *         description: Error del servidor
 */
router.post('/', PersonaValidate.validateCreate, PersonaController.createPersona);

/**
 * @swagger
 * /api/persona:
 *   get:
 *     summary: Obtener todas las personas
 *     tags: [Personas]
 *     responses:
 *       200:
 *         description: Lista de personas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Persona'
 *       500:
 *         description: Error del servidor
 */
router.get('/', PersonaController.getPersonas);

/**
 * @swagger
 * /api/persona/{id}:
 *   get:
 *     summary: Obtener una persona por ID
 *     tags: [Personas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la persona
 *     responses:
 *       200:
 *         description: Detalles de la persona
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Persona'
 *       404:
 *         description: Persona no encontrada
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', PersonaValidate.validateGetById, PersonaController.getPersonaById);

/**
 * @swagger
 * /api/persona/{id}:
 *   put:
 *     summary: Actualizar una persona por ID
 *     tags: [Personas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la persona
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ActualizarPersona'
 *     responses:
 *       200:
 *         description: Persona actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *       404:
 *         description: Persona no encontrada
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', PersonaValidate.validateUpdate, PersonaController.updatePersona);

/**
 * @swagger
 * /api/persona/{id}:
 *   delete:
 *     summary: Eliminar una persona por ID
 *     tags: [Personas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la persona
 *     responses:
 *       200:
 *         description: Persona eliminada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *       404:
 *         description: Persona no encontrada
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', PersonaController.deletePersona);

module.exports = router;
