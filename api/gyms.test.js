const test = require('tape');
const supertest = require('supertest');
const gyms = require('./gyms');
const server = require('../server/server');
const repository = require('../repository/repository');

function runTests() {
	var app = null;

	server.start(gyms, repository, (err, app) => {
		var id = null;
		test('GET /gyms', (t) => {
			supertest(app)
				.get('/gyms')
				.expect('Content-Type', /json/)
				.expect(200)
				.end((err, res) => {
					if(res.body && res.body.length > 0) id = res.body[0]._id;
					t.error(err, 'No errors');
					t.assert(res.body && res.body.length > 0, 'All Gyms returned');
					t.end();
				});
		});

		test('GET /gyms/:id', (t) => {
			if(!id) {
				t.assert(false, "Gym by id returned");
				t.end();
				return;
			}

			supertest(app)
				.get('/gyms/' + id)
				.expect('Content-Type', /json/)
				.expect(200)
				.end((err, res) => {
					t.error(err, 'No errors');
					t.assert(res.body, 'Gym by id returned');
					t.end();
				});
		});
		
		server.stop();
	});
}

module.exports = {runTests};