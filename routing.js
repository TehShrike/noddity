module.exports = function(ractive, onChange) {
	return Satnav({}).navigate({
		path: 'post/{name}',
		directions: function(params) {
			ractive.set('current', params.name)
		}
	}).navigate({
		path: '/',
		directions: function(params) {
			ractive.set('current', 'home.md')
		}
	}).otherwise('/').go()
}
