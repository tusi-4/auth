const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  if(!req.user) res.redirect('/no-permission');
  else res.render('logged', { name: req.user.displayName, avatar: req.user.photos[0].value });
});

router.get('/profile', (req, res) => {
  if(!req.user) res.redirect('/no-permission');
  else res.render('profile');
});

router.get('/profile/settings', (req, res) => {
  if(!req.user) res.redirect('/no-permission');
  else res.render('settings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;