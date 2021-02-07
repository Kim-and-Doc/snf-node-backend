exports.crossOrigin = (req, res, next) => {
  const allowedOrigins = ['http://localhost:3000, https://social-network-foodie.herokuapp.com/'];
  const { origin } = req.headers;
  if (allowedOrigins.includes(origin)) res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  // if (req.method === 'OPTIONS') {
  //   return res.sendStatus(200);
  // }
  return next();
};
