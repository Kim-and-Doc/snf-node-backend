const axios = require('axios');
const env = require('../../../../config/env');

const test = async (req, res) => {
  const headers = {
    headers: {
      'app-id': env.DUM_API,
    },
  };
  const result = await axios.get('https://dummyapi.io/data/api/user', headers);
  const data = await result.data;
  return res.json(data);
};

module.exports = { test };
