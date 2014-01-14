angular.module('noddity', [])

var Butler = require('noddity-butler')

function PostController($scope, $routeParams) {
	$scope.source = $routeParams.postSource
}

function IndexController($scope) {
	$scope.source = 'home.md'
}

angular.module('noddity').config(function($routeProvider) {
	$routeProvider
		.when('/', { templateUrl: 'layout/singlePostPage.html', controller: IndexController })
		.when('/post/:postSource', { templateUrl: 'layout/singlePostPage.html', controller: PostController })
		.otherwise({ redirectTo: '/' })
})

angular.module('noddity').factory('butler', function() {
	var levelup = require('levelup')
	var leveljs = require('level-js')
	return new Butler('http://localhost.com/joshduff.com/content/', levelup('content', { db: leveljs }))
})

angular.module('noddity').factory('posts', function(butler) {
	var converter = new Markdown.Converter()
	var watchers = {}
	var state = {}

	function storePostOnScope(post) {
		post.html = converter.makeHtml(post.content)
		state[post.filename] = post
		emitPost(post.filename)
	}

	butler.on('post changed', function(key, newValue, oldValue) {
		storePostOnScope(newValue)
	})

	function emitPost(name) {
		if (watchers[name]) {
			watchers[name].forEach(function(cb) {
				cb(state[name])
			})
		}
	}

	state.getPost = function getPost(name) {
		butler.getPost(name, function(err, post) {
			if (!err) {
				storePostOnScope(post)
			}
		})
	}

	state.watch = function watch(name, cb) {
		watchers[name] = watchers[name] || []
		watchers[name].push(cb)
	}

	return state
})

angular.module('noddity').directive('postList', function(butler) {
	return {
		template: '<div ng-show="postList">'
				+ '<h3>Posts</h3>'
				+ '<ol>'
					+ '<li ng-repeat="post in postList"><a href="#/post/{{post.filename}}">{{post.metadata.title}}</a></li>'
				+ '</ol>'
			+ '</div>',
		replace: true,
		restrict: 'E',
		link: function(scope, element, attrs, ctrl) {
			butler.getPosts(function(err, posts) {
				if (!err) {
					scope.postList = posts.reverse()
					scope.$apply()
				}
			})
		}
	}
})

angular.module('noddity').directive('post', function(posts) {
	return {
		template: '<div ng-show="post.html">'
					+ '<h1>{{post.metadata.title}}</h1>'
					+ '<div class="post-content" ng-bind-html-unsafe="post.html">'
					+ '</div>'
				+ '</div>',
		replace: true,
		restrict: 'E',
		scope: {
			source: '@source'
		},
		link: function(scope, element, attrs, ctrl) {
			scope.post = {}
			//var refresh = posts.getPost.bind(posts, scope.source)
			function refresh() {
				posts.watch(scope.source, function(post) {
					if (post.filename === scope.source) {
						scope.post.metadata = post.metadata
						scope.post.html = post.html
						scope.$apply()
					}
				})
				posts.getPost(scope.source)
			}

			if (attrs.source) {
				refresh()
			}

			scope.$watch('source', refresh)
		}
	}
})
