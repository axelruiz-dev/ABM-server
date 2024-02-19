const { check, validationResult, param } = require('express-validator');

const validateCreate = [
	check('nombrecompleto')
		.exists()
		.withMessage('El nombre completo es obligatorio')
		.not()
		.isEmpty()
		.withMessage('El nombre completo no puede estar vacío'),
	check('nrodocumento')
		.exists()
		.withMessage('El número de documento es obligatorio')
		.not()
		.isEmpty()
		.withMessage('El número de documento no puede estar vacío'),
	check('correo')
		.exists()
		.withMessage('El correo electrónico es obligatorio')
		.not()
		.isEmpty()
		.withMessage('El correo electrónico no puede estar vacío')
		.isEmail()
		.withMessage('El correo electrónico no tiene un formato válido'),

	check('telefono')
		.exists()
		.withMessage('El número de teléfono es obligatorio')
		.not()
		.isEmpty()
		.withMessage('El número de teléfono no puede estar vacío')
		.isInt()
		.withMessage('El número de teléfono debe ser un número entero'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errores: errors.array() });
		}
		next();
	},
];

const validateGet = [
	param('persona')
		.isString()
		.withMessage('El nombre de la persona debe ser una cadena válida')
		.notEmpty()
		.withMessage('El nombre de la persona no puede estar vacío'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errores: errors.array() });
		}
		next();
	},
];

const validateGetById = [
	// param('id').isInt().withMessage('El ID de la persona debe ser un número entero válido'),
	// (req, res, next) => {
	// 	const errors = validationResult(req);
	// 	if (!errors.isEmpty()) {
	// 		return res.status(400).json({ errores: errors.array() });
	// 	}
	// 	next();
	// },
];

const validateUpdate = [
	check('nombrecompleto').optional().notEmpty().withMessage('El nombre completo no puede estar vacío'),
	check('nrodocumento').optional().notEmpty().withMessage('El número de documento no puede estar vacío'),
	check('correo').optional().isEmail().withMessage('El correo electrónico no tiene un formato válido'),
	check('telefono').optional().isInt().withMessage('El número de teléfono debe ser un número entero'),
	param('id').isInt().withMessage('El ID de la persona debe ser un número entero válido'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errores: errors.array() });
		}
		next();
	},
];

module.exports = {
	validateCreate,
	validateGet,
	validateGetById,
	validateUpdate,
};
