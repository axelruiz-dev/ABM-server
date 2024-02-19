function formatoMoneda(monto) {
	//console.log('//////', parseFloat(monto).toLocaleString('es-PY', { style: 'currency', currency: 'PYG' }));
	return parseFloat(monto).toLocaleString('es-PY', { style: 'currency', currency: 'PYG' });
}

//console.log(formatoMoneda(50000.0));
module.exports = formatoMoneda;
