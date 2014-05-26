title: Welcome to Noddity, the awesome cms-thing!

I wrote Noddity to replace the unnecessarily-heavy backend-centric framework that was running my personal blog-site.

Its purpose is to give me (and anyone else inclined to use it) an easy way to publish markdown-based content to a minimalist blog or wiki-type site.

Distinctives
========

1. All the CMS magic is client-side - no server-side interpreter necessary, can deploy on vanilla Apache/Nginx/whatever
2. No build step when you add or change content - the backend is a [[noddity-backend.md|directory full of markdown files]]
3. Absurdly fast response time after initial pageload - the goal is to have all content cached locally so that displaying new pages is not waiting on any HTTP requests

Features
========

Those were my primary goals while writing this thing, but some of my other priorities soaked through too:

- "Edit" button on every page so that people can fix my spelling mistakes for me (via pull requests on Github!)
- [MediaWiki-style internal links](https://www.mediawiki.org/wiki/Help:Links#Internal_links)
- [MediaWiki-style templates](https://www.mediawiki.org/wiki/Help:Templates), with parameters

Downsides
-------

The obvious downsides are a side effect of serving up markdown from the server and using a single-page app to render the on the client-side.  Without server-side code, you don't get an RSS feed or an easily-spiderable site for the search engine bots.

I wrote some seperate [[services.md|services]] to solve those issues.  They are designed to run as third-party webapps, running on their own servers.  You can deploy as many Noddity sites to static http file servers as you want without having to deploy any more of the rss/seo-friendly servers.

Indeed, I mean for my hosted versions to be publicly accessible for anyone running a Noddity site to share, so that they don't have to worry about hosting them.  I may have to work something else out if it starts to get crazy expensive, but that doesn't seem to be an immediate threat.

In the worst case, you can always deploy your own versions - the code is on Github and is easily deployable with [ploy](https://github.com/substack/ploy).  [[services.md|Check out the services page]] for more details.

Other options for search-engine spiderability
---------

There are other options to serve up static content for the search engine bots - my searches tearned up [BromBone](http://www.brombone.com/) and [seo4ajax](http://www.seo4ajax.com).

If most of your traffic comes from Google, it may not even matter - they recently announced that their spiders will be [executing JavaScript](http://googlewebmastercentral.blogspot.co.uk/2014/05/understanding-web-pages-better.html).

Who is it for?
=========

Well, it's for me, obviously.  I'm planning on using it for all my personal sites where I would have previously used Wordpress or MediaWiki.

Buuuuut I figured there might be other people who would be interested in those same features that I wanted, so here we are.

Even if it doesn't make sense for your own blog, if you want a light-weight wiki where people make contributions via something like Github as pull requests or merges (no more worrying about spam, or MediaWiki user privileges!) you may want to try it out.

Tell me what you think!
=========

[Hit me up on Twitter](https://twitter.com/TehShrike) or <a href="mailto:me@JoshDuff.com">send me an email</a>!  The Github repository is [right over here](https://github.com/TehShrike/noddity) and would love for strangers to touch it.

Thanks
======

Noddity relies very heavily on:

- [browserify](http://browserify.org/)
- [LevelUP](https://github.com/rvagg/node-levelup)
- [Ractive.js](http://www.ractivejs.org/)

Special thanks to [James Halliday](http://substack.net/), [Rod Vagg](http://r.va.gg/), and [Rich Harris](http://www.rich-harris.co.uk/), who are fantastic people making the internet a better place to code.

::contents.md::
