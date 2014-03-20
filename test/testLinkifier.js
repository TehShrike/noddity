var Linkify = require('../js/linkifier.js')
var test = require('tap').test

test('replaces a title-less link with an <a> element', function(t) {
	var input = "<p>wassup my home [[target]]</p>"

	var linkify = new Linkify('#/wat/')

	var output = linkify(input)

	t.equal(output, '<p>wassup my home <a href="#/wat/target">target</a></p>', 'equal to the string that I said it should be')
	t.end()
})

test('turns a link with a title into an <a> element', function(t) {
	var input = "<p>wassup my home [[target|teh page]]</p>"

	var linkify = new Linkify('#/wat/')

	var output = linkify(input)

	t.equal(output, '<p>wassup my home <a href="#/wat/target">teh page</a></p>', 'equal to the string that I said it should be')
	t.end()
})

test('turns a link with a title into an <a> element', function(t) {
	var input = "<p>wassup my home [[my-target.butts|teh page]]</p>"

	var linkify = new Linkify('#/wat/')

	var output = linkify(input)

	t.equal(output, '<p>wassup my home <a href="#/wat/my-target.butts">teh page</a></p>', 'equal to the string that I said it should be')
	t.end()
})

test("Doesn't convert items inside code elements", function(t) {
	var input = "<p><code>wassup my home [[target|teh page]]</code></p>"

	var linkify = new Linkify('#/wat/')

	var output = linkify(input)

	t.equal(output, input, 'equal to the string that I said it should be')
	t.end()
})

test("Converts links following code elements", function(t) {
	var input = "<p><code>wassup</code> my home [[target|teh page]]</p>"

	var linkify = new Linkify('#/wut/')

	var output = linkify(input)

	t.equal(output, '<p><code>wassup</code> my home <a href="#/wut/target">teh page</a></p>', 'equal to the string that I said it should be')
	t.end()
})

test("Converts links following code elements and newlines", function(t) {
	var input = "<p><code>wassup</code>\n\nmy home [[target|teh page]]</p>"

	var linkify = new Linkify('#/wut/')

	var output = linkify(input)

	t.equal(output, '<p><code>wassup</code>\n\nmy home <a href="#/wut/target">teh page</a></p>', 'equal to the string that I said it should be')
	t.end()
})

test("Testing this one string that isn't working for some reason", function(t) {
	var input = "<p>In addition, the client is also turning <code>[[some-page-you-want-to-link-to.md|wiki-style internal links]]</code> into [[some-page-you-want-to-link-to.md|wiki-style internal links]].</p>"
	var linkify = new Linkify('#/wut/')

	var output = linkify(input)

	t.equal(output, '<p>In addition, the client is also turning <code>[[some-page-you-want-to-link-to.md|wiki-style internal links]]</code> into <a href="#/wut/some-page-you-want-to-link-to.md">wiki-style internal links</a>.</p>', 'equal to the string that I said it should be')
	t.end()
})
