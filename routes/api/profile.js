const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load profile model
const Profile = require('../../models/Profile');
// Load user model
const User = require('../../models/User');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));


// @route   GET api/profile
// @desc    Get current users profile
// @access  Private

router.get('/', passport.authenticate('jwt', { session: false }),(req, res) => {

});



module.exports = router;
