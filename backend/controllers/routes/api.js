const { Router } = require('express');

const router = Router();

// !route methods
const { getUsers, getUser, getUserPosts } = require('./dummy/user');
const { getPosts, getPost, getComments } = require('./dummy/post');
const { getFoodPosts, getFoodPost } = require('./food/foodPost');
const { testSelect, testInsert, testDelete } = require('./db/test');
const { getDbUser, createUser, deleteUser } = require('./fill/user');
const { getDbPosts, createDbPost, deleteDbPost } = require('./post/generalPost');
const { getDbCountry, populateCountry, findCountry } = require('./fill/country');

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

// !Post db routes ////////
// ? Temporary Post routes
// get all posts
router.get('/posts', getDbPosts);
// get single post (do later)

// create post
router.get('/posts/create', createDbPost);
// delete post
router.get('/posts/delete', deleteDbPost);
// edit post (do later)

// !Fill db routes ////////
// Delete these routes later
// ? Test User
router.get('/fill/user', getDbUser);
router.get('/fill/user/create', createUser);
router.get('/fill/user/delete', deleteUser);
// ? Country
router.get('/fill/country', getDbCountry);
router.get('/fill/country/create', populateCountry);
router.get('/fill/country/:code', findCountry);

// !DB test routes //////////////////////
// ? Test db usage for using country table
// delete later
router.get('/db/get', testSelect);
router.get('/db/ins', testInsert);
router.get('/db/del', testDelete);

module.exports = router;
