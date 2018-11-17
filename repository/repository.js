const mongodb = require('../config/mongodb');

function getAllGyms(callback) {
	mongodb.connect((err, db) => {
		db.collection('gyms').find().toArray(callback);
	});
}

function getGymById(id, callback) {
	mongodb.connect((err, db) => {
		db.collection('gyms').findOne({_id: require('mongodb').ObjectId(id)}, callback);
	});
}

function disconnect() {
	return mongodb.disconnect();
}

module.exports = { getAllGyms, getGymById, disconnect};