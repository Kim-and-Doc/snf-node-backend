const { Sequelize } = require('sequelize');
const env = require('./env');

const sequelize = new Sequelize(env.PG_DB, env.PG_USER, env.PG_PASS, {
  host: env.PG_HOST,
  port: env.PG_PORT,
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to PG has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err.original);
  }
};

module.exports = connectDB;
