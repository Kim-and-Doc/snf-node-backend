const axios = require('axios');
const env = require('../../../../config/env');

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
