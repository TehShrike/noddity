var renderDom = require('noddity-render-dom')
var routing = require('./routing')
var Ractive = require('ractive')
var config = noddityConfig // Global
Ractive.DEBUG = config.debug

module.exports = function MainViewModel(butler, linkifyEmitter) {
	var currentPostFilename = ''
	var options = {
		butler: butler,
		linkifier: linkifyEmitter,
		el: 'body',
		data: config
	}

	var titleRactive = new Ractive({
		el: 'title',
		template: '{{name}}{{#current.metadata.title}} | {{current.metadata.title}}{{/current.metadata.title}}'
	})

	function setPostTitle(err, post) {
		titleRactive.reset(config)
		if (!err && post) {
			titleRactive.set('current', post)
		}
	}

	butler.on('post change', function (post) {
		if (post.filename === currentPostFilename) {
			setPostTitle(null, post)
		}
	})

	linkifyEmitter.on('link', function(pageName) {
		butler.getPost(pageName, function () {})
	})

	renderDom('post', options, function (err, setCurrent) {
		if (err) {
			console.error(err)
			document.body.innerHTML = '<h1>ERROR</h1>' + err.message
		}
		var routingEmitter = routing()

		routingEmitter.on('current', function (postFilename) {

			setCurrent(postFilename, function (err) {
				if (err) {
					if (postFilename !== config.errorPage) {
						routingEmitter.emit('404')
					}
				} else {
					fixAnchorLinks(setCurrent.ractive, '#!/' + config.pagePathPrefix, postFilename)
					routingEmitter.emit('loaded', postFilename)
				}
				butler.getPost(postFilename, setPostTitle)
				butler.refreshPost(postFilename)
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
