const { Router } = require('express');

const router = Router();

// !route methods
const { getLogin } = require('./auth/login');
const { getUsers, getUser, getUserPosts } = require('./dummy/user');
const { getPosts, getPost, getComments } = require('./dummy/post');
const { getFoodPosts, getFoodPost } = require('./food/foodPost');
const { testSelect, testInsert, testDelete } = require('./db/test');
const verifyJWT = require('../middlewares/verifyJWT');

// !Dummy routes //////////////////////
// ? User routes
router.get('/dummy/user', getUsers);
router.get('/dummy/user/:userId', getUser);
router.get('/dummy/user/:userId/post', getUserPosts);

// ? Post routes
router.get('/dummy/post', getPosts);
router.get('/dummy/post/:postId', getPost);
router.get('/dummy/post/:postId/comment', getComments);

// !Food routes //////////////////////
// ? Food Post routes
router.get('/food/posts', getFoodPosts);
router.get('/food/post/:foodPostId', getFoodPost);

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
