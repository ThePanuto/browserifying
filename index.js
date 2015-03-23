var express = require('express'),
    nunjucks = require('nunjucks'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname, '/build')));

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: false
});

var router = express.Router();

router.route('/')
  .get(function(req, res) {
    res.render('index.html');
  });

app.use(router);

app.listen(3000);
