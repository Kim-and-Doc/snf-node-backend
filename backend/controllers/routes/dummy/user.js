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
  try {
    const result = await axios.get(`https://dummyapi.io/data/api/user?limit=${limit}`, headers);
    const data = await result.data;
    return res.json({ msg: 'success', data });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
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
  try {
    const result = await axios.get(`https://dummyapi.io/data/api/user/${userId}`, headers);
    const data = await result.data;
    return res.json({ msg: 'success', data });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
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

  const limit = 50;
  try {
    const result = await axios.get(`https://dummyapi.io/data/api/user/${userId}/post?limit=${limit}`, headers);
    const data = await result.data;
    return res.json({ msg: 'success', data });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};
module.exports = { getUsers, getUser, getUserPosts };
