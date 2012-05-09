var path = require('path');
var fs = require("fs");
var config = require('./config.js');
//var cache = require('./cache.js').getCache('post', 'utf8', false);

var post_directory = path.join(process.cwd(), 'post');

///////////////// Managing the files in the post directory! /////////////////

// post_cache[file_name] = post
var post_cache = {}
// post_metadata[key] = array of post file names ordered by post.key
var post_metadata = {}

var removePostFromCache = function(file_name)
{
	console.log("Removing " + file_name + " from cache");
	if (post_cache[file_name])
	{
		var post = post_cache[file_name];

		for (property in post.metadata)
		{
			var value = post.metadata[property];

			if (post_metadata[value].length <= 1)
				delete post_metadata[value];
			else
			{
				for (var i = 0; i < post_metadata[value].length; ++i)
				{
					if (post_metadata[value][i].slug === post.slug)
					{
						post_metadata[value].splice(i, 1);
						break;
					}
				}
			}
		}
		delete post_cache[file_name];
	}
}

var addPostToCache = function(file_name, post)
{
	console.log("Adding " + file_name + " to cache");
	if (post_cache[file_name])
		removePostFromCache(file_name);
		
	post_cache[file_name] = post;

	for (property in post.metadata)
	{
		var value = post.metadata[property];
		
		if (!post_metadata[property])
			post_metadata[property] = [];
		
		post_metadata[property].push(file_name);
		
		post_metadata[property].sort(function(a, b)
		{
			if (post_cache[a][property] === post_cache[b][property]) 
				return 0;
			
			return (post_cache[a][property] < post_cache[b][property]) ? -1 : 1;
		});
	}
}

///////////////// Giving the rest of the extension access to the post data! /////////////////

var fetchPosts = function(metadata_to_match, value_to_order_by, start_at, count)
{
	var posts = [];
	var found = 0;
	var unfiltered_posts;
	var current_post;
	start_at = start_at || 0;
	count = count || 0;
	
	if (unfiltered_posts = post_metadata[value_to_order_by])
	{
		for (var i = start_at; i < unfiltered_posts.length && (count === 0 || found < count); ++i)
		{
			if (current_post = post_cache[unfiltered_posts[i]])
			{
				var metadata_matches = true;
				for (property in metadata_to_match)
				{
					if (!current_post[property] || current_post[property] !== metadata_to_match[property])
					{
						metadata_matches = false;
						break;
					}
				}
				if (metadata_matches)
				{
					found++;
					posts.push(current_post);
				}
			}
		}
	}
	return posts;
}

///////////////// Building the post object! /////////////////

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
			var metadata = /^([^:]+):\s*([^\n]+)$/.exec(lines[i]);
			if (metadata && metadata.length === 3)
			{
				var property = metadata[1];
				
				switch(property)
				{
					case 'date':
						post.metadata[property] = new Date(metadata[2]);
						break;
					default:
						post.metadata[property] = metadata[2];
				}
			}
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

///////////////// Interaction with the file system! /////////////////

var loadPostFromFile = function(file_name)
{
	console.log("Checking out " + file_name);
	var file_is_post = new RegExp("^(.+)" + config.post.file_suffix + "$");
	var matches;
	if (matches = file_is_post.exec(file_name))
	{
		var slug = matches[1];
		console.log("Slug is " + slug);
		
		path.exists(path.join(post_directory, file_name), function(exists)
		{
			if (!exists)
				removePostFromCache(file_name);
			else
			{
				console.log(file_name + " exists");
				fs.readFile(path.join(post_directory, file_name), config.post.encoding, function(err, original_text)
				{
					if (err)
						removePostFromCache(file_name);
					else
					{
						var post = parsePage(original_text)
						post.slug = slug;
						addPostToCache(file_name, post);
					}
				});
			}
		});
	}
	else 
		console.log("Not a post");
}

fs.readdir(post_directory, function(err, files)
{
	if (!err)
	{
		for (i in files)
		{
			loadPostFromFile(files[i]);
		}
	}
});

fs.watch(post_directory, { persistant: false }, function(event, file_name)
{
	loadPostFromFile(file_name);
});

///////////////// The interface provided to the rest of the framework! /////////////////

exports.provideInitialPageContent = function(noddity_url, callback)
{
	if (noddity_url.slug)
		callback(post_cache[noddity_url.slug + config.post.file_suffix] || false);
	else
		callback(false);
}

exports.provideReplaceable = function(page, parameter, callback)
{
	var matches;
	
	if (matches = /^last([0-9]+$)/.exec(parameter))
	{
		var posts_to_display = matches[1];
		
		var posts = fetchPosts({}, 'date', 0, posts_to_display);
		
		for (var i in posts)
		{
			var title = posts[i].metadata.title || '[Untitled]';
		}
		
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