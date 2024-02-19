const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');
const swaggerComponentes = require('./swagger-componentes');

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Documentación API',
			version: '1.0.0',
			description: 'La documentación contiene las rutas de persona, habitacion y reservas',
		},
		components: {
			schemas: swaggerComponentes,
			// securitySchemes: {
			// 	apiKey: {
			// 		type: 'apiKey',
			// 		in: 'header',
			// 		name: 'Authorization',
			// 	},
			// },
		},
		// security: [
		// 	{
		// 		apiKey: [],
		// 	},
		// ],
	},
	apis: [
		path.resolve(__dirname, '../route/personaRoute.js'),
		path.resolve(__dirname, '../route/habitacionRoute.js'),
		path.resolve(__dirname, '../route/reservaRoute.js'),
	],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
