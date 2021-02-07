const { Router } = require('express');

const router = Router();

// !route methods
// auth
const { getLogin } = require('./auth/login');
const { getUsers } = require('./dummy/user');
const { getPosts, getPost, getComments } = require('./dummy/post');
const { testSelect, testInsert, testDelete } = require('./db/test');
const verifyJWT = require('../middlewares/verifyJWT');

// !Dummy routes
// ? User routes
/*
@route    GET /api/dummy/test
@desc     Get 50 users
@access   public
*/
router.get('/dummy/user', getUsers);

// ? Post routes
/*
@route    GET /api/dummy/test
@desc     Get 50 posts
@access   public
*/
router.get('/dummy/post', getPosts);

/*
@route    GET /api/dummy/test
@desc     Get a specific post
@access   public
*/
router.get('/dummy/post/:postId', getPost);

/*
@route    GET /api/dummy/test
@desc     Get comments in post
@access   public
*/
router.get('/dummy/post/:postId/comment', getComments);

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
