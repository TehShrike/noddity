var EventEmitter = require('events').EventEmitter
var makeRouter = require('hash-brown-router')
var config = window.noddityConfig

module.exports = function(getPost) {
	var router = makeRouter()
	var routingEmitter = new EventEmitter()
	var current = null

	routingEmitter.on('404', function() {
		router.replace('!/' + config.pagePathPrefix + config.errorPage)
	})

	routingEmitter.on('current', function(name) {
		getPost(name, function (err, post) {
			if (err) console.error(err)
			else document.title = post.metadata.title // make a ractive instance for this
		})
		window.scrollTo(0,0)
	})

	router.add('!/', function() {
		routingEmitter.emit('current', 'index.md')
	})

	router.add('!/' + config.pagePathPrefix + ':name([^#]+)#:anchor', function(parameters) {
		if (current === parameters.name) {
			scrollToAnchor(parameters.anchor)
		} else {
			routingEmitter.emit('current', parameters.name)
			current = parameters.name
			routingEmitter.once('loaded', function() {
				scrollToAnchor(parameters.anchor)
			})
		}
	})

	router.add('!/' + config.pagePathPrefix + ':name([^#]+)', function(parameters) {
		routingEmitter.emit('current', parameters.name)
	})

	router.setDefault(function(path) {
		routingEmitter.emit('404', path)
	})

	// Gotta give people a chance to hook up to the emitter before we kick 'er into gear
	setTimeout(router.evaluateCurrent.bind(null, '!/'), 0)

	return routingEmitter
}

function scrollToAnchor(anchor) {
	var el = document.getElementById(anchor)
	if (el) {
		window.scrollTo(0, el.offsetTop)
	}
}
