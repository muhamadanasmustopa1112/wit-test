require('dotenv').config();
const path = require('path');
const BASE_PATH = path.join(__dirname, 'db');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host:  process.env.DB_HOST,
      port:  process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: false ? { rejectUnauthorized: false } : false,

    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    },
    pool: {
      min: 0,
      max: 5,
      acquireTimeoutMillis: 5000
    }
  }
};
