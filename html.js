var cache = require('./cache.js').getCache('html', 'utf8', false);
var config = require('./config.js');

// Tries to find a filename that matches: html_file specified in content metadata, extension name, slug name, index
exports.provideBaseOutput = function(page, callback)
{
	var suffix = config.html.file_suffix;
	
	cache.getFile(page.metadata.html_file + suffix, function(output)
	{
		if (output !== false)
			callback(output);
		else
			cache.getFile(page.url.extension + suffix, function(output)
			{
				if (output !== false)
					callback(output);
				else
					cache.getFile(page.url.slug + suffix, function(output)
					{
						if (output !== false)
							callback(output)
						else
							cache.getFile('index' + suffix, function(output)
							{
								callback(output || "No HTML file found");
							});
					});
			});
	});
}

exports.provideReplaceable = function(page, parameter, callback)
{
	cache.getFile(parameter + config.html.file_suffix, function(output)
	{
		callback(output || "");
	});
}