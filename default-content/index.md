title: Welcome!

Welcome to Noddity, the awesome cms-thing!
--------------

I wrote Noddity to replace the unnecessarily-heavy backend-centric framework that was running my personal blog-site.

### Distinctives

1. All the CMS magic is client-side - no server-side interpreter necessary, can deploy on vanilla Apache/Nginx/whatever
2. No build step when you add or change content - the backend is a [noddity-backend.md|directory full of markdown files]
3. Absurdly fast response time after initial pageload - the goal is to have all content cached locally so that displaying new pages is not waiting on any HTTP requests

### Features

Those were my primary goals while writing this thing, but some of my other priorities soaked through too:

- "Edit" button on every page so that people can fix my spelling mistakes for me (via pull requests on Github!)
- [MediaWiki-style](https://www.mediawiki.org/wiki/Help:Links#Internal_links) internal links
- [MediaWiki-style](https://www.mediawiki.org/wiki/Help:Templates) templates, with parameters

### Downsides

#### No built-in RSS feed

This is a side effect of wanting to be able to deploy new content on generic HTTP servers without any build step.

I can't deploy a blog without an RSS feed, though, so I [made a service](https://github.com/TehShrike/rssaas) to serve up feeds for any blog using the Noddity backend (that directory full of markdown files).

My goal is to have one of those RSS servers running, and have all of my content sites that need an RSS feed point people to that single server to get their feeds.

### Not very spiderable by search engines

With both the rendering of pages and the routing being done client-side, it's not very SEO-friendly.

It is possible to point search engine bots to static versions of the content.  I don't want the static-content-rendering to be built into the Noddity client framework (maintaining distinctive number 1, avoiding any server-side interpreter), but there are other ways to accomplish that.

There are third-party solutions already available, like [BromBone](http://www.brombone.com/) or [seo4ajax](http://www.seo4ajax.com).

Building a custom solution for Noddity (similar to the RSS hosting project) to take advantage of [ugly URL _escaped_fragment_ support](https://developers.google.com/webmasters/ajax-crawling/docs/specification) shouldn't actually be that difficult either, I just haven't gotten around to it yet.  SEO is less important to me than getting the site deployed and the RSS feed up, but I hope to get around to doing it right at some point.

Who is it for?
---------

Well, it's for me, obviously.  I'm planning on using it for all my personal sites where I would have previously used something like Wordpress or MediaWiki.

Buuuuut I figured there might be other people who would be interested in those same features that I wanted, so here we are.

Even if it doesn't make sense for your own blog, if you want a light-weight wiki where people make contributions via something like Github as pull requests or merges (no more worrying about spam, or MediaWiki user privileges!) you may want to try it out.
