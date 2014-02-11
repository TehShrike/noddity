var Ractive = require('ractive')
var Butler = require('noddity-butler')
var levelup = require('levelup')
var leveljs = require('level-js')
var config = require('./config.js')
var routing = require('./js/routing.js')
var Linkifier = require('./js/linkifier.js')
var model = require('./js/model.js')
var postPartial = require('./js/postPartial.js')

var ractive = new Ractive({
	el: 'body',
	template: '#main',
	data: {
		posts: {},
		logo: config.logo,
		pagePathPrefix: config.pagePathPrefix,
		editLink: config.editLink
	},
	partials: {
		post: postPartial
	}
})

var title = new Ractive({
	el: 'title',
	template: '{{title}}{{#page}} | {{page}}{{/page}}',
	data: {
		title: config.title
	}
})

ractive.observe('current', function(key) {
	if (typeof key === 'string') {
		butler.getPost(key, function(err, post) {
			if (!err) {
				title.set('page', post.metadata.title)
			} else {
				title.set('page', null)
				console.log(err)
			}
		})
	}
})

var butler = new Butler(config.noddityRoot, levelup('content', { db: leveljs }))
var linkify = new Linkifier('#/' + config.pagePathPrefix)

model(ractive, butler, linkify)

routing(ractive)

window.debug = require('./js/debug.js')
window.ractive = ractive
