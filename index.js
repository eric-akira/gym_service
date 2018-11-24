require('dotenv-safe').load();
const gyms = require('./api/gyms');
const server = require('./server/server');
const repository = require('./repository/repository');

server.start(gyms, repository, (err, app) => {
	console.log('server started!');
});