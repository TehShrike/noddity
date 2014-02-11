var Converter = require('pagedown').Converter
var template = require('./template.js')

var converter = new Converter()

module.exports = function keepUpdated(ractive, butler, linkify) {
	var children = {}

	function doSomethingAboutThisError(err) {
		console.log(err)
	}

	function getPostList() {
		butler.getPosts(function(err, posts) {
			if (!err) {
				ractive.set('postList', posts.reverse().filter(function(post) {
					return typeof post.metadata.title === 'string'
				}).map(function(post) {
					return {
						title: post.metadata.title,
						filename: post.filename
					}
				}))
			} else {
				doSomethingAboutThisError(err)
			}
		})
	}

	function updatePostInView(post) {
		ractive.set('currentPost', post)
		createTemplateElements()

		// Waiting until the current post is displayed before fetching the list of posts
		if (ractive.get('postList') === undefined) {
			getPostList()
		}
	}

	function createTemplateElements() {
		ractive.findAll('.noddity-template').forEach(function(element) {
			var postName = template.getPostName(element.id)
			var childRactive = template.createRactivePost(element, postName)
			children[element.id] = childRactive
			keepUpdated(childRactive, butler, linkify)
		})
	}

	function getPost(key) {
		butler.getPost(key, function(err, post) {
			if (err) {
				doSomethingAboutThisError(err)
			} else if (key === ractive.get('current')) {
				var html = linkify(converter.makeHtml(post.content))
				post.html = html.replace(/{{([\w.-]+)}}/gm, function(match, postName) {
					return template.generatePostDiv(postName)
				})

				updatePostInView(post)
			}
		})
	}

	ractive.observe('current', function(key) {
		if (typeof key === 'string') {
			teardownChildren()
			getPost(key)
		}
	})

	function onPostChanged(key, newValue, oldValue) {
		if (key === ractive.get('current')) {
			updatePostInView(newValue)
		}
	}

	butler.on('post changed', onPostChanged)

	function teardownChildren() {
		Object.keys(children).map(function(id) {
			return children[id]
		}).forEach(function(ractive) {
			ractive.teardown()
		})
		children = {}
	}

	ractive.on('teardown', function onTeardown() {
		butler.removeListener('post changed', onPostChanged)
		teardownChildren()
	})
}
