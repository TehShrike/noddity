var Butler = require('noddity-butler')
var levelup = require('levelup')
var Linkifier = require('noddity-linkifier')
var Leveldown = require('localstorage-down')
var routing = require('./routing')
var Model = require('./mainViewModel')
var Sublevel = require('level-sublevel')
var fontLoader = require('./fontLoader')
var config = noddityConfig

var storage = function leveldownFactory(location) { return new Leveldown(location) }

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

fontLoader([
	window.location.pathname + 'font/cantarell_regular_macroman/Cantarell-Regular-webfont.woff',
	window.location.pathname + 'font/sinanova_regular_macroman/SinaNovaReg-webfont.woff'
], function() {
	var bodyClass = 'web-font-loaded'
	if (window.document.body.className.length > 0) {
		window.document.body.className += bodyClass
	} else {
		window.document.body.className = bodyClass
	}
})
