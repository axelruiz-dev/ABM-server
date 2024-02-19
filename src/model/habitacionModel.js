const pool = require('../config/mysql');
const logger = require('../util/logger');

async function getAllHabitaciones() {
	try {
		const query = `
            SELECT
                id,
                habitacionpiso,
                habitacionnro,
                cantcamas,
                tienetelevision,
                tienefrigobar
            FROM habitacion;
        `;
		const result = await pool.promise().query(query);
		logger.info(result[0]);

		return result[0];
	} catch (error) {
		logger.error(error);
		throw error;
	}
}

async function getAllHabitacionesDisponibles(fechasalida, fechaentrada) {
	try {
		const query = `
		select  H.id,
                H.habitacionpiso,
                H.habitacionnro,
                H.cantcamas,
                H.tienetelevision,
                H.tienefrigobar from habitacion h 
		left join reserva r on (r.habitacionid=h.id)
		WHERE r.fechaentrada IS NULL 
		or (? NOT BETWEEN r.fechaentrada AND r.fechasalida 
		and ? NOT BETWEEN r.fechaentrada AND r.fechasalida);
        `;
		const result = await pool.promise().query(query, [fechasalida, fechaentrada]);
		logger.info(result[0]);

		return result[0];
	} catch (error) {
		logger.error(error);
		throw error;
	}
}
async function getHabitacionById(id) {
	try {
		const query = `
            SELECT
                id,
                habitacionpiso,
                habitacionnro,
                cantcamas,
                tienetelevision,
                tienefrigobar
            FROM habitacion
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

async function createHabitacion(habitacionpiso, habitacionnro, cantcamas, tienetelevision, tienefrigobar) {
	try {
		const query = `
            INSERT INTO habitacion (habitacionpiso, habitacionnro, cantcamas, tienetelevision, tienefrigobar)
            VALUES (?, ?, ?, ?, ?);
        `;
		const result = await pool
			.promise()
			.query(query, [habitacionpiso, habitacionnro, cantcamas, tienetelevision, tienefrigobar]);
		logger.info(result[0].id);

		return result[0].id;
	} catch (error) {
		logger.error(error);
		throw error;
	}
}

async function updateHabitacion(id, habitacionpiso, habitacionnro, cantcamas, tienetelevision, tienefrigobar) {
	try {
		const query = `
            UPDATE habitacion
            SET
                habitacionpiso = ?,
                habitacionnro = ?,
                cantcamas = ?,
                tienetelevision = ?,
                tienefrigobar = ?
            WHERE id = ?;
        `;
		await pool.promise().query(query, [habitacionpiso, habitacionnro, cantcamas, tienetelevision, tienefrigobar, id]);

		return true;
	} catch (error) {
		logger.error(error);
		throw error;
	}
}

async function deleteHabitacion(id) {
	try {
		const query = `DELETE FROM habitacion WHERE id = ?;`;
		await pool.promise().query(query, [id]);

		return true;
	} catch (error) {
		logger.error(error);
		throw error;
	}
}

module.exports = {
	getAllHabitaciones,
	getAllHabitacionesDisponibles,
	getHabitacionById,
	createHabitacion,
	updateHabitacion,
	deleteHabitacion,
};
