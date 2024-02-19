module.exports = {
	Persona: {
		type: 'object',
		properties: {
			nombrecompleto: {
				type: 'string',
				description: 'Nombre completo de la persona',
			},
			nrodocumento: {
				type: 'string',
				description: 'Número de documento de la persona',
			},
			correo: {
				type: 'string',
				description: 'Correo electrónico de la persona',
			},
			telefono: {
				type: 'string',
				description: 'Número de teléfono de la persona',
			},
		},
	},

	NuevaPersona: {
		type: 'object',
		properties: {
			nombrecompleto: {
				type: 'string',
				description: 'Nombre completo de la nueva persona',
			},
			nrodocumento: {
				type: 'string',
				description: 'Número de documento de la nueva persona',
			},
			correo: {
				type: 'string',
				description: 'Correo electrónico de la nueva persona',
			},
			telefono: {
				type: 'string',
				description: 'Número de teléfono de la nueva persona',
			},
		},
	},

	ActualizarPersona: {
		type: 'object',
		properties: {
			nombrecompleto: {
				type: 'string',
				description: 'Nuevo nombre completo de la persona',
			},
			nrodocumento: {
				type: 'string',
				description: 'Nuevo número de documento de la persona',
			},
			correo: {
				type: 'string',
				description: 'Nuevo correo electrónico de la persona',
			},
			telefono: {
				type: 'string',
				description: 'Nuevo número de teléfono de la persona',
			},
		},
	},

	EliminarPersona: {
		type: 'object',
		properties: {
			personaId: {
				type: 'integer',
				description: 'ID de la persona a eliminar',
			},
		},
	},

	Habitacion: {
		type: 'object',
		properties: {
			habitacionpiso: {
				type: 'integer',
				description: 'Piso de la habitación',
			},
			habitacionnro: {
				type: 'integer',
				description: 'Número de la habitación',
			},
			cantcamas: {
				type: 'integer',
				description: 'Cantidad de camas en la habitación',
			},
			tienetelevision: {
				type: 'boolean',
				description: 'Indica si la habitación tiene televisión',
			},
			tienefrigobar: {
				type: 'boolean',
				description: 'Indica si la habitación tiene frigobar',
			},
		},
	},

	NuevaHabitacion: {
		type: 'object',
		properties: {
			habitacionpiso: {
				type: 'integer',
				description: 'Piso de la nueva habitación',
			},
			habitacionnro: {
				type: 'integer',
				description: 'Número de la nueva habitación',
			},
			cantcamas: {
				type: 'integer',
				description: 'Cantidad de camas en la nueva habitación',
			},
			tienetelevision: {
				type: 'boolean',
				description: 'Indica si la nueva habitación tiene televisión',
			},
			tienefrigobar: {
				type: 'boolean',
				description: 'Indica si la nueva habitación tiene frigobar',
			},
		},
	},

	ModificarHabitacion: {
		type: 'object',
		properties: {
			habitacionpiso: {
				type: 'integer',
				description: 'Nuevo piso de la habitación',
			},
			habitacionnro: {
				type: 'integer',
				description: 'Nuevo número de la habitación',
			},
			cantcamas: {
				type: 'integer',
				description: 'Nueva cantidad de camas en la habitación',
			},
			tienetelevision: {
				type: 'boolean',
				description: 'Indica si la habitación tiene nueva televisión',
			},
			tienefrigobar: {
				type: 'boolean',
				description: 'Indica si la habitación tiene nuevo frigobar',
			},
		},
	},

	EliminarHabitacion: {
		type: 'object',
		properties: {
			habitacionId: {
				type: 'integer',
				description: 'ID de la habitación a eliminar',
			},
		},
	},

	Reserva: {
		type: 'object',
		properties: {
			fechareserva: {
				type: 'string',
				description: 'Fecha de la reserva (formato YYYY-MM-DD HH:mm:ss)',
			},
			fechaentrada: {
				type: 'string',
				description: 'Fecha de entrada (formato YYYY-MM-DD HH:mm:ss)',
			},
			fechasalida: {
				type: 'string',
				description: 'Fecha de salida (formato YYYY-MM-DD HH:mm:ss)',
			},
			habitacionid: {
				type: 'integer',
				description: 'ID de la habitación reservada',
			},
			personaid: {
				type: 'integer',
				description: 'ID de la persona que realiza la reserva',
			},
			montoreserva: {
				type: 'number',
				description: 'Monto de la reserva',
			},
		},
	},

	Reserva: {
		type: 'object',
		properties: {
			fechareserva: {
				type: 'string',
				description: 'Fecha de la reserva (formato YYYY-MM-DD HH:mm:ss)',
			},
			fechaentrada: {
				type: 'string',
				description: 'Fecha de entrada (formato YYYY-MM-DD HH:mm:ss)',
			},
			fechasalida: {
				type: 'string',
				description: 'Fecha de salida (formato YYYY-MM-DD HH:mm:ss)',
			},
			habitacionid: {
				type: 'integer',
				description: 'ID de la habitación reservada',
			},
			personaid: {
				type: 'integer',
				description: 'ID de la persona que realiza la reserva',
			},
			montoreserva: {
				type: 'number',
				description: 'Monto de la reserva',
			},
		},
	},

	NuevaReserva: {
		type: 'object',
		properties: {
			fechareserva: {
				type: 'string',
				description: 'Fecha de la nueva reserva (formato YYYY-MM-DD HH:mm:ss)',
			},
			fechaentrada: {
				type: 'string',
				description: 'Fecha de la nueva entrada (formato YYYY-MM-DD HH:mm:ss)',
			},
			fechasalida: {
				type: 'string',
				description: 'Fecha de la nueva salida (formato YYYY-MM-DD HH:mm:ss)',
			},
			habitacionid: {
				type: 'integer',
				description: 'ID de la nueva habitación reservada',
			},
			personaid: {
				type: 'integer',
				description: 'ID de la nueva persona que realiza la reserva',
			},
			montoreserva: {
				type: 'number',
				description: 'Nuevo monto de la reserva',
			},
		},
	},

	ModificarReserva: {
		type: 'object',
		properties: {
			fechareserva: {
				type: 'string',
				description: 'Nueva fecha de la reserva (formato YYYY-MM-DD HH:mm:ss)',
			},
			fechaentrada: {
				type: 'string',
				description: 'Nueva fecha de entrada (formato YYYY-MM-DD HH:mm:ss)',
			},
			fechasalida: {
				type: 'string',
				description: 'Nueva fecha de salida (formato YYYY-MM-DD HH:mm:ss)',
			},
			habitacionid: {
				type: 'integer',
				description: 'Nuevo ID de la habitación reservada',
			},
			personaid: {
				type: 'integer',
				description: 'Nuevo ID de la persona que realiza la reserva',
			},
			montoreserva: {
				type: 'number',
				description: 'Nuevo monto de la reserva',
			},
		},
	},

	EliminarReserva: {
		type: 'object',
		properties: {
			reservaId: {
				type: 'integer',
				description: 'ID de la reserva a eliminar',
			},
		},
	},
};
