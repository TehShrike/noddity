title: Install Noddity
date: Fri Jan 29 2014 00:00:00 GMT+0000 (UTC)

Some day, there will be an automated build process that packages up nice little downloadable compressed packages and puts them somewhere publicly accessible!  That day is not today, though.

To install this web site (the one you're looking at right now!):

1. `git clone https://github.com/TehShrike/noddity.git`
2. `cd noddity`
3. `npm install`
4. `npm run build`

For that to work, you'll need to have installed [node.js](http://nodejs.org/download/), [browserify](https://github.com/substack/node-browserify), and [UglifyJS](https://github.com/mishoo/UglifyJS2):

- `npm install -g browserify`
- `npm install -g uglify-js`

Buuuuuut you probably don't have much interest in deploying copies of this web site.  To display your own shenanigans, before you do the build in step 4, open up the config.js and change the title to be whatever you want, the noddityRoot to point at the path where you'll be deploying your markdown files, the editLink to reference your own repository (you can make it null/false if you don't want the link to show up), and change the logo to point at the path of your own cool image.

Then you can do the build step, deploy somewhere, and then set up your own content.

::contents.md::
