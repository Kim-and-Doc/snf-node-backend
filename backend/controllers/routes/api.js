const { Router } = require('express');

const router = Router();

// !route methods
const { getLogin } = require('./auth/login');
const { getUsers } = require('./dummy/user');
const { getPosts, getPost, getComments } = require('./dummy/post');
const { testSelect, testInsert, testDelete } = require('./db/test');
const verifyJWT = require('../middlewares/verifyJWT');

// !Dummy routes //////////////////////
// ? User routes
router.get('/dummy/user', getUsers);

// ? Post routes
router.get('/dummy/post', getPosts);
router.get('/dummy/post/:postId', getPost);
router.get('/dummy/post/:postId/comment', getComments);

// !DB test routes //////////////////////
// ? Test db usage for using country table
router.get('/db/get', testSelect);
router.get('/db/ins', testInsert);
router.get('/db/del', testDelete);

// !Auth routes //////////////////////
router.get('/auth/login', getLogin); // not complete

// !Test verifyJWT route //////////////////////
/*
@route    GET /api/test/auth
@desc     test verify jwt middleware
@access   public
*/
router.get('/test', verifyJWT, (req, res) => res.status(200).json({ msg: 'Authenticated' }));

module.exports = router;
