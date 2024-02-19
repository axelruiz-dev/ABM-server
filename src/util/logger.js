const winston = require('winston');
const { combine, timestamp, printf } = winston.format;
const colors = require('colors');

const customLevels = {
	levels: {
		error: 2,
		warn: 3,
		info: 4,
		debug: 5,
		trace: 6,
	},
};

const customColors = {
	error: 'red',
	warn: 'yellow',
	info: 'green',
	debug: 'blue',
	trace: 'white',
};

const emojis = {
	error: '❌',
	warn: '⚠️',
	info: '📝',
	debug: '🐞',
	trace: '🔍',
};

// Asigna los colores personalizados
colors.setTheme(customColors);

// Registra los colores personalizados en Winston
winston.addColors(customColors);

const logger = winston.createLogger({
	levels: customLevels.levels,
	transports: [
		new winston.transports.Console(), // Imprime los mensajes en la consola
		new winston.transports.File({
			level: 'error', // Guarda los logs de nivel 'error' en un archivo
			filename: './src/log/error.log',
		}),
		new winston.transports.File({
			level: 'warn', // Guarda los logs de nivel 'warn' en un archivo
			filename: './src/log/warn.log',
		}),
		new winston.transports.File({
			level: 'info', // Guarda los logs de nivel 'info' en un archivo
			filename: './src/log/info.log',
		}),
	],
	format: combine(
		timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		printf(({ level, message, timestamp }) => {
			const emoji = emojis[level] || '📝';

			return `${timestamp} [${level.toUpperCase()}] ${emoji}: ${JSON.stringify(message)}`[level]; // Aplica el color correspondiente al nivel
		})
	),
});

module.exports = logger;
