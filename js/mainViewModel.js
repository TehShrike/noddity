var renderDom = require('noddity-render-dom')
var config = window.noddityConfig

module.exports = function MainViewModel(butler, linkifyEmitter, routingEmitter) {
	var options = {
		butler: butler,
		linkifier: linkifyEmitter,
		el: 'body',
		data: config
	}

	linkifyEmitter.on('link', function(pageName) {
		butler.getPost(pageName, function () {})
	})

	renderDom('post', options, function (err, setCurrent) {
		if (err) { document.body.innerHTML = '<h1>ERROR</h1>' + err.message }

		routingEmitter.on('current', function (postTitle) {
			setCurrent(postTitle, function (err) {
				if (err) {
					if (postTitle !== config.errorPage) {
						routingEmitter.emit('404')
					}
				} else {
					//fixAnchorLinks(setCurrent.ractive, '#!/' + config.pagePathPrefix, postTitle)
					routingEmitter.emit('loaded', postTitle)
				}
				butler.refreshPost(postTitle)
			})
		})

		setCurrent.on('error', function (err) {
			console.error('error', err)
		})
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
