title: The future of Noddity
date: Fri Jan 28 2014 00:00:00 GMT+0000 (UTC)

What won't happen
=========

I am not planning on adding a whole bunch of features to this client-side cms.  It would be cool if other [[noddity-backend.md|Noddity consumers]] started showing up, but this particular web frontend doesn't need to change for that to happen.

One large feature would be search-engine-spider-friendliness - but that will be implemented in a different module, that will run out on some server indepedent of any Noddity clients.

What might happen
=========

There will probably be *some* changes to give you a bit more leeway in making front-end changes.  Right now, if you want to change the layout or styling, you have to fork the repo and change the html/css files yourself.

It's not like there are many files to sort through or anything, but I'd like to make it so people don't have to deal with merge conflicts in html if they want to update to a newer version of Noddity.

There are lots of little things I'd like to do:

- Have user interaction with a blog post cause it to be refreshed maybe?
- Maybe make it so changing the config doesn't require a rebuild
- Guarantee that any documents that were linked to via an internal link in the current page were cached
- Automatically display the title of the target page instead of the file name when you link to `[[some-page.md]]`
- Automatically load the theme templates and partials using [Ractify](https://www.npmjs.org/package/ractify) once the new version hits npm
- Make more of the front-end code testable.  Everything from noddity-butler on down has a pretty good range of tests, but the template stuff could really use some tests along with the requisite restructuring.
- Make it so that the contents of templates are automatically updated if a new version appears, the same way the current main page does.  This will dependend on RactiveJS [gaining a new feature](https://twitter.com/RactiveJS/status/430134907424497664) where the [triple-stache](http://learn.ractivejs.org/triples-embedded-html/1/) could optionally evaluate its contents using the mustache syntax.  If this feature dropped, a lot of other janketiness associated with embedded templates could be removed.
- I think there's still some maybe-broken stuff in mobile Safari?  Need to bite the bullet and go debug that at some point.

::contents.md::
