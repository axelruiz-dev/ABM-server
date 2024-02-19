const pool = require('../config/mysql');
const logger = require('../util/logger');

async function getAllReservas() {
	try {
		const query = `
        SELECT
			reserva.id,
			DATE(reserva.fechareserva) AS fechareserva,
			DATE(reserva.fechaentrada) AS fechaentrada,
			DATE(reserva.fechasalida) AS fechasalida,
			reserva.habitacionid,
			reserva.personaid,
			reserva.montoreserva,
			persona.nombrecompleto as persona,
			CONCAT(habitacion.habitacionnro, ' Piso: ',habitacion.habitacionpiso) AS habitacion
		FROM reserva
		LEFT JOIN persona ON reserva.personaid = persona.id
		LEFT JOIN habitacion ON reserva.habitacionid = habitacion.id;
        `;
		const result = await pool.promise().query(query);
		logger.info(result[0]);

		return result[0];
	} catch (error) {
		logger.error(error);
		throw error;
	}
}

async function getReservaById(id) {
	try {
		const query = `
            SELECT
                id,
                fechareserva,
                fechaentrada,
                fechasalida,
                habitacionid,
                personaid,
                montoreserva
            FROM reserva
            WHERE id = ?;
        `;
		const result = await pool.promise().query(query, [id]);
		logger.info(result[0]);

		return result[0];
	} catch (error) {
		logger.error(error);
		throw error;
	}
}

async function createReserva(fechareserva, fechaentrada, fechasalida, habitacionid, personaid, cantidaddias) {
	try {
		const query = `
            INSERT INTO reserva (fechareserva, fechaentrada, fechasalida, habitacionid, personaid, montoreserva)
            VALUES (?,?,?,?,?,?);
        `;
		const result = await pool
			.promise()
			.query(query, [fechareserva, fechaentrada, fechasalida, habitacionid, personaid, cantidaddias * 120000]);
		logger.info(result[0].id);

		return result[0].id;
	} catch (error) {
		logger.error(error);
		throw error;
	}
}

async function updateReserva(id, fechareserva, fechaentrada, fechasalida, habitacionid, personaid, cantidaddias) {
	try {
		const query = `
            UPDATE reserva
            SET
                fechareserva = ?,
                fechaentrada = ?,
                fechasalida = ?,
                habitacionid = ?,
                personaid = ?,
                montoreserva = ?
            WHERE id = ? ;
        `;
		await pool
			.promise()
			.query(query, [fechareserva, fechaentrada, fechasalida, habitacionid, personaid, cantidaddias * 120000, id]);

		return true;
	} catch (error) {
		logger.error(error);
	}
}

async function deleteReserva(id) {
	try {
		const query = `DELETE FROM reserva WHERE id = ?;`;
		await pool.promise().query(query, [id]);

		return true;
	} catch (error) {
		logger.error(error);
		throw error;
	}
}

module.exports = {
	getAllReservas,
	getReservaById,
	createReserva,
	updateReserva,
	deleteReserva,
};
