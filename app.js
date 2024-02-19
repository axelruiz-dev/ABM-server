const express = require('express');
const dotenv = require('dotenv');
const logger = require('./src/util/logger');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/util/swagger');
const cors = require('cors');
const app = express();

dotenv.config();

//======================================================================================================================
const hostName = process.env.API_HOSTNAME || '127.0.0.1';
const port = process.env.API_PORT || 3000;

//======================================================================================================================
app.use(cors());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.disable('x-powered-by');
app.set('port', port);

//======================================================================================================================
const personaRoute = require('./src/route/personaRoute');
const habitacionRoute = require('./src/route/habitacionRoute');
const reservaRoute = require('./src/route/reservaRoute');

app.use('/api/documentacion', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/persona', personaRoute);
app.use('/api/habitacion', habitacionRoute);
app.use('/api/reserva', reservaRoute);

//======================================================================================================================
app.listen(port, hostName, function () {
	logger.info('API: http://' + hostName + ':' + port + '/api/endpoint');
});

//======================================================================================================================
// ERROR HANDLER
app.use((err, req, res, next) => {
	console.log(err);
	res.status(err.status || 500).send(err.stack);
});

app.get('/', (req, res) => {
	res.send('Ruta raiz del backend');
});

module.exports = app;
