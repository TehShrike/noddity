title: Installation
date: Fri Jan 29 2014 00:00:00 GMT+0000 (UTC)

Traditional install
==========

To install the static html and Javascript that make up Noddity, you'll want to use npm, sometimes known as the "Noddity Package Magnate".  npm is distributed with [node.js](http://nodejs.org/).

Use npm to download the Noddity installer by running `npm install -g noddity-installer` at your command prompt.

Once it's installed, you can browse to any directory and run `noddity` to get a fresh noddity install.  The installer will download all of the dependencies from npm, build and minify the code, and deposit the results in the current directory.

It looks like this!

![Animated gif](content/image/noddity-install.gif)

If any of the Noddity files already exist in that directory, they will *not* be overwritten.  You can upgrade by deleting any files that you haven't changed (like js/build.js) and re-running noddity.

You'll want to make some changes to the config.js file to add your site title and some other settings, and you can uncomment the lines at the top of your index.html to enable the RSS feed or tell search spiders to try to download static versions of the posts.  The logo/fonts/css are yours to change as well, if you feel like it.

Otherwise, you're ready to upload the site to your favorite http server.  If you want to change the content, adding new posts or editing old ones, there is no re-publishing step.  Just change the markdown files in the content directory.  You can change the config.js to point the content directory to a different location if you don't want it in the same directory as the Noddity installation.

Github Pages
=========

To use your own Github Pages hosted version of Noddity, simply go to the [gh-pages branch of the noddity repository](https://github.com/TehShrike/noddity/tree/gh-pages) and hit the fork button.  Edit the config.js file in your new repository, put your own markdown files in the content directory, and you're good to go.

Development install
============

Playing with the Noddity code doesn't take much cooking.  First, assemble your ingredients:

- 1 [node.js](http://nodejs.org/download/)
- 1 [browserify](https://github.com/substack/node-browserify) via `npm install -g browserify`
- 1 [UglifyJS](https://github.com/mishoo/UglifyJS2) via `npm install -g uglify-js`

Fill a mixing directory with the current Noddity code by running `git clone https://github.com/TehShrike/noddity.git` and `npm install noddity` until the dependencies are sticking to the edge of the bowl.

In the noddity directory, bake with `npm run build` for a minified center, or fry with `npm run watch` for your live changes to be reflected in the build file with debug information.

::contents.md::
