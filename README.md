# Hello?

I was wondering what an actual project might look like with browserify, and was looking to get intimate with Gulp. So here it is, one that uses both.
It also features:

* Nunjucks
* Express
* Some other stuff. __Explore!__


This is a *educational* project. That means it has no meaning. It's /dev/null. No use. No practical use, actually.

# Do Whatever The Fuck You Want License, Right?
Fork it, change it, repost it, whatever. The only thing I ask is that you __learn__ what you're reading.
Change, tweak, and if you feel proud about yourself, contact me and let me know. For *real*. I really want to know what you built with it.

# Special thanks!
To myself. Who glued this up all by myself. And some random internet blogs.

# How it is structured?

Well, pretty straightforward:

* build
  * css
    * bundle.min.css
  * js
    * bundle.min.js
* node_modules
* statics
  * css
    * main-page.css
  * js
    * modules
    * main.js
* views
  * layouts
    * main-layout.html
  * index.html
* gulpfile.js
* index.js
* package.json
* README.md

On to some explanation now.

* *build*: Directory that contain minified and browserified JS and CSS code.
* *statics*: Directory containing files that will be browserified/uglified (css and js code).
* *statics/js/modules*: Modules for the client.
* *views*: Contains layouts and views.
* *gulpfile*: An bare-bones gulpfile that browserifies and minifies js/css code.
* *index.js*: The Express application setup.
* *package.json*: Really?
* *README.md*: Really?
