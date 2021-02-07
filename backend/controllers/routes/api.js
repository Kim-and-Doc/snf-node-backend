const { Router } = require('express');

const router = Router();

// !route methods
// auth
const { getLogin } = require('./auth/login');
const { test } = require('./dummy/test');
const { testSelect, testInsert, testDelete } = require('./db/test');
const verifyJWT = require('../middlewares/verifyJWT');

// !Dummy routes
/*
@route    GET /api/dummy/test
@desc     This will change to a post later most likely
@access   public
*/
router.get('/dummy/test', test);

// !DB country test routes
/*
@route    GET /api/db/get
@desc     Test select * from countries;
@access   public
*/
router.get('/db/get', testSelect);

/*
@route    GET /api/db/ins
@desc     Test insert into db
@access   public
*/
router.get('/db/ins', testInsert);

/*
@route    GET /api/db/del
@desc     send how to delete in db
@access   public
*/
router.get('/db/del', testDelete);

// !Auth routes
/*
@route    GET /api/auth/login
@desc     This will change to a post later most likely
@access   public
*/
router.get('/auth/login', getLogin);

// !Test verifyJWT route
/*
@route    GET /api/test/auth
@desc     test verify jwt middleware
@access   public
*/
router.get('/test', verifyJWT, (req, res) => res.status(200).json({ msg: 'Authenticated' }));

module.exports = router;
