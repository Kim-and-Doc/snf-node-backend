const { v4: uuid } = require('uuid');
const { User, Post } = require('../../../../models');

/*
@route    GET /api/posts
@desc     select * from Posts;
@access   public
*/
const getDbPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    return res.json({ msg: 'success', posts });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

/*
@route    GET /api/posts/create
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
    return res.json({ msg: 'error', error: err });
  }
};

/*
@route    GET /api/posts/delete
@desc     delete test post
@access   public
*/
const deleteDbPost = async (req, res) => {
  const tempUserId = '96cc2cae-b241-40c3-a940-5e42ab43e2ac';
  try {
    await Post.destroy({
      where: { userId: tempUserId },
    });
    return res.json({ msg: 'success, test Post deleted' });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

module.exports = { getDbPosts, createDbPost, deleteDbPost };
