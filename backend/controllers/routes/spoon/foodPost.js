const axios = require('axios');
const env = require('../../../../config/env');

/*
@route    GET /api/food/posts
@desc     Get 50 posts
@access   public
*/
const getFoodPosts = async (req, res) => {
  const { rapidAPIKey } = env.FOOD_API;
  const limit = 40;
    
  try {
    const result = await axios.get(`https://tasty.p.rapidapi.com/recipes/list?size=${limit}&rapidapi-key=` + rapidAPIKey);
    const data = await result.data;
    return res.json({ msg: 'success', data });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

module.exports = { getFoodPosts};