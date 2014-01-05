angular.module('postContent', [])

function PostController($scope, $routeParams) {
	$scope.source = $routeParams.postSource
}

function IndexController($scope) {
	$scope.source = 'home.md'
}

angular.module('postContent').config(function($routeProvider) {
	$routeProvider
		.when('/', { templateUrl: 'layout/post.html', controller: IndexController })
		.when('/post/:postSource', { templateUrl: 'layout/post.html', controller: PostController })
		.otherwise({ redirectTo: '/' })
})

angular.module('postContent').factory('postPath', function() {
	var makePath = function(root) {
		return function(path) {
			return root + '/' + path
		}
	}
	return {
		content: makePath('content')
	}
})

angular.module('postContent').factory('getPost', function($http, postPath) {
	var converter = new Markdown.Converter()

	var waiters = {}
	var downloaded = {}

	var downloadPostFromServer = function(source, cb) {
		$http.get(postPath.content(source)).success(function(data, status, headers, config) {
			var rawPost = TEXT_METADATA_PARSER.parse(data, {
				date: 'date',
				string: 'title'
			})

			cb({
				html: converter.makeHtml(rawPost.content),
				metadata: rawPost.metadata,
				source: source
			})
		})
	}

	var callBackWaiters = function(source) {
		return function(post) {
			downloaded[source] = post

			var waitingForResponse = waiters[source]
			waitingForResponse.forEach(function(cb) {
				cb(post)
			})
			delete waiters[source]
		}
	}

	var getPost = function(source, cb) {
		if (typeof downloaded[source] === 'object') {
			cb(downloaded[source])
		} else {
			if (typeof waiters[source] === 'undefined') {
				waiters[source] = []
				downloadPostFromServer(source, callBackWaiters(source))
			}
			waiters[source].push(cb)
		}
	}

	return getPost
})

angular.module('postContent').factory('getPostList', function($http, getPost, postPath) {
	var sortedPosts = null
	var reversedPosts = null
	var waitingCallbacks = []

	$http.get(postPath.content("index.json")).success(function(data, status, headers, config) {
		//var postSources = JSON.parse(data)
		postSources = data
		var processed = 0
		var unsortedPosts = []
		
		var processPost = function(post) {
			unsortedPosts.push(post)
			processed++
			if (processed === postSources.length) {
				sortPosts('date')
				waitingCallbacks.forEach(function(cb) {
					cb()
				})
				waitingCallbacks = null
			}
		}

		var sortPosts = function(property) {
			sortedPosts = unsortedPosts.filter(function(post) {
				return typeof post.metadata[property] !== 'undefined'
			}).sort(function(a, b) {

				if (a.metadata[property] === b.metadata[property]) 
					return 0

				return (a.metadata[property] < b.metadata[property]) ? -1 : 1
			})
			reversedPosts = sortedPosts.slice()
			reversedPosts.reverse()
		}

		postSources.forEach(function(source) {
			getPost(source, processPost)
		})
	})

	var getListChunk = function(offset, count, ascending) {
		offset = offset || 0
		ascending = typeof ascending === 'boolean' ? ascending : true

		var posts = ascending ? sortedPosts : reversedPosts

		return count ? posts.slice(offset, offset + count) : posts
	}

	var getPostList = function(offset, count, cb) {
		if (typeof offset === 'function') {
			cb = offset
			offset = null
			count = null
		} else if (typeof count === 'function') {
			cb = count
			count = null
		}

		if (sortedPosts === null) {
			waitingCallbacks.push(function() {
				cb(getListChunk(offset, count, false))
			})
		} else {
			cb(getListChunk(offset, count, false))
		}
	}

	return getPostList
})

angular.module('postContent').directive('postList', function(getPostList) {
	return {
		template: '<div ng-show="postList">'
				+ '<h3>Posts</h3>'
				+ '<ol>'
					+ '<li ng-repeat="post in postList"><a href="#/post/{{post.source}}">{{post.metadata.title}}</a></li>'
				+ '</ol>'
			+ '</div>',
		replace: true,
		restrict: 'E',
		link: function(scope, element, attrs, ctrl) {
			getPostList(function(list) {
				scope.postList = list
			})
		}
	}
})

angular.module('postContent').directive('post', function(getPost) {
	return {
		template: '<div ng-show="post">'
					+ '<h1>{{post.metadata.title}}</h1>'
					+ '<div class="post-content" ng-bind-html-unsafe="post.html">'
					+ '</div>'
				+ '</div>',
		replace: true,
		restrict: 'E',
		scope: {
			source: '@'
		},
		link: function(scope, element, attrs, ctrl) {
			var refresh = function refresh() {
				getPost(scope.source, function(newPost) {
					scope.post = newPost
				})
			}
			if (attrs.source) {
				refresh()
			}
			scope.$watch('source', refresh)
		}
	}
})
