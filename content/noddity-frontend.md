title: The Noddity front end: how caching and stuff works
date: Fri Jan 30 2014 00:00:00 GMT+0000 (UTC)

So on the [[index.md|main intro page]] in the "distinctives" section I mentioned how my priorities were having all the code running in the browser, not having any build steps, and having cached content for super-fast page loads.  This is how that works!

How content is loaded
========

In the config.js file, there's a setting for `noddityRoot` - that's the path where Noddity will expect all content to be.  Obviously, whatever domain you're hosting your content on will need to be cool with XMLHttpRequests coming from whatever domain you're hosting the site code on.  (Don't want to have to worry about that stuff?  Put 'em on the same domain.)

When you visit a page directly, the first thing the client does is grab the file name out of the url (if there's none there, it defaults to index.md) and do an XMLHttpRequest for that file in the noddity root.  Then it converts it from markdown to html, parses the internal links, replaces all templates with the appropriate magic, and drops the result into the main element.

Once that's taken care of, it hits the same noddity root path via xhr, grabbing the `index.json` file.  It then accesses all the files referenced there (it needs to parse the titles out of them so that they can be displayed in the menu on the left).

The post list on the left is sorted by the date property from the metadata at the top of the file, with the most recent posts at the top.

That sounds like it could be a lot of XMLHttpRequests to be making per-page load, but those requests really only happen on the first visit to the page.

How content is cached
========

All of the content access is done by the [noddity-butler](https://github.com/TehShrike/noddity-butler) module, which caches all content in a [LevelUP](https://github.com/rvagg/node-levelup) store.  The RSS server uses the same butler module - the main difference being that the RSS server is backed by an actual LevelDB store, while in the browser I'm just using the IndexedDB-backed [fruitdown](https://github.com/nolanlawson/fruitdown) storage engine, which is backed by IndexedDB on all browsers ([even Safari!]((http://caniuse.com/#feat=indexeddb))).

Theoretically, there are [potential storage concerns](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria), but I'm going to wait to worry about that until I have a blog or wiki approaching 20MiB of total markdown content.

The butler will always serve up a locally cached version if one is available, meaning that Noddity will prefer to display old content immediately rather than an up-to-date version a second from now.

The butler does go out and refresh content that is over a certain age - if an old version of a page was displayed because someone re-viseted a page they'd seen before, a few seconds later the butler reports a new version of that same page, Noddity will drop the new version into the page the user is viewing.

At the time of writing, the index.json file is refreshed if the cached list is older than 10 minutes, and posts are refreshed if the cached version is over 12 hours old.  I expect to be tweaking this in the future, and will probably be adding finer-grained control - increasing the time between refreshes for posts, but refreshing more often if the user is interacting with a particular post.

These improvements to cache behavior will be made in the noddity-butler module and will automatically affect the browser client and the RSS server.

::contents.md::
