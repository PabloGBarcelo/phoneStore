var express = require('express');
var router = express.Router();
var passport = require ("passport")

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('user/login');
});

router.get('/signup', (req, res) => {
    res.render('user/signup');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/',
  failureRedirect : '/signup'
}));

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/',
  failureRedirect : '/signup'
}));

router.post('/login', passport.authenticate('local-login', {
  successRedirect : '/',
  failureRedirect : '/login'
}));
module.exports = router;
