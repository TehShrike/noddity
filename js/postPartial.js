var Ractive = require('ractive')

module.exports = Ractive.parse('<div>'
	+ '{{#metadata.title}}'
		+ '<h1>{{metadata.title}}</h1>'
	+ '{{/metadata.title}}'
	+ '<div class="post-content">'
		+ '{{{html}}}'
	+ '</div>'
+'</div>')
