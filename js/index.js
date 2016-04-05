var Butler = require('noddity-butler')
var levelup = require('levelup')
var Linkifier = require('noddity-linkifier')
var fruitdown = require('fruitdown')
var model = require('./mainViewModel')
var sub = require('subleveldown')
var extend = require('xtend')
var config = noddityConfig // Global

var db = levelup('noddity-content', { db: fruitdown })

config.title = config.name = (config.title || config.name)
var normalizedSublevelName = config.title.replace(/[^\w]+/g, '')

var timingOptions = config.debug ? { refreshEvery: 30 * 1000 } : { cacheCheckIntervalMs: 60 * 1000 }
var butlerOptions = extend(timingOptions, {
	parallelPostRequests: 4,
	loadPostsOnIndexChange: false
})
var butler = new Butler(config.noddityRoot, sub(db, normalizedSublevelName), butlerOptions)

var linkifyEmitter = new Linkifier(config.pathPrefix + config.pagePathPrefix)

model(butler, linkifyEmitter)

if (config.sidebar) {
	console.warn('The "sidebar" config.js setting is not supported any more - you should add ::' + config.sidebar + ':: to your ' + config.template + ' template')
}

if (config.debug) {
	debug = require('./debug') // Global
}
