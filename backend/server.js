const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const env = require('./config/env');
const apiRoutes = require('./controllers/routes/api');
const crossOrigin = require('./controllers/middlewares/crossOrigin');
const errorHandler = require('./controllers/middlewares/errorHandler');
const connectDB = require('./config/postgres_db');

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(
  session({
    secret: env.SES_SECRET,
    resave: false, // false: do not save session if unmodified
    saveUninitialized: false, // false: do not create session until something stored
    cookie: { maxAge: 120 * 60 * 1000 }, // Session expires in 2 hours,
  }),
);
app.use(cookieParser());

if (env.DEBUG === 'true') {
  // for req logs
  app.use(morgan('dev'));
}

app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: 'application/json' }));
app.use(crossOrigin.crossOrigin);

if (env.DEBUG === 'false') {
  app.use(express.static(`${__dirname}/frontend/build`));
  app.use('/api', apiRoutes);
  app.get('*', (req, res) => res.sendFile(`${__dirname}/frontend/build/index.html`));
} else {
  // route filters
  app.use('/api', apiRoutes);
}

app.use(errorHandler.errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
