var Butler = require('noddity-butler')
var levelup = require('levelup')
var Linkifier = require('noddity-linkifier')
var Leveldown = require('localstorage-down')
var routing = require('./routing')
var model = require('./mainViewModel')
var sub = require('subleveldown')
var config = noddityConfig

var storage = function leveldownFactory(location) { return new Leveldown(location) }

var db = levelup('noddity-content-3', { db: storage })
var normalizedSublevelName = config.title.replace(/[^\w]+/g, '')

require('ractive').DEBUG = config.debug
var butlerOptions = config.debug ? { refreshEvery: 2 * 1000 } : { cacheCheckIntervalMs: 60 * 1000 }
var butler = new Butler(config.noddityRoot, sub(db, normalizedSublevelName), butlerOptions)

var linkifyEmitter = new Linkifier(config.pathPrefix + config.pagePathPrefix)

var routingEmitter = routing()

model(butler, linkifyEmitter, routingEmitter)

if (config.debug) {
	window.debug = require('./debug')
}
