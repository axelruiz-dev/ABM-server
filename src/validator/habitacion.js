const { check, validationResult, param } = require('express-validator');

const validateCreate = [
	check('habitacionpiso')
		.exists()
		.withMessage('El piso de la habitación es obligatorio')
		.not()
		.isEmpty()
		.withMessage('El piso de la habitación no puede estar vacío')
		.isInt()
		.withMessage('El piso de la habitación debe ser un número entero')
		.custom((value) => {
			if (value < 1 || value > 10) {
				throw new Error('El piso de la habitación debe estar entre 1 y 10');
			}
			return true;
		}),
	check('habitacionnro')
		.exists()
		.withMessage('El número de la habitación es obligatorio')
		.not()
		.isEmpty()
		.withMessage('El número de la habitación no puede estar vacío')
		.isInt()
		.withMessage('El número de la habitación debe ser un número entero')
		.custom((value) => {
			if (value < 1 || value > 20) {
				throw new Error('El número de la habitación debe estar entre 1 y 20');
			}
			return true;
		}),

	check('cantcamas')
		.exists()
		.withMessage('La cantidad de camas es obligatoria')
		.not()
		.isEmpty()
		.withMessage('La cantidad de camas no puede estar vacía')
		.isInt()
		.withMessage('La cantidad de camas debe ser un número entero')
		.custom((value) => {
			if (value < 1 || value > 4) {
				throw new Error('La cantidad de camas debe estar entre 1 y 4');
			}
			return true;
		})
		.withMessage('La cantidad de camas debe estar entre 1 y 4'),
	check('tienetelevision').isBoolean().withMessage('El valor de tienetelevision debe ser true o false'),
	check('tienefrigobar').isBoolean().withMessage('El valor de tienefrigobar debe ser true o false'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errores: errors.array() });
		}
		next();
	},
];

const validateGet = [
	// param('habitacion')
	// 	.isString()
	// 	.withMessage('El nombre de la habitación debe ser una cadena válida')
	// 	.notEmpty()
	// 	.withMessage('El nombre de la habitación no puede estar vacío'),
	// (req, res, next) => {
	// 	const errors = validationResult(req);
	// 	if (!errors.isEmpty()) {
	// 		return res.status(400).json({ errores: errors.array() });
	// 	}
	// 	next();
	// },
];

const validateGetById = [
	param('id').isInt().withMessage('El ID de la habitación debe ser un número entero válido'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errores: errors.array() });
		}
		next();
	},
];

const validateGetByDisponible = [
	// check('fechaentrada').notEmpty().withMessage('La fecha entrada no puede estar vacío'),
	// check('fechasalida').notEmpty().withMessage('La fecha salida no puede estar vacío'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errores: errors.array() });
		}
		next();
	},
];

const validateUpdate = [
	check('habitacionpiso')
		.isInt()
		.withMessage('El piso de la habitación debe ser un número entero')
		.custom((value) => {
			if (value < 1 || value > 10) {
				throw new Error('El número de la habitación debe estar entre 1 y 10');
			}
			return true;
		})
		.withMessage('El número de la habitación debe estar entre 1 y 20'),
	check('habitacionnro')
		.isInt()
		.withMessage('El número de la habitación debe ser un número entero')
		.custom((value) => {
			if (value < 1 || value > 20) {
				throw new Error('El número de la habitación debe estar entre 1 y 20');
			}
			return true;
		})
		.withMessage('El número de la habitación debe estar entre 1 y 20'),
	check('cantcamas')
		.optional()
		.isInt()
		.withMessage('La cantidad de camas debe ser un número entero')
		.custom((value) => {
			if (value < 1 || value > 4) {
				throw new Error('La cantidad de camas debe estar entre 1 y 4');
			}
			return true;
		})
		.withMessage('La cantidad de camas debe estar entre 1 y 4'),
	check('tienetelevision').isBoolean().withMessage('El valor de tienetelevision debe ser true o false'),
	check('tienefrigobar').isBoolean().withMessage('El valor de tienefrigobar debe ser true o false'),
	param('id').isInt().withMessage('El ID de la habitación debe ser un número entero válido'),
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
	validateGetByDisponible,
	validateUpdate,
};
