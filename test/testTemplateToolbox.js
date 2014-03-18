var test = require('tap').test
var template = require('../js/templateToolbox.js')

test('Generates an id that parses back to the same name', function(t) {

	test('my-file-name.md', function(t) {
		var postName = 'my-file-name.md'
		var id = template.generateId(postName)
		t.equal(template.getPostName(id), postName, 'Matches the one that was used to generate the id')
		t.end()
	})

	test('my CRAZY file 13', function(t) {
		var postName = 'my CRAZY file 13'
		var id = template.generateId(postName)
		t.equal(template.getPostName(id), postName, 'Matches the one that was used to generate the id')
		t.end()
	})

	t.end()
})

