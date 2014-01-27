var routing = require('./routing.js')
var model = require('./model.js')

var ractive = new Ractive({
	el: 'body',
	template: '#main',
	data: {
		posts: {}
	}
})

var updatePost = model(ractive)

routing(ractive)
