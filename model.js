var Butler = require('noddity-butler')
var levelup = require('levelup')
var leveljs = require('level-js')

module.exports = function keepUpdated(ractive) {
	var butler = new Butler('http://localhost.com/joshduff.com/content/', levelup('content', { db: leveljs }))

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
		var keypath = 'posts.' + post.filename
		ractive.set(keypath, post)
	}

	function download(key) {
		butler.getPost(key, function(err, post) {
			if (!err) {
				updatePostInView(post)
			} else {
				doSomethingAboutThisError(err)
			}
		})
	}

	ractive.observe('current', function(key) {
		download(key)
	})

	butler.on('post changed', function(key, newValue, oldValue) {
		updatePostInView(newValue)
	})

	return download
}
