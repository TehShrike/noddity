title: The Noddity back end: how posts and stuff work
date: Fri Jan 31 2014 00:00:00 GMT+0000 (UTC)

Use this one strange tip to enlarge your internet blog!  I mean, uh, this page will tell you how to get those [markdown](http://daringfireball.net/projects/markdown/) files so that they start showing up to Noddity consumers.

Wait, what's a Noddity consumer?
===========

The format of a Noddity server is really simple - it's just a path accessible by HTTP GET that contains

1. Any number of markdown files containing metadata and content
2. An index.json file that contains an array of strings referencing any number of those files' names

That's obviously a pretty simple API to access programatically.  Not so simple, though, that I didn't [wrap it up in the noddity-retrieval module](https://github.com/TehShrike/noddity-retrieval).

A Noddity consumer would be anything that access the raw blog data in this method.  Right now, that's just this blog framework thingy, and the RSS server I made.  But you could make any other kind of content-front-end that you wanted to - all you need to know is the root path of the content.

Is there anything special about the JSON file?
===========

Nope, it's just your everyday array of strings.  So you might see a file at `http://belligerentgophers.com/content/index.json` containing

	["gophers-gone-wild.md",
		"feral-prairie-dogs.md",
		"what-this-marmoset-squeaks-may-surprise-you.md"]

...and you could expect to find all of those files at that same path, i.e. `http://belligerentgophers.com/content/feral-prairie-dogs.md`

There could be other files in that directory too - including files driving real content on the site.  Being in the JSON file just means that they'll show up in the timeline of "posts" made on the site, and are immediately discoverable to and cacheable by any consumer.  If there are files that aren't referenced in the JSON file, the consumer won't know about them unless, say, they're referenced in a template or link in another file.

Is there anything special about the markdown file?
===========

Yeah, actually!  I added the ability to store metadata in the file.  The parsing out of the metadata is done by [the text-metadata-parser module](https://github.com/TehShrike/text-metadata-parser).  You put key-value pairs at the top of the file, and they get parsed out, like so:

	title: Gopher Doctors hope you won't learn this one weird secret
	date: Wed Mar 19 2014 21:52:41

	Click [here](http://shady-site.com/viruses) for cheap gopher penis pills!

"title" and "date" are the only values that Noddity specifically looks for at the moment.  Dates are parsed via [the Date() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Syntax), and are used to order the list of posts on the left side of the client (as well as the RSS feed).

You can put any other metadata there, though - tags, categories, author - anything metadata that you don't want to lose from your posts when you migrate over from another system (maybe bringing them from Wordpress with a [module like noddity-wordpress-export](https://github.com/saibotsivad/noddity-wordpress-export)), or just anything that you might want to use to search/filter them in the future.

I'm using [Remarkable](https://jonschlinkert.github.io/remarkable/demo/) to parse markdown at the moment.  In addition, the client is also turning `[[some-page-you-want-to-link-to.md|wiki-style internal links]]` into [[some-page-you-want-to-link-to.md|wiki-style internal links]].
Read more details under [[post-documentation.md|post documentation]].

Templates
---------

Templates are a really powerful feature of MediaWiki, and I wanted something like it.

The way it works is that you can make any regular post file, like any of the others as described above, and you can embed it in any other page.

Right now, the syntax looks like this: `::post-to-embed.md::`

Like MediaWiki templates, you can also pass parameters in to the post when you're including them.  They follow the [MediaWiki template rules for parameters](https://www.mediawiki.org/wiki/Help:Templates#Parameters): you separate parameters using bars, and naming them is optional.  If you don't name your templates, you can only reference them using the parameter number (the unnamed value "BUTTS" in `::some-file.md|thing=definitely|BUTTS::` would be refered to as `1` since it was the first unnamed parameter).

Inside the templates, though, you don't reference the arguments in the same way as you do in MediaWiki - any template content is actually parsed by [Ractive.js](http://www.ractivejs.org/), so in your templates you can make use of the [mustache syntax](http://docs.ractivejs.org/latest/mustaches).  Named and unnamed arguments are all right there at the top level of the keypath, so you could reference the above arguments from inside some-file.md using `{{thing}}` and `{{1}}`.

For a live example, check out this brilliantly-named "month" template: `::month|1::` turns into "::month|1::" and `::month|8::` turns into "::month|8::"!

	title: Month name
	markdown: false

	{{ ['January','February','March','April','May','June','July','August','September','October','November','December'][this.1 - 1] }}


For that particular example, I added `markdown: false` to the metadata at the top of the file.  Doing this prevents the template from being parsed as markdown, which among other things, means that the content won't be wrapped in a `<p>` tag.

I know the colon-based syntax is kind of weird.  I'm open to suggestions, but it's hard to find some syntax that doesn't collide with either the mustache syntax, markdown, or html.

::contents.md::
