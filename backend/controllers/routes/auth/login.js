const jwt = require('jsonwebtoken');
const env = require('../../../../config/env');

const getLogin = (req, res) => {
  // compare and get from db
  const result = { data: 'user data' };

  // get uuid of user
  const id = 'id';

  const token = jwt.sign({ id }, env.TOKEN_SECRET, {
    expiresIn: 60 * 60 * 24 * 7, // 1 week
  });

  return res.status(200).json({
    msg: 'Test login auth route', auth: true, token, result,
  });
};

module.exports = { getLogin };
