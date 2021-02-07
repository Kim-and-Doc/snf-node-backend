const axios = require('axios');
const env = require('../../../../config/env');

/*
@route    GET /api/dummy/test
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
  return res.json(data);
};

module.exports = { getUsers };
