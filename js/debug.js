var levelup = require('levelup')
var fruitdown = require('fruitdown')

module.exports = {
	clearCache: function clearCache() {
		var level = levelup('noddity-content', { db: fruitdown })
		level.createKeyStream().on('data', function(key) {
			level.del(key)
		})
	}
}
