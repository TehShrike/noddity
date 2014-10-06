var ASQ = require('asynquence')
var http = require('http')

module.exports = function(fontUrls, cb) {
	if (typeof fontUrls === 'string') {
		fontUrls = [fontUrls]
	}

	var sequence = ASQ()

	var fns = fontUrls.map(function(url) {
		return function(done) {
			http.get({}, function() {
				done()
			})
		}
	})

	sequence.gate.apply(sequence, fns).then(function() {
		cb()
	})

}
