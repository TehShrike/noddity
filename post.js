var path = require('path');
var config = require('./config.js');
var cache = require('./cache.js').getCache('post', 'utf8', false);

var parsePage = function(original_text)
{
	var lines = original_text.split("\n");
	var done_reading_metadata = false;
	var done_reading_whitespace = false;
	var post = { text: "", metadata: {} };

	for (var i = 0; i < lines.length && !done_reading_whitespace; i++)
	{
		//console.log("Checking out " + lines[i]);
		if (!done_reading_metadata)
		{
			var metadata = /^([^:]+):\s*([^\n]+)*$/.exec(lines[i]);
			if (metadata && metadata.length === 3)
				post.metadata[metadata[1]] = metadata[2];
			else
				done_reading_metadata = true;
		}
		else if (!done_reading_whitespace)
		{
			done_reading_whitespace = !/^\s*$/.test(lines[i]);
		}
	}

	post.text = lines.slice(i - 1).join("\n");
	
	return post;
}

exports.provideInitialPageContent = function(noddity_url, callback)
{
	if (noddity_url.slug)
	{
		cache.getFile(noddity_url.slug + config.post.file_suffix, function(page_text)
		{
			callback(page_text === false ? false : parsePage(page_text));
		});
	}
	else
		callback(false);
}

exports.provideReplaceable = function(page, parameter, callback)
{
	var matches;
	
	if (matches = /^last([0-9]+$)/.exec(parameter))
	{
		var posts_to_display = matches[1];
		
		callback("Eventually, a list of " + posts_to_display + " links to posts will show up here.");
	}
	else if (matches = /^metadata:(.+)$/.exec(parameter))
	{
		metadata_element = matches[1];
		
		callback(page.metadata[metadata_element] || "Metadata element " + metadata_element + " not found!");
	}
	else
		callback("Post extension doesn't know what to say about that!");
}