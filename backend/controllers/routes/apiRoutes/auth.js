const { Router } = require('express');

const router = Router();

/*
@route    GET /api/auth/login
@desc     test subroute
@access   public
*/
router.get('/login', (req, res) => {
  // compare and get from db

  // get uuid of user
  const id = 'id';

  const token = '';

  return res.status(200).json({ msg: 'Test login auth route' });
});

module.exports = router;
