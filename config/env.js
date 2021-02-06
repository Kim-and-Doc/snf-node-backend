require('dotenv').config();

const {
  DEBUG, PG_HOST, PG_DB, PG_USER, PG_PASS, PG_PORT, SES_SECRET, TOKEN_SECRET, DUM_API,
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
};
