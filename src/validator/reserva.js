const { check, validationResult, param } = require('express-validator');

const validateCreate = [
	check('fechareserva').exists().withMessage('La fecha de reserva es obligatoria'),
	check('fechaentrada')
		.exists()
		.withMessage('La fecha de entrada es obligatoria')
		.custom((value, { req }) => {
			const fechaentrada = new Date(value);
			const today = new Date();

			// Compara solo el año, mes y dia
			if (fechaentrada.toISOString().slice(0, 10) < today.toISOString().slice(0, 10)) {
				throw new Error('La fecha de entrada debe ser mayor al día actual');
			}

			return true;
		}),
	check('fechasalida')
		.exists()
		.withMessage('La fecha de salida es obligatoria')
		.custom((value, { req }) => {
			const fechaentrada = new Date(req.body.fechaentrada);
			const fechasalida = new Date(value);

			// Compara solo el año, mes y dia
			if (fechasalida.toISOString().slice(0, 10) <= fechaentrada.toISOString().slice(0, 10)) {
				throw new Error('La fecha de salida debe ser mayor a la fecha de entrada');
			}

			return true;
		}),
	check('habitacionid')
		.exists()
		.withMessage('El ID de la habitación es obligatorio')
		.isInt({ min: 1 })
		.withMessage('El ID de la habitación debe ser un número entero válido mayor que 0'),
	check('personaid')
		.exists()
		.withMessage('El ID de la persona es obligatorio')
		.isInt({ min: 1 })
		.withMessage('El ID de la persona debe ser un número entero válido mayor que 0'),
	check('cantidaddias')
		.exists()
		.withMessage('La cantidad de dias es obligatorio')
		.custom((value, { req }) => {
			const dias = parseFloat(value);
			if (dias <= 0) {
				throw new Error('La cantidad de dias de la reserva debe ser mayor a 0');
			}
			return true;
		}),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errores: errors.array() });
		}
		next();
	},
];

const validateGetById = [
	param('id').isInt().withMessage('El ID de la reserva debe ser un número entero válido'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errores: errors.array() });
		}
		next();
	},
];

const validateUpdate = [
	check('fechareserva').exists().withMessage('La fecha de reserva es obligatoria'),
	check('fechaentrada')
		.exists()
		.withMessage('La fecha de entrada es obligatoria')
		.custom((value, { req }) => {
			const fechaentrada = new Date(value);
			const today = new Date();

			// Compara solo el año, mes y dia
			if (fechaentrada.toISOString().slice(0, 10) < today.toISOString().slice(0, 10)) {
				throw new Error('La fecha de entrada debe ser mayor al día actual');
			}

			return true;
		}),
	check('fechasalida')
		.exists()
		.withMessage('La fecha de salida es obligatoria')
		.custom((value, { req }) => {
			const fechaentrada = new Date(req.body.fechaentrada);
			const fechasalida = new Date(value);

			// Compara solo el año, mes y dia
			if (fechasalida.toISOString().slice(0, 10) <= fechaentrada.toISOString().slice(0, 10)) {
				throw new Error('La fecha de salida debe ser mayor a la fecha de entrada');
			}

			return true;
		}),
	check('habitacionid')
		.exists()
		.withMessage('El ID de la habitación es obligatorio')
		.isInt({ min: 1 })
		.withMessage('El ID de la habitación debe ser un número entero válido mayor que 0'),
	check('personaid')
		.exists()
		.withMessage('El ID de la persona es obligatorio')
		.isInt({ min: 1 })
		.withMessage('El ID de la persona debe ser un número entero válido mayor que 0'),
	check('cantidaddias')
		.exists()
		.withMessage('La cantidad de dias es obligatorio')
		.custom((value, { req }) => {
			const dias = parseFloat(value);
			if (dias <= 0) {
				throw new Error('La cantidad de dias de la reserva debe ser mayor a 0');
			}
			return true;
		}),
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
	validateGetById,
	validateUpdate,
};
