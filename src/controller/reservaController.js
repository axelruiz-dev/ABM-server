const reservas = require('../model/reservaModel');
const formatoFecha = require('../util/formatoFecha');
const formatoMoneda = require('../util/formatoMoneda');

async function getReservas(req, res) {
	try {
		const reservasData = await reservas.getAllReservas();
		const reservasFormateados = reservasData.map((reservas) => ({
			...reservas,
			fechareserva: formatoFecha(reservas.fechareserva),
			fechaentrada: formatoFecha(reservas.fechaentrada),
			fechasalida: formatoFecha(reservas.fechasalida),
			montoreserva: formatoMoneda(reservas.montoreserva),
		}));
		res.json(reservasFormateados);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function getReservaById(req, res) {
	try {
		const { id } = req.params;
		const reserva = await reservas.getReservaById(id);
		if (reserva) {
			res.json(reserva);
		} else {
			res.status(404).json({ message: 'Reserva no encontrada' });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function createReserva(req, res) {
	try {
		const { fechareserva, fechaentrada, fechasalida, habitacionid, personaid, cantidaddias } = req.body;

		const newReservaId = await reservas.createReserva(
			fechareserva,
			fechaentrada,
			fechasalida,
			habitacionid,
			personaid,
			cantidaddias
		);
		res.status(201).json({ id: newReservaId, message: 'Reserva creada exitosamente' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function updateReserva(req, res) {
	try {
		const { id } = req.params;
		const { fechareserva, fechaentrada, fechasalida, habitacionid, personaid, cantidaddias } = req.body;

		const updated = await reservas.updateReserva(
			id,
			fechareserva,
			fechaentrada,
			fechasalida,
			habitacionid,
			personaid,
			cantidaddias
		);
		if (updated) {
			res.json({ message: 'Reserva actualizada correctamente' });
		} else {
			res.status(404).json({ message: 'Reserva no encontrada' });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function deleteReserva(req, res) {
	try {
		const { id } = req.params;
		const deleted = await reservas.deleteReserva(id);
		if (deleted) {
			res.json({ message: 'Reserva eliminada correctamente' });
		} else {
			res.status(404).json({ message: 'Reserva no encontrada' });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

module.exports = {
	getReservas,
	getReservaById,
	createReserva,
	updateReserva,
	deleteReserva,
};
