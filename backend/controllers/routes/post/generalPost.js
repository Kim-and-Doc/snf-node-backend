const { User, Post } = require('../../../../models');

/*
@route    GET /api/post
@desc     select * from Posts;
@access   public
*/
const getDbPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    return res.json({ msg: 'success', posts });
  } catch (err) {
    return res.json({ msg: 'error', error: err.name });
  }
};

/*
@route    GET /api/post/id/:postId
@desc     select * from Posts where postId = postId;
@access   public
*/
const getDbPostById = async (req, res) => {
  const { postId } = req.params;
  if (postId.length !== 36) return res.json({ msg: 'Error: Invalid id' });
  try {
    const post = await Post.findOne({ where: { postId: postId.toLowerCase() } });
    return (post) ? res.json({ msg: 'success', post: post.dataValues }) : res.json({ msg: 'No post found' });
  } catch (err) {
    return res.json({ msg: 'error', error: `${err.name}: Invalid postId` });
  }
};

/*
@route    Post /api/post/id/:postId
@desc     Update post
@access   public
*/
const updateDbPost = async (req, res) => {
  const { textContent, postId } = req.body;
  if (postId.length !== 36) return res.json({ msg: 'Error: Invalid id' });
  try {
    const post = await Post.update({ textContent, where: { postId: postId.toLowerCase() } });
    return (post) ? res.json({ msg: 'success', post }) : res.json({ msg: 'No post found' });
  } catch (err) {
    return res.json({ msg: 'error', error: `${err.name}: Invalid postId` });
  }
};

/*
@route    GET /api/post/user/:userId
@desc     select * from Posts where userId = userId;
@access   public
*/
const getDbPostsByUser = async (req, res) => {
  const { userId } = req.params;
  if (userId.length !== 36) return res.json({ msg: 'Error: Invalid id' });
  try {
    const posts = await Post.findAll({ where: { userId: userId.toLowerCase() } });
    return res.json({ msg: 'success', posts });
  } catch (err) {
    return res.json({ msg: 'error', error: err.name });
  }
};

/*
@route    GET /api/post/create
@desc     create test user
@access   public
*/
const createDbPost = async (req, res) => {
  try {
    const tempUserId = '96cc2cae-b241-40c3-a940-5e42ab43e2ac';
    const user = await User.findOne({ where: { userId: tempUserId } });
    await Post.create({
      userId: user.dataValues.userId,
      isFoodPost: false,
      textContent: 'This is the content of this post. I love food woooo!',
      imageContent: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
    });
    return res.json({ msg: 'Test Post successfully created' });
  } catch (err) {
    return res.json({ msg: 'error', error: err.name });
  }
};

/*
@route    GET /api/post/delete/id/:postId
@desc     delete test post
@access   public
*/
const deleteDbPost = async (req, res) => {
  const { postId } = req.params;
  try {
    await Post.destroy({
      where: { postId: postId.toLowerCase() },
    });
    return res.json({ msg: 'success, test Post deleted' });
  } catch (err) {
    return res.json({ msg: 'error', error: err.name });
  }
};

module.exports = {
  getDbPosts, createDbPost, deleteDbPost, getDbPostById, getDbPostsByUser, updateDbPost,
};
