var path = require('path');
var fs = require("fs");

exports.getCache = function(directory, encoding, expiration)
{
	encoding = encoding || "binary";
	expiration = expiration || false;
	var storage = {}
	
	var updateFileExistence = function(file_name)
	{
		if (!file_name)
			return;

		var full_path = path.join(process.cwd(), directory, file_name);

		path.exists(full_path, function(exists)
		{
			if (exists)
			{
				storage[file_name] = {};
				storage[file_name].loading = false;

				if (expiration === false)
					loadFile(file_name);
			}
			else
			{
				//console.log(full_path + " does not exist");
				delete storage[file_name];
			}
		});
	}
	
	var resetExpirationCounter = function(file_name)
	{
		if (storage[file_name])
		{
			if (storage[file_name].timeout_id)
			{
				clearTimeout(storage[file_name].timeout_id);
				delete storage[file_name].timeout_id;
			}
			
			if (expiration > 0)
			{
				//console.log("Expiring " + file_name + " in " + (expiration * 1000));
				storage[file_name].timeout_id = setTimeout(function()
				{
					//console.log(file_name + " expired");
					if (storage[file_name] && storage[file_name].data)
					{
						delete storage[file_name].data;
						delete storage[file_name].timeout_id;
					}
				}, expiration * 1000);
			}
		}
	}
	
	var loadFile = function(file_name, callback)
	{
		if (!file_name)
			return;
			
		callback = callback || function(data) {};

		if (storage[file_name] && storage[file_name].loading)
		{
			storage[file_name].callbacks.push(callback);
			return;
		}

		var full_path = path.join(process.cwd(), directory, file_name);
		storage[file_name] = {};
		storage[file_name].loading = true;
		storage[file_name].callbacks = [callback];
		
		//console.log("Attempting to read file " + file_name);

		fs.readFile(full_path, encoding, function(err, data)
		{
			if (!err)
			{
				if (expiration === false || expiration > 0)
				{
					//console.log("Caching " + file_name);
					storage[file_name].data = data;
					if (expiration > 0)
						resetExpirationCounter(file_name);
				}
			}
			else
			{
				data = false;
				//console.log("Unable to read " + full_path + " I guess");
			}

			storage[file_name].loading = false;
			var next_callback;
			while (next_callback = storage[file_name].callbacks.shift())
			{
				//console.log("Calling a callback on load of " + file_name);
				next_callback(data);
			}
		});

	}

	fs.readdir(path.join(process.cwd(), directory), function(err, files)
	{
		if (!err)
		{
			for (i in files)
			{
				updateFileExistence(files[i]);
			}
		}
	});

	fs.watch(directory, { persistant: false }, function(event, file_name)
	{
		updateFileExistence(file_name);
	});

	return {
		getFile: function(file_name, callback)
		{
			if (!storage[file_name])
				callback(false);
			else if (storage[file_name].data)
			{
				callback(storage[file_name].data);
				resetExpirationCounter(file_name);
			}
			else
				loadFile(file_name, callback);
		},
		getCurrentCache: function()
		{
			return storage;
		}
	}
}