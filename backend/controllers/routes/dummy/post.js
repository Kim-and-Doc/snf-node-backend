const axios = require('axios');
const env = require('../../../../config/env');

/*
@route    GET /api/dummy/test
@desc     Get 50 posts
@access   public
*/
const getPosts = async (req, res) => {
  const headers = {
    headers: {
      'app-id': env.DUM_API,
    },
  };
  // can change limit
  const limit = 50;
  const result = await axios.get(`https://dummyapi.io/data/api/post?limit=${limit}`, headers);
  const data = await result.data;
  return res.json({ data, result });
};

/*
@route    GET /api/dummy/test
@desc     Get a specific post
@access   public
*/
const getPost = async (req, res) => {
  const { postId } = req.params;
  const headers = {
    headers: {
      'app-id': env.DUM_API,
    },
  };
  const result = await axios.get(`https://dummyapi.io/data/api/post/${postId}`, headers);
  const data = await result.data;
  return res.json({ data, result });
};

/*
@route    GET /api/dummy/test
@desc     Get comments in post
@access   public
*/
const getComments = async (req, res) => {
  const { postId } = req.params;
  const headers = {
    headers: {
      'app-id': env.DUM_API,
    },
  };
  const limit = 50;
  const result = await axios.get(`https://dummyapi.io/data/api/post/${postId}/comment?limit=${limit}`, headers);
  const data = await result.data;
  return res.json({ data, result });
};

module.exports = { getPosts, getPost, getComments };
