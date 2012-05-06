var path = require('path');

exports.handleRequest = function(noddity_url, response, send404)
{
	if (noddity_url.path)
	{
		var local_path = path.join(process.cwd(), "file", path.normalize(noddity_url.path));
		
		path.exists(local_path, function(exists)
		{
			if (exists)
			{
				require("fs").readFile(local_path, "binary", function(err, file)
				{
					if(err)
					{
						response.writeHeader(500, {"Content-Type": "text/plain"});
						response.write(err + "\n");
						response.end();
					}
					else
					{
						response.writeHeader(200);
						response.write(file, "binary");
						response.end();
					}
				});
			}
			else
			{
				console.log(local_path + " does not exist, sending 404");
				send404(response);
			}
		});
	}
	else
	{
		console.log("No noddity_url.path, sending 404");
		send404(response);
	}
}