var renderDom = require('noddity-render-dom')
var Butler = require('noddity-butler')
var Linkifier = require('noddity-linkifier')
var LevelJs = require('level-js')

var db = new LevelJs('noddity-posts-db')
var butler = new Butler('http://example.com/blogfiles/', db)
var linkifier = new Linkifier('#/myposts/')

var options = {
	butler: butler,
	linkifier: linkifier,
	el: 'body',
	data: {}
}

module.exports = function MainViewModel(butler, linkifyEmitter, routingEmitter) {

	linkifyEmitter.on('link', function(pageName) {
		butler.getPost(pageName, function () {})
	})

	renderDom('index.html', options, function (err, setCurrent) {
		if (err) document.body.innerHTML = '<h1>ERROR</h1>' + err.message

		routingEmitter.on('current', function (postTitle) {
			setCurrent(postTitle, function (err) {
				if (err) {
					setCurrent('404.md')
					mainRactive.set('html', err.message)

					if (postTitle !== config.errorPage) {
						routingEmitter.emit('404')
					}
				} else {
					fixAnchorLinks(mainRactive, '#!/' + config.pagePathPrefix, postTitle)

					if (!mainRactive.get('postList')) {
						getPostList()
					}

					routingEmitter.emit('loaded', postTitle)
				}
				butler.refreshPost(postTitle)
			})
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
