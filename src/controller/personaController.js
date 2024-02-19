const personas = require('../model/personaModel');

async function getPersonas(req, res) {
	try {
		const personasList = await personas.getAllPersonas();
		res.json(personasList);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function getPersonaById(req, res) {
	try {
		const { id } = req.params;
		const persona = await personas.getPersonaById(id);

		if (persona) {
			res.json(persona);
		} else {
			res.status(404).json({ message: 'Persona no encontrada' });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function createPersona(req, res) {
	try {
		const { nombrecompleto, nrodocumento, correo, telefono } = req.body;
		const newPersonaId = await personas.createPersona(nombrecompleto, nrodocumento, correo, telefono);
		res.status(201).json({ id: newPersonaId, message: 'Persona creada exitosamente' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function updatePersona(req, res) {
	try {
		const { id } = req.params;
		const { nombrecompleto, nrodocumento, correo, telefono } = req.body;

		const updated = await personas.updatePersona(id, nombrecompleto, nrodocumento, correo, telefono);
		if (updated) {
			res.json({ message: 'Persona actualizada correctamente' });
		} else {
			res.status(404).json({ message: 'Persona no encontrada' });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

async function deletePersona(req, res) {
	try {
		const { id } = req.params;
		const deleted = await personas.deletePersona(id);
		if (deleted) {
			res.json({ message: 'Persona eliminada correctamente' });
		} else {
			res.status(404).json({ message: 'Persona no encontrada' });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

module.exports = {
	getPersonas,
	getPersonaById,
	createPersona,
	updatePersona,
	deletePersona,
};
