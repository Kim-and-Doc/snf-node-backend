const { Router } = require('express');

const router = Router();

/*
@route    GET /api/test
@desc     test subroute
@access   public
*/
router.get('/', (req, res) => res.status(200).json({ msg: 'Test sub route' }));

module.exports = router;
