var exec = require('child_process').exec;

exec('npm install && jam install && sass scss/global.scss css/global.css', function(err) {
	if (err) {
		console.error(err);
	}
}).stdout.on('data', function(message) {
	console.log(message);
});
