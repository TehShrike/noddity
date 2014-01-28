var routing = require('./js/routing.js')
var model = require('./js/model.js')
var Ractive = require('ractive')
var config = require('./config.js')

var ractive = new Ractive({
	el: 'body',
	template: '#main',
	data: {
		posts: {},
		logo: config.logo
	}
})

model(ractive, config.noddityRoot)

routing(ractive)
