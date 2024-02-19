const pool = require('../config/mysql');
const logger = require('../util/logger');

async function getAllPersonas() {
	try {
		const query = 'SELECT * FROM persona';
		const result = await pool.promise().query(query);
		logger.info(result[0]);

		return result[0];
	} catch (error) {
		logger.error(error);
		throw error;
	}
}

async function getPersonaById(id) {
	try {
		const query = 'SELECT * FROM persona WHERE id = ?';
		const result = await pool.promise().query(query, [id]);
		logger.info(result[0]);

		return result[0];
	} catch (error) {
		logger.error(error);
		throw error;
	}
}

async function createPersona(nombrecompleto, nrodocumento, correo, telefono) {
	try {
		const query = 'INSERT INTO persona (nombrecompleto, nrodocumento, correo, telefono) VALUES (?, ?, ?, ?)';
		const result = await pool.promise().query(query, [nombrecompleto, nrodocumento, correo, telefono]);
		logger.info(result.insertId);

		return result.insertId;
	} catch (error) {
		logger.error(error);
		throw error;
	}
}

async function updatePersona(id, nombrecompleto, nrodocumento, correo, telefono) {
	try {
		const query = 'UPDATE persona SET nombrecompleto = ?, nrodocumento = ?, correo = ?, telefono = ? WHERE id = ?';
		await pool.promise().query(query, [nombrecompleto, nrodocumento, correo, telefono, id]);

		return true;
	} catch (error) {
		logger.error(error);
		throw error;
	}
}

async function deletePersona(id) {
	try {
		const query = 'DELETE FROM persona WHERE id = ?';
		await pool.promise().query(query, [id]);

		return true;
	} catch (error) {
		logger.error(error);
		throw error;
	}
}

module.exports = {
	getAllPersonas,
	getPersonaById,
	createPersona,
	updatePersona,
	deletePersona,
};
