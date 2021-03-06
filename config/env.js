require('dotenv').config();

const {
  DEBUG, PG_HOST, PG_DB, PG_USER, PG_PASS, PG_PORT, SES_SECRET, TOKEN_SECRET, DUM_API, FOOD_API,
  PG_HOST_DEV, PG_DB_DEV, PG_USER_DEV, PG_PASS_DEV,
} = process.env;

module.exports = {
  DEBUG,
  PG_HOST,
  PG_DB,
  PG_USER,
  PG_PASS,
  PG_PORT,
  SES_SECRET,
  TOKEN_SECRET,
  DUM_API,
  FOOD_API,
  PG_HOST_DEV,
  PG_DB_DEV,
  PG_USER_DEV,
  PG_PASS_DEV,
};
