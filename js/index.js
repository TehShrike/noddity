var Butler = require('noddity-butler')
var levelup = require('levelup')
var leveljs = require('level-js')
var Linkifier = require('noddity-linkifier')
var Leveldown = require('localstorage-down')
var routing = require('./routing')
var Model = require('./mainViewModel')
var config = noddityConfig

// Safari doesn't support indexedDB; have to use localstorage in that case
var storage = window.indexedDB ? leveljs : function leveldownFactory(location) { return new Leveldown(location) }
var butlerOptions = config.debug ? { refreshEvery: 30 * 1000 } : undefined
var butler = new Butler(config.noddityRoot, levelup('content', { db: storage }), butlerOptions)
var linkify = new Linkifier(config.pathPrefix + config.pagePathPrefix)

var model = new Model(butler, linkify)

var router = routing()

router.on('current', model.setCurrent)

if (config.debug) {
	window.debug = require('./debug')
}
