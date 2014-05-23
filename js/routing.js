var config = noddityConfig
var EventEmitter = require('events').EventEmitter

module.exports = function() {
	var emitter = new EventEmitter()

	var satnav = Satnav({}).navigate({
		path: '!/' + config.pagePathPrefix + '{name}',
		directions: function(params) {
			emitter.emit('current', params.name)
		}
	}).navigate({
		path: '!/',
		directions: function(params) {
			emitter.emit('current', 'index.md')
		}
	}).navigate({
		path: '',
		directions: function(params) {
			document.location = document.location + '#!/'
		}
	}).change(function(params, old) {
		window.scrollTo(0,0)
	}).otherwise('!/' + config.pagePathPrefix + '404.md')


	// Gotta give people a chance to hook up to the emitter before we kick 'er into gear
	setTimeout(satnav.go.bind(satnav), 0)

	return emitter
}
