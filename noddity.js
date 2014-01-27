var routing = require('./routing.js')
var model = require('./model.js')

var ractive = new Ractive({
	el: 'body',
	template: '#main',
	data: {}
})

var updatePost = model(ractive)

routing(ractive)
