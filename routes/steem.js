var express = require('express');
var router = express.Router();
var steem = require('steem');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/trending', function(req, res) {
  steem.api.getDiscussionsByTrending({ tag: 'steemit', limit: 10 }, function(err, result) {
    res.send({
      status: 0,
      data: result,
    });
  });
});

router.get('/article/:author/:permlink', function(req, res) {
  steem.api.getContent(req.params.author, req.params.permlink, function(err, result) {
    res.send({
      status: 0,
      data: result,
    });
  });
});

module.exports = router;
