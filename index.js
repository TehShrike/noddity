var http = require('http');
var events = require('events');

var config = require('./config.js');
var extension = require('./extension.js');

var Converter = require("./Markdown.Converter").Converter;
var converter = new Converter();

extension.loadExtensions(config.extensions);

var parseURL = function(url)
{
	var noddity_url = {};
	
	if (url.pathname)
	{
		//console.log("Received pathname " + url.pathname);
		var path_parts = url.pathname.split('/');
		
		if (path_parts.length > 1)
		{
			noddity_url.extension = path_parts[1];
			//console.log("Set extension to " + noddity_url.extension);
		}
		
		if (path_parts.length > 2)
		{
			noddity_url.slug = path_parts[2];
			noddity_url.path = path_parts.splice(2).join('/');
			//console.log("Set path to " + noddity_url.path);
		}
	}
	if (url.search)
		noddity_url.search = url.search;

	return noddity_url;
}

var send404 = function(response)
{
	response.writeHeader(404, {"Content-Type": "text/plain"});
	response.write("404 Not Found\n");
	response.end();
}

var callOnEveryExtension = function(function_name, page, text_to_be_changed, callback)
{
	var extensions_to_try = [];
	for (var ext_name in extension.loaded_extensions)
	{
		extensions_to_try.push(ext_name);
	}
	
	var callOnNextExtension = function(extension_names)
	{
		if (extension_names.length)
		{
			var next_extension_name = extension_names.shift();
			var target_function = function() {}
			
			if (target_function = extension.loaded_extensions[next_extension_name][function_name])
			{
				target_function(page, text_to_be_changed, function(changed_text)
				{
					text_to_be_changed = changed_text;
					callOnNextExtension(extension_names);
				});
			}
			else
				callOnNextExtension(extension_names);
		}
		else
			callback(text_to_be_changed);
	}
	
	callOnNextExtension(extensions_to_try);
}

var executeReplaceables = function(text, page, callback)
{
	// {?extension name:other stuff}
	var replaceable = text.match(/\{\?([^:\}]+):([^\}]*)\}/);
	
	if (replaceable)
	{
		var extension_name = replaceable[1];
		//console.log("Found replaceable for extension " + extension_name);
		
		if (extension.loaded_extensions[extension_name]
			&& extension.loaded_extensions[extension_name].provideReplaceable)
		{
			var replacorCallback = function(replacement_text)
			{
				text = text.replace(replaceable[0], replacement_text);
				executeReplaceables(text, page, callback);
			}
			
			//console.log("Calling replaceable with parameter " + replaceable[2] + "...");
			
			extension.loaded_extensions[extension_name].provideReplaceable(page, replaceable[2], replacorCallback);
		}
		else
			callback(text);
	}
	else
		callback(text);
}

/////////////////////////////// the following functions generally describe the process from ///////////////////////////////
////////////////////////////////////////// the beginning of a request to its end //////////////////////////////////////////

var httpRequestListener = function(request, response)
{
	var noddity_url = parseURL(require('url').parse(request.url));
	
	if (!noddity_url.extension)
	{
		noddity_url.extension = "post";
		noddity_url.slug = "index";
	}
	
	if (noddity_url.extension && extension.loaded_extensions[noddity_url.extension])
	{
		if (extension.loaded_extensions[noddity_url.extension].handleRequest)
		{
			extension.loaded_extensions[noddity_url.extension].handleRequest(noddity_url, response, function() { send404() } );
		}
		else if (extension.loaded_extensions[noddity_url.extension].provideInitialPageContent)
		{
			extension.loaded_extensions[noddity_url.extension].provideInitialPageContent(noddity_url, 
				function(content) { return content !== false ? handlePageContent(noddity_url, response, content) : send404(response); });
		}
		else
			send404(response);
	}
	else
		send404(response);
}

var handlePageContent = function(noddity_url, response, content)
{
	var page = {
		url: noddity_url,
		metadata: content.metadata,
		content: content.text
	}
	
	extension.loaded_extensions['html'].provideBaseOutput(page, function(initial_output)
	{
		page.output = initial_output;
		executeReplaceables(page.output, page, function(replaced_output)
		{
			page.output = replaced_output;
			executeReplaceables(page.content, page, function(replaced_content)
			{
				page.content = replaced_content;
				page.content_html = converter.makeHtml(replaced_content);
				finishPage(page, response);
			});
		});
	});
}

var finishPage = function(page, response)
{
	page.final_output = page.output.replace('{?content}', page.content);
	page.final_output = page.final_output.replace('{?content_html}', page.content_html);

	callOnEveryExtension('fiddleWithFinalOutput', page, page.final_output, function(fiddled_final_output)
	{
		page.final_output = fiddled_final_output;
		
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.write(page.final_output);
		response.end();
	});
}

http.createServer(httpRequestListener).listen(80);