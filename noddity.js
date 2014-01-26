
var model = {
	current: 'whatever',
	posts: {
		whatever: {
			metadata: {
				title: 'sup dawg'
			},
			html: 'I heard you like posts'
		},
		huh: {
			metadata: {
				title: 'FIZZLE'
			},
			html: 'FO SHIZZLE'
		}
	}
}

window.ractive = new Ractive({
	el: 'body',
	template: '#main',
	data: model
})
