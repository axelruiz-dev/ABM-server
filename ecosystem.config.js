module.exports = {
	apps: [
		{
			name: 'server',
			script: 'app.js',
			log_date_format: 'YYYY-MM-DD HH:mm:ss',
			out_file: './src/log/pm2/app-out.log',
			error_file: './src/log/pm2/app-error.log',
			instances: 1,
			autorestart: true,
			watch: false,
			max_memory_restart: '1G',
		},
	],
};
