const jwt = require('jsonwebtoken');
const env = require('../../../config/env');

module.exports = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).json({ msg: 'Need token', auth: false });
  jwt.verify(token, env.TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ msg: 'Failed auth', auth: false });
    req.userId = decoded.id;
    return next();
  });
  return next(); // might need to remove this later
};
