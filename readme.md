This is the main code repository for the wiki-friendly blog-capable cms that I wrote.

Check out [noddity.com](http://noddity.com/) for more details on the cms, the project in general, and easy installation instructions.

If you want your own copy of Noddity running on Github Pages (imagine it, a Github-backed wiki!) just fork the [gh-pages](https://github.com/TehShrike/noddity/tree/gh-pages) branch of this repository.

If you're using Noddity as a wiki, bear in mind that the client caches all content, so while new visitors will see your changes as soon as you make them, it will take a while for them to show up in your browser.

If you have any questions at all, or any comments, email <me@JoshDuff.com> or hit up [TehShrike](https://twitter.com/TehShrike) on Twitter.

# Noddity modules

- **Noddity** - this webapp
	- **[noddity-linkifier](https://github.com/TehShrike/noddity-linkifier)** - parses inter-site links and replaces them with a-href links. Injected as a dependency into noddity-butler
	- **[noddity-renderer](https://github.com/TehShrike/noddity-renderer)** - turns posts into Ractive elements. Injected as a dependency into noddity-butler
	- **[noddity-butler](https://github.com/TehShrike/noddity-butler)** - handles the caching and rendering of posts
		- **[noddity-retrieval](https://github.com/TehShrike/noddity-retrieval)** - fetches the index and posts from a Noddity content directory using http requests

## Other modules not used directly by the Noddity webapp

- **[seoaas](https://github.com/TehShrike/seoaas)** - stand-alone server that generates html from posts for search engines for any number of Noddity sites
- **[rssaas](https://github.com/TehShrike/rssaas)** - stand-alone server that generates rss feeds for any number of Noddity sites
- **[noddity-service-server](https://github.com/TehShrike/noddity-service-server)** - makes it really easy to write butler-using web services like seoaas and rssaas
- **[noddity-search](https://github.com/TehShrike/noddity-search)** - given a noddity-butler, uses lunr to index all posts and keep the index up to date
- **[noddity-fs-retrieval](https://github.com/ArtskydJ/noddity-fs-retrieval)** - implements the noddity-retrieval interface, but uses the file system instead of http
- **[noddity-view-model](https://github.com/ArtskydJ/noddity-view-model)** - given a noddity-butler, noddity-renderer, and an html template, produce static html for any post


[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/TehShrike/noddity)
