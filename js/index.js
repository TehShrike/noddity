var Butler = require('noddity-butler')
var levelup = require('levelup')
var leveljs = require('level-js')
var Linkifier = require('noddity-linkifier')
var Leveldown = require('localstorage-down')
var routing = require('./routing')
var Model = require('./mainViewModel')
var Sublevel = require('level-sublevel')
var browser = require('bowser').browser
var config = noddityConfig

var ie11 = browser.msie && browser.version === '11.0'

// IE11 isn't currently supported by the IDBWrapper module used by level-js
var storage
if (window.indexedDB && !ie11) {
	storage = leveljs
	console.log("Storing Noddity content in an IndexedDB")
} else {
	storage = function leveldownFactory(location) { return new Leveldown(location) }
	console.log("Storing Noddity content in localstorage")
}

var db = Sublevel(levelup('noddity-content', { db: storage }))
var normalizedSublevelName = config.title.replace(/[^\w]+/g, '')


var butlerOptions = config.debug ? { refreshEvery: 30 * 1000 } : undefined
var butler = new Butler(config.noddityRoot, db.sublevel(normalizedSublevelName), butlerOptions)

var linkifyEmitter = new Linkifier(config.pathPrefix + config.pagePathPrefix)

var model = new Model(butler, linkifyEmitter)

var router = routing()

router.on('current', model.setCurrent)

if (config.debug) {
	window.debug = require('./debug')
}
