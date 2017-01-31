var EventEmitter = require('events').EventEmitter
var makeRouter = require('hash-brown-router')
var config = noddityConfig // Global

module.exports = function() {
	var router = makeRouter()
	var routingEmitter = new EventEmitter()
	var current = null

	routingEmitter.on('404', function() {
		router.replace('!/' + config.pagePathPrefix + config.errorPage)
	})

	routingEmitter.on('loaded', function(name) {
		scrollTo(0, 0)
	})

	router.add('!/', function(parameters) {
		routingEmitter.emit('current', 'index.md', parameters)
	})

	router.add('!/' + config.pagePathPrefix + ':name([^#]+)#:anchor', function(parameters) {
		var name = decodeURIComponent(parameters.name)
		if (current === name) {
			scrollToAnchor(parameters.anchor)
		} else {
			routingEmitter.emit('current', name, parameters)
			current = name
			routingEmitter.once('loaded', function() {
				scrollToAnchor(parameters.anchor)
			})
		}
	})

	router.add('!/' + config.pagePathPrefix + ':name([^#]+)', function(parameters) {
		var name = decodeURIComponent(parameters.name)
		routingEmitter.emit('current', name, parameters)
	})

	router.on('not found', function(path) {
		routingEmitter.emit('404', path)
	})

	// Gotta give people a chance to hook up to the emitter before we kick 'er into gear
	setTimeout(router.evaluateCurrent.bind(null, '!/'), 0)

	return routingEmitter
}

function scrollToAnchor(anchor) {
	var el = document.getElementById(anchor)
	if (el) {
		el.scrollIntoView()
	}
}
