var rgxPostDivId = /noddity_post_(.+)_[\da-z]{12}4[\da-z]{19}/

function UUIDv4() {
	return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
		return v.toString(16)
	})
}

function generateId(postName) {
	return 'noddity_post_' + postName + '_' + UUIDv4()
}

function getPostName(id) {
	var result = rgxPostDivId.exec(id)
	if (result !== null) {
		return result[1]
	}
}

function isAPostDiv(id) {
	return rgxPostDivId.test(id)
}

function generatePostDiv(postId) {
	return '<span class="noddity-template" id="' + postId + '"></span>'
}

module.exports = {
	generateId: generateId,
	getPostName: getPostName,
	generatePostDiv: generatePostDiv,
	isAPostDiv: isAPostDiv
}
