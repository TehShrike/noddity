var leveljs = require('level-js')
var levelup = require('levelup')

module.exports = {
	clearCache: function clearCache() {
		var level = levelup('content', { db: leveljs })
		level.createKeyStream().on('data', function(key) {
			level.del(key)
		})
	}
}
