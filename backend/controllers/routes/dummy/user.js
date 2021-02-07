const axios = require('axios');
const env = require('../../../../config/env');

/*
@route    GET /api/dummy/user
@desc     Get 50 users
@access   public
*/
const getUsers = async (req, res) => {
  const headers = {
    headers: {
      'app-id': env.DUM_API,
    },
  };
  // can change limit
  const limit = 50;
  const result = await axios.get(`https://dummyapi.io/data/api/user?limit=${limit}`, headers);
  const data = await result.data;
  return res.json({ data, result });
};

/*
@route    GET /api/dummy/user/:userId
@desc     Get specific user
@access   public
*/
const getUser = async (req, res) => {
  const { userId } = req.params;
  const headers = {
    headers: {
      'app-id': env.DUM_API,
    },
  };
  // can change limit
  const result = await axios.get(`https://dummyapi.io/data/api/user/${userId}`, headers);
  const data = await result.data;
  return res.json({ data, result });
};

/*
@route    GET /api/dummy/user/:userId/post
@desc     Get 50 users
@access   public
*/
const getUserPosts = async (req, res) => {
  const { userId } = req.params;
  const headers = {
    headers: {
      'app-id': env.DUM_API,
    },
  };
  // can change limit
  const limit = 50;
  const result = await axios.get(`https://dummyapi.io/data/api/user/${userId}/post?limit=${limit}`, headers);
  const data = await result.data;
  return res.json({ data, result });
};
module.exports = { getUsers, getUser, getUserPosts };
