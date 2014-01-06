angular.module('noddity', [])

var Butler = require('noddity-butler')

function PostController($scope, $routeParams, superScoper) {
	$scope.source = $routeParams.postSource
	superScoper($scope)
}

function IndexController($scope, superScoper) {
	$scope.source = 'home.md'
	superScoper($scope)
}

angular.module('noddity').config(function($routeProvider) {
	$routeProvider
		.when('/', { templateUrl: 'layout/post.html', controller: IndexController })
		.when('/post/:postSource', { templateUrl: 'layout/post.html', controller: PostController })
		.otherwise({ redirectTo: '/' })
})

angular.module('noddity').factory('butler', function() {
	var levelup = require('levelup')
	var leveljs = require('level-js')
	return new Butler('http://localhost.com/joshduff.com/content/', levelup('content', { db: leveljs }))
})

angular.module('noddity').factory('superScoper', function(butler) {
	var converter = new Markdown.Converter()

	return function superScoper(scope) {
		if (typeof scope.$root.updatePost === 'undefined') {
			scope = scope.$root

			butler.getPosts(function(err, list) {
				if (!err) {
					scope.postList = list
				}
			})

			function storePostOnScope(post) {
				scope[post.filename] = post
				scope[post.filename].html = converter.makeHtml(post.content)
			}

			scope.updatePost = function updatePost(key) {
				butler.getPost(key, function(err, post) {
					storePostOnScope(post)
				})
			}

			butler.on('post changed', function(key, newValue, oldValue) {
				storePostOnScope(newValue)
			})
		}
	}
})

// angular.module('noddity').directive('postList', function(butler) {
// 	return {
// 		template: '<div ng-show="postList">'
// 				+ '<h3>Posts</h3>'
// 				+ '<ol>'
// 					+ '<li ng-repeat="post in postList"><a href="#/post/{{post.source}}">{{post.metadata.title}}</a></li>'
// 				+ '</ol>'
// 			+ '</div>',
// 		replace: true,
// 		restrict: 'E'
// 	}
// })

angular.module('noddity').directive('post', function(butler, superScoper) {
	return {
		template: '<div ng-show="$root[source]">'
					+ '<h1>{{$root[source].metadata.title}}</h1>'
					+ '<div class="post-content" ng-bind-html-unsafe="$root[source].html">'
					+ '</div>'
				+ '</div>',
		replace: true,
		restrict: 'E',
		scope: {
			source: '@source'
		},
		link: function(scope, element, attrs, ctrl) {

			function refresh() {
				scope.$root.updatePost(scope.source)
			}

			if (attrs.source) {
				refresh()
			}

			scope.$watch('source', refresh)
		}
	}
})
