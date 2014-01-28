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
	}).change(function(params, old) {
		window.scrollTo(0,0)
	}).otherwise('/').go()
}
