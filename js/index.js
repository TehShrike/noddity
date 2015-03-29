var Butler = require('noddity-butler')
var levelup = require('levelup')
var Linkifier = require('noddity-linkifier')
var Leveldown = require('localstorage-down')
var routing = require('./routing')
var Model = require('./mainViewModel')
var Sublevel = require('level-sublevel')
var config = noddityConfig

var storage = function leveldownFactory(location) { return new Leveldown(location) }

var db = Sublevel(levelup('noddity-content-2', { db: storage }))
var normalizedSublevelName = config.title.replace(/[^\w]+/g, '')


var butlerOptions = config.debug ? { refreshEvery: 30 * 1000 } : { cacheCheckIntervalMs: 60 * 1000 }
var butler = new Butler(config.noddityRoot, db.sublevel(normalizedSublevelName), butlerOptions)

var linkifyEmitter = new Linkifier(config.pathPrefix + config.pagePathPrefix)

var routingEmitter = routing()

var model = new Model(butler, linkifyEmitter, routingEmitter)

if (config.debug) {
	window.debug = require('./debug')
}
