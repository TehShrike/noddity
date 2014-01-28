var routing = require('./js/routing.js')
var model = require('./js/model.js')
var Ractive = require('ractive')

var ractive = new Ractive({
	el: 'body',
	template: '#main',
	data: {
		posts: {}
	}
})

model(ractive)

routing(ractive)
