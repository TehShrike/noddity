title: The future of Noddity
date: Fri Jan 28 2014 00:00:00 GMT+0000 (UTC)

What won't happen
=========

I am not planning on adding a whole bunch of features to this client-side cms.  It would be cool if other [[noddity-backend.md|Noddity consumers]] started showing up, but this particular web frontend doesn't need to change for that to happen.

What might happen
=========

There will probably be *some* changes to give you a bit more leeway in making front-end changes.  Right now, if you want to change the layout or styling, you have to fork the repo and change the html/css files yourself.

It's not like there are many files to sort through or anything, but I'd like to make it so people don't have to deal with merge conflicts in html if they want to update to a newer version of Noddity.

There are lots of little things I'd like to do:

- Figure out how to use custom fonts without delaying how long it takes for the text to display on first load (magic?)
- Automatically display the title of the target page instead of the file name when you link to `[[some-page.md]]`
- Some issue with the svg logo not appearing in mobile Safari?  Not sure if this still happens anywhere.

Want to get involved?  I'd love the help!  [Ping me on Twitter](https://twitter.com/TehShrike), I'm often available to chat via gchat, xmpp, or IRC if you want to talk over any of the todos above.

::contents.md::
