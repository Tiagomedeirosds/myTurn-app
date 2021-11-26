var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyTurn' });
});

// module.exports = router;

// // now on for login

// var router = require('express').Router();
// const passport = require('passport');

// // The root route renders our only view
// router.get('/', function(req, res) {
//   res.redirect('/users');
// });

// // Google OAuth login route
// router.get("/auth/google", passport.authenticate(
//   "google", {
//       scope : ["profile", "email"],
//       prompt : "select_account" // This will force the user to select an account
//  }
// ))

// router.get('/oauth2callback', passport.authenticate(
//   'google',
//   {
//     successRedirect : '/users',
//     failureRedirect : '/users'
//   }
// ));



// router.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/users');
// });



module.exports = router;