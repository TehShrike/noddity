var config = require('../config.js')

module.exports = function(ractive, onChange) {
	return Satnav({}).navigate({
		path: config.pagePathPrefix + '{name}',
		directions: function(params) {
			ractive.set('current', params.name)
		}
	}).navigate({
		path: '/',
		directions: function(params) {
			ractive.set('current', 'index.md')
		}
	}).change(function(params, old) {
		window.scrollTo(0,0)
	}).otherwise('/').go()
}
