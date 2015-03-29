var config = noddityConfig
var EventEmitter = require('events').EventEmitter
var makeRouter = require('hash-brown-router')

module.exports = function() {
	var router = makeRouter()
	var emitter = new EventEmitter()

	emitter.on('404', function() {
		router.replace('!/' + config.pagePathPrefix + config.errorPage)
	})

	emitter.on('current', function() {
		window.scrollTo(0,0)
	})

	router.add('!/', function() {
		emitter.emit('current', 'index.md')
	})

	router.add('!/' + config.pagePathPrefix + ':name', function(parameters) {
		emitter.emit('current', parameters.name)
	})

	router.setDefault(function(path) {
		emitter.emit('404', path)
	})

	// Gotta give people a chance to hook up to the emitter before we kick 'er into gear
	setTimeout(router.evaluateCurrent.bind(null, '!/'), 0)

	return emitter
}
