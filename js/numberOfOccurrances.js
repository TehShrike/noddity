module.exports = function numberOfOccurrances(str, input) {
	var occurrances = 0
	var current = input.indexOf(str)
	while (current !== -1) {
		occurrances++
		current = input.indexOf(str, current + 1)
	}
	return occurrances
}
