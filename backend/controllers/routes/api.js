const { Router } = require('express');
const router = Router();

// route methods
const {getLogin} = require('./auth/login')

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
router.use('/auth2', require('./apiRoutes/auth'));

// !or we could split this way based on methods

// Auth routes
/*
@route    GET /api/auth2/login
@desc     test subroute
@access   public
*/
router.get('/auth/login', getLogin);


module.exports = router;
