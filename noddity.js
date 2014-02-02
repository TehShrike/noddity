var routing = require('./js/routing.js')
var model = require('./js/model.js')
var Ractive = require('ractive')
var config = require('./config.js')

var ractive = new Ractive({
	el: 'body',
	template: '#main',
	data: {
		posts: {},
		logo: config.logo,
		pagePathPrefix: config.pagePathPrefix
	}
})

model(ractive, config.noddityRoot, config.pagePathPrefix)

routing(ractive)

window.debug = require('./js/debug.js')
window.ractive = ractive
