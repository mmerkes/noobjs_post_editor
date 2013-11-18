Welcome to the NoobJS Post Editor!
==================================

About it:
---------

The NoobJS Post Editor is a very basic interface to write blog posts in Markdown. The idea is that you'd run it on `localhost` and hook the server up to your database, which would be read from the main app. The front end is built with Ember.js with a Node.js back end and MongoDB storage.

How to use it:
--------------

Clone the repository on your computer, set up an instance of `mongod`, give `server.js` the right info to hook up to your db (or leave it as is if you're using MongoDB on `localhost` with the default port), run the server, and you're all set!

As the app was built for my own purposes, it only takes titles, post content, tags, and creates a creation date for each post. That will change in the future, but suffices for my needs at the moment.

Acknowledgments:
----------------

[Thanks to Julien Knebel for writing a great introduction to Ember.js that got me going.](http://coding.smashingmagazine.com/2013/11/07/an-in-depth-introduction-to-ember-js/)

[And thanks to Addy Osmani for writing an open source Backbone.js book that got me going on my Backbone projects, but had a great example of a Node.js/Express/Mongoose back end that really helped me write the server for this project.](http://addyosmani.github.io/backbone-fundamentals/#creating-the-back-end)