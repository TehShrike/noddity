var Converter = require('pagedown').Converter
var template = require('./template.js')

var converter = new Converter()

module.exports = function keepUpdated(ractive, butler, linkify) {
	function doSomethingAboutThisError(err) {
		console.log(err)
	}

	butler.getPosts(function(err, posts) {
		if (!err) {
			ractive.set('postList', posts.reverse())
		} else {
			doSomethingAboutThisError(err)
		}
	})


	function updatePostInView(post) {
		var posts = ractive.get('posts')
		posts[post.filename] = post
		ractive.update('posts')
		createTemplateElements()
	}

	function createTemplateElements() {
		ractive.findAll('.noddity-template').forEach(function(element) {
			var postName = template.getPostName(element.id)
			keepUpdated(template.createRactivePost(element, postName), butler, linkify)
		})
	}

	function download(key) {
		butler.getPost(key, function(err, post) {
			if (!err) {
				var html = linkify(converter.makeHtml(post.content))
				post.html = html.replace(/{{([\w.-]+)}}/gm, function(match, postName) {
					return template.generatePostDiv(postName)
				})

				updatePostInView(post)
			} else {
				doSomethingAboutThisError(err)
			}
		})
	}

	ractive.observe('current', function(key) {
		if (typeof key === 'string') {
			download(key)
		}
	})

	butler.on('post changed', function(key, newValue, oldValue) {
		updatePostInView(newValue)
	})

	return download
}
