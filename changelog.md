# 5.0.0

- Noddity page links are now encoded.  Hash links that are clicked are now decoded after being received from the router. [#68](https://github.com/TehShrike/noddity/issues/68)

# 4.5.0

- The index.json (list of posts) is refreshed whenever the browser page is refreshed/loads [#38](https://github.com/TehShrike/noddity/issues/38)

# 4.4.0

- Scroll to the top of the page after the new page is finished being displayed, instead of when the navigation happens [#35](https://github.com/TehShrike/noddity/issues/35)

# 4.3.0

- Dropped a bunch of the favicons at different sizes because Chrome would reload them all on every hash change

# 4.2.2, 4.2.3

Jumped a version because of npm weirdness.

- Load posts in parallel (4 simultaneously)

# 4.2.1

- Fixing the build that I broke by missing localstorage-down in the debug code

# 4.2.0

- Switching to [fruitdown](https://github.com/nolanlawson/fruitdown) for IndexedDB-based storage on all browsers

# 4.1.0

- Added querystring parameters to the current post data for the template's benefit

# 4.0.2

- Added a helpful warning message if you're trying to use the previously-used `sidebar` property in the config object

# 4.0.1

- Setting/reading both the `title` and `name` properties on the config object for backwards compatibility

