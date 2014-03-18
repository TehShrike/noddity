var Ractive = require('ractive')
var toolbox = require('./templateToolbox.js')
var postPartial = require('./postPartial.js')
var Converter = require('pagedown').Converter

var converter = new Converter()

module.exports = function Template(butler, linkify) {
	var children = {}
	var templateData = {}

	function createTemplateElements(ractive) {
		ractive.findAll('.noddity-template').forEach(function(element) {
			var postId = element.id
			createRactivePost(element, postId)
		})
	}

	function teardownChildren() {
		Object.keys(children).map(function(id) {
			return children[id]
		}).forEach(function(ractive) {
			ractive.teardown()
		})
		children = {}
		templateData = {}
	}

	function getTemplateDataObject(pieces) {
		var dataz = {}
		var unnamedParameters = 0

		pieces.forEach(function(piece) {
			var keyAndValue = piece.split('=')
			var key, value

			if (keyAndValue.length > 1) {
				key = keyAndValue[0]
				value = keyAndValue[1]
			} else {
				unnamedParameters++
				key = unnamedParameters
				value = keyAndValue[0]
			}

			dataz[key] = value
		})
		return dataz
	}

	function processMarkdown(markdownText) {
		return markdownText.replace(/<<([^>]+)>>/gm, function(match, templateText) {
			var pieces = templateText.split('|')
			var postName = pieces.shift(0)
			var postId = toolbox.generateId(postName)

			templateData[postId] = getTemplateDataObject(pieces)

			return toolbox.generatePostDiv(postId)
		})
	}

	function createRactivePost(element, postId) {
		var postName = toolbox.getPostName(postId)

		butler.getPost(postName, function(err, post) {
			if (err) {
				doSomethingAboutThisError(err)
			} else if (typeof templateData[postId] !== 'undefined') {
				var templateManager = new Template(butler, linkify)
				var html = linkify(converter.makeHtml(templateManager.processMarkdown(post.content)))

				var ractive = new Ractive({
					el: element,
					template: html,
					data: templateData[postId]
				})

				children[postId] = ractive
				templateManager.createTemplateElements(ractive)
				ractive.on('teardown', function onTeardown() {
					templateManager.teardownChildren()
				})
			}
		})
	}


	return {
		createTemplateElements: createTemplateElements,
		teardownChildren: teardownChildren,
		processMarkdown: processMarkdown
	}
}
