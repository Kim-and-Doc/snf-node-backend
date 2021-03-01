const { Router } = require('express');

const router = Router();

// !route methods
const { getUsers, getUser, getUserPosts } = require('./dummy/user');
const { getPosts, getPost, getComments } = require('./dummy/post');
const { getFoodPosts, getFoodPost } = require('./food/foodPost');
const { getDbUser, createUser, deleteUser } = require('./fill/user');
const {
  getDbPosts, getDbPostById, createDbPost, deleteDbPost, getDbPostsByUser, updateDbPost,
} = require('./post/generalPost');
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
router.get('/post', getDbPosts);
// get posts by user
router.get('/post/user/:userId', getDbPostsByUser);
// get single post by id
router.get('/post/id/:postId', getDbPostById);
// edit post by id
router.post('/post/id/:postId', updateDbPost); // !Test this later
// create post
router.get('/post/create', createDbPost);
// delete post
router.get('/post/delete/id/:postId', deleteDbPost);

// !Comment db routes //////

// !Fill db routes ////////
// Adjust these routes later
// ? Test User
router.get('/fill/user', getDbUser);
router.get('/fill/user/create', createUser);
router.get('/fill/user/delete', deleteUser);
// ? Country
router.get('/fill/country', getDbCountry);
router.get('/fill/country/create', populateCountry);
router.get('/fill/country/:code', findCountry);
module.exports = router;
