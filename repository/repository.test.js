const test = require('tape');
const repository = require('./repository');

function runTests() {

	var id = null;

	test('Repository getAllGyms', (t) => {
		repository.getAllGyms((err, gyms) => {
			if(gyms && gyms.length > 0) id = gyms[0]._id;

			t.assert(!err && gyms && gyms.length > 0, 'All Gyms Returned');
			t.end();
		});
	});

	test('Repository getGymById', (t) => {
		if(!id) {
			t.assert(false, 'Gym by Id Returned');
			t.end();
			return;
		}

		repository.getGymById(id, (err, gym) => {
			t.assert(!err && gym, 'Gym by Id Returned');
			t.end();
		})
	});

	test('Repository disconnect', (t) => {
		t.assert(repository.disconnect(), 'Disconnect Ok');
		t.end();
	});
}

module.exports = {runTests};