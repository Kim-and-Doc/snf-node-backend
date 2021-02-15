const axios = require('axios');
const env = require('../../../../config/env');

/*
@route    GET /api/food/posts
@desc     Get 40 food recipe posts
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

/*
@route    GET /api/food/post/:foodPostId
@desc     Get a specific food recipe post
@access   public
*/
const getFoodPost = async (req, res) => {
  const { foodPostId } = req.params;
  const { rapidAPIKey } = env.FOOD_API;
  try {
    const result = await axios.get(`https://tasty.p.rapidapi.com/recipes/detail?id=${foodPostId}&rapidapi-key=` + rapidAPIKey);
    const data = await result.data;
    return res.json({ msg: 'success', data });
  } catch (err) {
    return res.json({ msg: 'error', error: err });
  }
};

module.exports = { getFoodPosts, getFoodPost };