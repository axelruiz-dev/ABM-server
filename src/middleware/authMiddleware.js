const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function verifyToken(req, res, next) {
	const token = req.headers.authorization; // Lee el token del header (puedes ajustar cómo envías el token)
	//console.log('///////////', token);
	if (!token) {
		return res.status(403).json({ message: 'Token no proporcionado' });
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).json({ message: 'Token inválido' });
		}
		console.log(decoded);
		req.user = decoded; // Agrega el payload del token a la solicitud para uso posterior
		next(); // Continúa con la ejecución de la ruta
	});
}

module.exports = verifyToken;
