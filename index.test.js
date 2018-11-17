require('dotenv-safe').load();
require('./config/mongodb.test').runTests();
require('./repository/repository.test').runTests();