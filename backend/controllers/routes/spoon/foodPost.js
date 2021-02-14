const axios = require('axios');
const env = require('../../../../config/env');

/*
@route    GET /api/spoon/posts
@desc     Get 50 posts
@access   public
*/
const getFoodPosts = async (req, res) => {
  const limit = 50;
  try {
    const result = await axios.get(`https://api.spoonacular.com/recipes/random?number=${limit}`);
    const data = await result.data;
    return res.json({ msg: 'success', data });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

module.exports = { getFoodPosts};
