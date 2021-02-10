const env = require('./env');

module.exports = {
  development: {
    username: env.PG_USER_DEV,
    password: env.PG_PASS_DEV,
    database: env.PG_DB_DEV,
    host: env.PG_HOST_DEV,
    dialect: 'postgres',
  },
  test: {
    username: env.PG_USER,
    password: env.PG_PASS,
    database: env.PG_DB,
    host: env.PG_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    username: env.PG_USER,
    password: env.PG_PASS,
    database: env.PG_DB,
    host: env.PG_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
