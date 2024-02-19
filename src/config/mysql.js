const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT || 3306,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
};

// Crear la conexión a la base de datos
const connection = mysql.createConnection(dbConfig);

// Conectar a la base de datos
connection.connect((err) => {
	if (err) {
		console.error('Error al conectar a la base de datos: ', err);
	} else {
		console.log('Conexión a la base de datos exitosa');
	}
});

module.exports = connection;
