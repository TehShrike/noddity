var levelup = require('levelup')
var Leveldown = require('localstorage-down')
var storage = function leveldownFactory(location) { return new Leveldown(location) }

module.exports = {
	clearCache: function clearCache() {
		var level = levelup('noddity-content', { db: storage })
		level.createKeyStream().on('data', function(key) {
			level.del(key)
		})
	}
}
