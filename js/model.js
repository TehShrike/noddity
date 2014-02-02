var Butler = require('noddity-butler')
var levelup = require('levelup')
var leveljs = require('level-js')
var Converter = require('pagedown').Converter
var Linkifier = require('./linkifier.js')

module.exports = function keepUpdated(ractive, noddityRoot, pagePathPrefix) {
	var converter = new Converter()
	var butler = new Butler(noddityRoot, levelup('content', { db: leveljs }))
	var linkify = new Linkifier('#/' + pagePathPrefix)

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
	}

	function download(key) {
		butler.getPost(key, function(err, post) {
			if (!err) {
				post.html = linkify(converter.makeHtml(post.content))
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
