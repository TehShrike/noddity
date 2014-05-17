var Ractive = require('ractive')
var Butler = require('noddity-butler')
var levelup = require('levelup')
var leveljs = require('level-js')
var config = require('./config.js')
var routing = require('./js/routing.js')
var Linkifier = require('noddity-linkifier')
var Model = require('./js/mainViewModel.js')
var Leveldown = require('localstorage-down')


var title = new Ractive({
	el: 'title',
	template: '{{title}}{{#page}} | {{page}}{{/page}}',
	data: {
		title: config.title
	}
})

// Safari doesn't support indexedDB; have to use localstorage in that case
var storage = window.indexedDB ? leveljs : function leveldownFactory(location) { return new Leveldown(location) }
var butlerOptions = config.debug ? { refreshEvery: 30 * 1000 } : undefined
var butler = new Butler(config.noddityRoot, levelup('content', { db: storage }), butlerOptions)
var linkify = new Linkifier(config.pathPrefix + config.pagePathPrefix)

var model = new Model(butler, linkify)

var router = routing()

router.on('current', function(key) {
	model.setCurrent(key)

	butler.getPost(key, function(err, post) {
		if (!err) {
			title.set('page', post.metadata.title)
		} else {
			title.set('page', null)
			console.log(err)
		}
	})
})

if (config.debug) {
	window.debug = require('./js/debug.js')
}
