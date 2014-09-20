title: Services
date: Fri Jan 28 2014 12:00:00 GMT+0000 (UTC)

A Noddity blog is a single-page app that loads and displays a directory full of markdown files.  But that's not always enough, is it?

The problem
===========

If you care about showing up in search engines, you need server-side code to render static html for the spiders (well, [probably](http://googlewebmastercentral.blogspot.co.uk/2014/05/understanding-web-pages-better.html)).

If you want people to be able to follow you, you need your posts to show up in an RSS/Atom feed they can subscribe to.

I've described here how you can use these services, but don't worry about copying/pasting to your own Noddity site - just un-comment out the lines at the top of [index.html](https://github.com/TehShrike/noddity/blob/master/index.html) and add your customizations.

The solution
============

Both of these can be solved by services running on another server.  So, I wrote those services!

In the case of serving content to the search-engine spiders, you tell them that you support [_escaped_fragment_ url parameters](https://developers.google.com/webmasters/ajax-crawling/docs/specification) and then redirect those requests to another server.

In the case of the RSS feed, you can use the [<link> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) with a type of "application/rss+xml" to indicate that the site's feed is available an whatever you give.

RSS
===

As I am a middling smart-ass, you can find this code on Github under [rssaas](https://github.com/TehShrike/rssaas).

I am currently hosting the RSS service at rss.noddityservices.com - using the above code, you can easily launch your own if you like.

Here's an example of what you would insert into your Noddity web page to link your visitors to an RSS feed of your content:

	<link href="http://rss.noddityaas.com/?noddityRoot=http://joshduff.com/content/&postUrlRoot=http://joshduff.com/%23!post/&title=Josh%20Duff%20.com&author=Josh" rel="alternate" type="application/rss+xml" title="Blog" />

There are four parameters in the feed url:

- postUrlRoot - the [[noddity-backend.md|Noddity root path]].  Should correspond to the the noddityRoot in your config.js.  (Octothorpes must be encoded as %23)
- postRootUrl - the services uses this to link your posts back to your site.  This should be whatever you see in the url of your site before the current post's file name.
- title - the title given in the RSS feed header
- author - the author associated with each post in the feed

You can see the link element also has a title attribute of its own - that is the feed name that visitors will see when they hit their "subscribe" buttons.

The RSS feed will consist of your most recent posts listed in the index.json file.  The "date" metadata in the post is used to determine which posts are the most recent.  If your posts are not in the index.json file, or they do not have a valid date, they will not show up in the feed.

SEO
===

An acronym we can all roll our eyes at: [check out seoaas](https://github.com/TehShrike/seoaas) on Github!

There are two tricks to getting this to work: you add this meta tag to your html

	<meta name="fragment" content="!">

and you set up something on your server to handle requests with _escaped_fragment_ in the query string.

At the moment, the redirecting is done on your server with [this .htaccess file](https://github.com/TehShrike/noddity/blob/master/.htaccess).  I realize this is Apache-specific solution - I would very much appreciate any Nginx or Lighthttpd users contributing other redirect files.

It works pretty similarly to the RSS service - you redirect to a url that tells it what it needs to know to serve up the static content.

I'm running a server at seo.noddityaas.com - to view static content, redirect to a url like this:

	http://seo.noddityaas.com/?noddityRoot=http://noddity.com/content/&postUrlRoot=http://noddity.com/%23!post/&post=index.md

There are two parameters in the query string, and they both correspond to their counterparts in the RSS service above.

- postUrlRoot - the [[noddity-backend.md|Noddity root path]].  Should correspond to the the noddityRoot in your config.js.  (Octothorpes must be encoded as %23)
- postRootUrl - the services uses this to link your posts back to your site.  This should be whatever you see in the url of your site before the current post's file name.

seoaas uses [noddity-renderer](https://github.com/TehShrike/noddity-renderer), just like Noddity - while their use cases vary a good bit (check out that code, srsly) the server should render the same html as you would see in the dom browsing a Noddity site.

::contents.md::
