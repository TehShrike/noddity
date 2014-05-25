To install noddity:

    git clone https://github.com/TehShrike/noddity.git
    cd noddity
    npm install
    npm run build

For that to work, you'll need to have installed node.js, browserify, and UglifyJS:

    npm install -g browserify
    npm install -g uglify-js

Buuuuuut you probably don't have much interest in deploying copies of this web site. To display your own shenanigans, before you do the build in step 4, open up the config.js and change the title to be whatever you want, the noddityRoot to point at the path where you'll be deploying your markdown files, the editLink to reference your own repository (you can make it null/false if you don't want the link to show up), and change the logo to point at the path of your own cool image.

Then you can do the build step, deploy somewhere, and then set up your own content.

## Noddity with [Github Pages](https://pages.github.com/)

Create a new repo, call it `USERNAME.github.io`

Clone that:

    git clone https://github.com/USERNAME.github.io

Install and build noddity:

    git clone https://github.com/TehShrike/noddity.git
    cd noddity
    npm install
    npm run build

Copy the noddity required files to your repo folder `USERNAME.github.io/` (don't copy the `content` folder):

    font/*
    js/*
    index.html
    logo.svg
    style.css
    build.js

Create another repo that will hold your content, let's call it `blog-content`, and add that repo as a submodule to your `USERNAME.github.io` repo:

    cd USERNAME.github.repo
    git submodule add https://github.com/USERNAME/blog-content.git content

Inside of your `blog-content` repo, make sure you have an `index.md` file and an `index.json` file that has an array.

Commit all these things and push them up to their respective repos.

> If this is your first time using Github Pages, it may take up to ten minutes for the page to be loaded. Subsequent changes are practically instantaneous.

You should now have a successful deploy of Noddity running!

For great good, try adding a new Markdown file to your `blog-content` repo, and adding that to the post array in your `index.json` file. (See [here](https://github.com/TehShrike/joshduff.com-content/blob/master/index.json) for an example of what it should look like.)

After you commit and push that to your repo and your new post will be accessible on your site, no rebuild or other steps needed! You can even edit or create posts directly from the GitHub web interface!

> Noddity has backend caching that you may need to clear by running `debug.clearCache()` in the console.

