module.exports = (app, repository) => {
	app.get('/gyms', (req, res, next) => {
		repository.getAllGyms((err, gyms) => {
			if(err) return next(err);
			res.json(gyms);
		});
	});

	app.get('/gyms/:id', (req, res, next) => {
		repository.getGymById(req.params.id, (err, gym) => {
			if(err) return next(err);
			res.json(gym);
		});
	});
}