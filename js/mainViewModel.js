var Ractive = require('ractive')
var xtend = require('xtend')
var config = noddityConfig
var Renderer = require('noddity-renderer')

function noop() {}

module.exports = function MainViewModel(butler, linkifyEmitter, routingEmitter) {
	var renderer = new Renderer(butler, linkifyEmitter.linkify)
	var changePostInRactive = null

	var titleRactive = new Ractive({
		el: 'title',
		template: '{{title}}{{#page}} | {{page}}{{/page}}',
		data: {
			title: config.title
		}
	})

	var mainRactive = new Ractive({
		el: 'body',
		data: Object.create(config)
	})

	butler.getPost(config.template, function(err, post) {
		if (err) {
			doSomethingAboutThisError(err)
		} else {
			mainRactive.resetTemplate(post.content)
		}
	})

	function doSomethingAboutThisError(err) {
		console.log(err)
	}

	function getPostList() {
		butler.getPosts(function(err, posts) {
			if (!err) {
				mainRactive.set('postList', posts.reverse().filter(function(post) {
					return typeof post.metadata.title === 'string'
				}).map(function(post) {
					return xtend(post.metadata, {
						filename: post.filename
					})

					// return {
					// 	title: post.metadata.title,
					// 	filename: post.filename
					// }
				}))
			} else {
				doSomethingAboutThisError(err)
			}
		})
	}

	function changeCurrentPost(key) {
		butler.getPost(key, function(err, post) {
			if (err) {
				mainRactive.set('html', err.message)
				titleRactive.set('page', null)

				if (key !== config.errorPage) {
					routingEmitter.emit('404')
				}
			} else {
				titleRactive.set('page', post.metadata.title)

				if (changePostInRactive) {
					changePostInRactive(post)
				} else {
					changePostInRactive = renderer.populateRootRactive(post, mainRactive)
				}

				fixAnchorLinks(mainRactive, '#!/' + config.pagePathPrefix, key)

				if (!mainRactive.get('postList')) {
					getPostList()
				}

				routingEmitter.emit('loaded', key)
			}
		})
		butler.refreshPost(key)
	}

	linkifyEmitter.on('link', function(pageName) {
		butler.getPost(pageName, noop)
	})

	function onPostChanged(key, newValue, oldValue) {
		function titleHasChanged(postListItem) {
			return postListItem.filename === key && postListItem.title !== newValue.metadata.title
		}

		if (key === config.template) {
			mainRactive.resetTemplate(newValue.content)
		}

		var postList = mainRactive.get('postList')
		if (postList && postList.some(titleHasChanged)) {
			getPostList()
		}
	}

	butler.on('post changed', onPostChanged)
	butler.on('index changed', getPostList)

	routingEmitter.on('current', changeCurrentPost)
}

function fixAnchorLinks(ractive, prefix, currentKey) {
	ractive.findAll('a[href]').forEach(function(element) {
		var href = element.getAttribute('href')
		if (href && href[0] === '#' && href.indexOf(prefix) !== 0) {
			element.setAttribute('href', prefix + currentKey + href)
		}
	})
}
