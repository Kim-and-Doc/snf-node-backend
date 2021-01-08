const { Router } = require('express');

const router = Router();

/*
@route    GET /api
@desc     api param
@access   public
*/
router.get('/', (req, res) => res.status(200).json({ msg: 'Hello world' }));

// !subdomains
/*
@route    GET /api/auth
@desc     users sub param
@access   public
*/
router.use('/test', require('./apiRoutes/test'));

module.exports = router;
