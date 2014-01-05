var TEXT_METADATA_PARSER = {
	make_value: {
		boolean: function(value) {
			return value.toString().toLowerCase() !== 'false'
				&& !(/^\d+$/.test(value)
				&& parseInt(value) !== 0);
		},
		number: function(value) {
			return parseFloat(value);
		},
		string: function(value) {
			return value.toString();
		},
		date: function(value) {
			return new Date(value);
		}
	},

	parseString: function(text) {
		var lines = text.split("\n");
		var done_reading_metadata = false;
		var done_reading_whitespace = false;
		var parsed_object = { content: "", metadata: {} };

		for (var i = 0; i < lines.length && !done_reading_whitespace; i++) {
			if (!done_reading_metadata) {
				var found_metadata = /^([^:]+):\s*([^\r\n]+)\s*$/.exec(lines[i]);
				if (found_metadata && found_metadata.length === 3) {
					var property = found_metadata[1];
					parsed_object.metadata[property] = found_metadata[2];
				} else if (i === 0) {
					return { content: text, metadata: {} }
				} else{
					done_reading_metadata = true;
				}
			} else if (!done_reading_whitespace) {
				done_reading_whitespace = !/^\s*$/.test(lines[i]);
			}
		}

		parsed_object.content = lines.slice(i - 1).join("\n");

		return parsed_object;
	},

	mapProperties: function(object, properties, iterator) {
		if (Array.isArray(properties)) {
			properties.forEach(function(property) {
				if (typeof object[property] !== 'undefined') {
					object[property] = iterator(object[property]);
				}
			});
			return object;
		} else {
			return TEXT_METADATA_PARSER.mapProperties(object, [properties.toString()], iterator);
		}
	},

	mapDefaults: function(object, defaults) {
		for (property in defaults) {
			if (typeof object[property] === 'undefined') {
				object[property] = defaults[property];
			}
		}
	},

	parse: function(text, options) {
		options = options || {}
		var parsed = TEXT_METADATA_PARSER.parseString(text);

		TEXT_METADATA_PARSER.mapDefaults(parsed.metadata, options.default || {});

		TEXT_METADATA_PARSER.mapProperties(
			parsed.metadata, options.boolean || [], TEXT_METADATA_PARSER.make_value.boolean);
		TEXT_METADATA_PARSER.mapProperties(
			parsed.metadata, options.number || [], TEXT_METADATA_PARSER.make_value.number);
		TEXT_METADATA_PARSER.mapProperties(
			parsed.metadata, options.string || [], TEXT_METADATA_PARSER.make_value.string);
		TEXT_METADATA_PARSER.mapProperties(
			parsed.metadata, options.date || [], TEXT_METADATA_PARSER.make_value.date);

		return parsed;
	}
}

if (typeof module !== 'undefined'
	&& typeof module.exports !== 'undefined') {
	module.exports = TEXT_METADATA_PARSER.parse;
}
