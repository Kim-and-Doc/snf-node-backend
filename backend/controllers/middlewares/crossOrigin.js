exports.crossOrigin = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000, https://social-network-foodie.herokuapp.com/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // if (req.method === 'OPTIONS') {
  //   return res.sendStatus(200);
  // }
  next();
};
