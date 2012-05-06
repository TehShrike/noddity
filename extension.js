exports.loaded_extensions = {};

exports.loadExtensions = function(extensions_to_load)
{
	for (var extension_name in extensions_to_load)
	{
		exports.loaded_extensions[extension_name] = require(extensions_to_load[extension_name]);
		
		for (var extension in exports.loaded_extensions[extension_name])
		{
			if (extension.load)
				extension.load();
		}
	}
}