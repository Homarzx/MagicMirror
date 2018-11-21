const shell = require('python-shell').PythonShell
shell.run('camera.py', null, function(err) {
	if (err) throw err;
	console.log('finish')
})