const env = require('./env');

module.exports = {
  development: {
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
