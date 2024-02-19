const { log } = require('winston');
const habitaciones = require('../model/habitacionModel');

async function getHabitaciones(req, res) {
	try {
		const habitacionesList = await habitaciones.getAllHabitaciones();
		res.json(habitacionesList);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function getHabitacionesDisponibles(req, res) {
	console.log(req.body);
	try {
		const { fechasalida, fechaentrada } = req.body;
		const habitacionesList = await habitaciones.getAllHabitacionesDisponibles(fechasalida, fechaentrada);
		res.json(habitacionesList);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function getHabitacionById(req, res) {
	try {
		const { id } = req.params;
		const habitacion = await habitaciones.getHabitacionById(id);

		if (habitacion) {
			res.json(habitacion);
		} else {
			res.status(404).json({ message: 'Habitación no encontrada' });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function createHabitacion(req, res) {
	try {
		const { habitacionpiso, habitacionnro, cantcamas, tienetelevision, tienefrigobar } = req.body;
		const newHabitacionId = await habitaciones.createHabitacion(
			habitacionpiso,
			habitacionnro,
			cantcamas,
			tienetelevision,
			tienefrigobar
		);
		res.status(201).json({ id: newHabitacionId, message: 'Habitación creada exitosamente' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function updateHabitacion(req, res) {
	try {
		const { id } = req.params;
		const { habitacionpiso, habitacionnro, cantcamas, tienetelevision, tienefrigobar } = req.body;

		const updated = await habitaciones.updateHabitacion(
			id,
			habitacionpiso,
			habitacionnro,
			cantcamas,
			tienetelevision,
			tienefrigobar
		);
		if (updated) {
			res.json({ message: 'Habitación actualizada correctamente' });
		} else {
			res.status(404).json({ message: 'Habitación no encontrada' });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function deleteHabitacion(req, res) {
	try {
		const { id } = req.params;
		const deleted = await habitaciones.deleteHabitacion(id);
		if (deleted) {
			res.json({ message: 'Habitación eliminada correctamente' });
		} else {
			res.status(404).json({ message: 'Habitación no encontrada' });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

module.exports = {
	getHabitaciones,
	getHabitacionesDisponibles,
	getHabitacionById,
	createHabitacion,
	updateHabitacion,
	deleteHabitacion,
};
