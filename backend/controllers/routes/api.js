const { Router } = require('express');

const router = Router();

// !route methods
// auth
const { getLogin } = require('./auth/login');
const { test } = require('./dummy/test');
const verifyJWT = require('../middlewares/verifyJWT');

// Auth routes
/*
@route    GET /api/auth/login
@desc     This will change to a post later most likely
@access   public
*/
router.get('/auth/login', getLogin);

// dummy routes
/*
@route    GET /api/dummy
@desc     This will change to a post later most likely
@access   public
*/
router.get('/dummy/test', test);

// Test routes
/*
@route    GET /api/test/auth
@desc     test verify jwt middleware
@access   public
*/
router.get('/test', verifyJWT, (req, res) => res.status(200).json({ msg: 'Authenticated' }));

module.exports = router;
