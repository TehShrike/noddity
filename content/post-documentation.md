---
title: Post/template documentation
date: "Thu Jun 11 2015 20:16:56 GMT-0500 (CDT)"
---

Posts can be [straight markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), but there are some other goodies.  To start with, you can use goodies like footnotes and tables that are supported by the [remarkable](https://www.npmjs.com/package/remarkable#syntax-extensions) parser.

## Internal links

You can link to any other document on the site using a syntax similar to Wikipedia's: anything inside square brackets will turn into a link.  `"[[noddity-backend.md]]"` turns into "[[noddity-backend.md]]".

You can put in whatever link text you like after a `|` pipe: `[[noddity-backend.md|CLICK THIS LINK]]` turns into [[noddity-backend.md|CLICK THIS LINK]].

## Embeddable templates

Any page on the site can be embedded into any other page.  Take [[the-most-boring-page.md|this boring page]] for example - you can visit it by clicking it on the link, but you can also embed it by including its name inside of colons, like this: `::the-most-boring-page.md::`.

When I do that in this page, you get: ::the-most-boring-page.md::

If you want your templates to not be parsed with the markdown parser (which adds paragraph tags, among other things) you can add the `markdown: false` property to the metadata at the top of the file.

### Expressions

Inside templates, you can also use fancy expressions - they get inserted as [Ractive templates](http://docs.ractivejs.org/latest/mustaches), which means you can pretty much use regular JavaScript inside moustaches.

Inside those expressions, you have certain values available to you.  You have the parameters passed in to the template, either as numbered expressions: `::template.md|value 1|value 2::` or as named expressions: `::template.md|first=value 1|first=value 2::`.

Also available to you are:

- `current` - the file name of the page you are current on.  Set by the noddity-renderer
- `postList` - changing soon
- all the values set in your config.js
