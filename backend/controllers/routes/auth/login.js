const jwt = require('jsonwebtoken');
const env = require('../../../../config/env');

/*
@route    GET /api/auth/login
@desc     This will change to a post later most likely
@access   public
*/
const getLogin = (req, res) => {
  // compare and get from db

  // get uuid of user
  const id = 'id';

  const token = jwt.sign({ id }, env.TOKEN_SECRET, {
    expiresIn: 60 * 60 * 24 * 7, // 1 week
  });

  return res.status(200).json({ msg: 'Test login auth route' });
};

module.exports = { getLogin };
