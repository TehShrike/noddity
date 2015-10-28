var renderDom = require('noddity-render-dom')
var routing = require('./routing')
var Ractive = require('ractive')
var config = window.noddityConfig
Ractive.DEBUG = config.debug

module.exports = function MainViewModel(butler, linkifyEmitter) {
	var options = {
		butler: butler,
		linkifier: linkifyEmitter,
		el: 'body',
		data: config
	}

	var titleRactive = new Ractive({
		el: 'title',
		template: document.title
	})

	linkifyEmitter.on('link', function(pageName) {
		butler.getPost(pageName, function () {})
	})

	renderDom('post', options, function (err, setCurrent) {
		if (err) {
			console.error(err)
			document.body.innerHTML = '<h1>ERROR</h1>' + err.message
		}
		var routingEmitter = routing(butler.getPost)

		routingEmitter.on('current', function (postTitle) {
			titleRactive.reset(config)

			setCurrent(postTitle, function (err) {
				if (err) {
					if (postTitle !== config.errorPage) {
						routingEmitter.emit('404')
					}
				} else {
					//fixAnchorLinks(setCurrent.ractive, '#!/' + config.pagePathPrefix, postTitle)
					routingEmitter.emit('loaded', postTitle)
				}
				butler.getPost(postTitle, function (err, post) {
					if (post) titleRactive.set(post.metadata)
				})
				butler.refreshPost(postTitle)
			})
		})

		setCurrent.on('error', console.error.bind(console, 'setCurrent error'))
	})
}

function fixAnchorLinks(ractive, prefix, currentKey) {
	ractive.findAll('a[href]').forEach(function(element) {
		var href = element.getAttribute('href')
		if (href && href[0] === '#' && href.indexOf(prefix) !== 0) {
			element.setAttribute('href', prefix + currentKey + href)
		}
	})
}
