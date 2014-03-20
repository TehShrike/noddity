var numberOfOccurrances = require('./numberOfOccurrances.js')

module.exports = function Linkifier(rootPath) {
	return function linkify(htmlString) {
		return htmlString.replace(/\[\[([\w.-]+)(?:\|([^\]>\n]+))?\]\]/gm, function(found, page, linkText, offset, wholeString) {
			var numberOfPrecedingCodeOpeners = numberOfOccurrances('<code', wholeString.substr(0, offset))
			var numberOfPrecedingCodeClosers = numberOfOccurrances('</code', wholeString.substr(0, offset))

			if (numberOfPrecedingCodeOpeners !== numberOfPrecedingCodeClosers) {
				return found
			} else {
				linkText = linkText || page
				return '<a href="' + rootPath + page + '">' + linkText + '</a>'
			}
		})
	}
}
