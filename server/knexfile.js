require('dotenv').config({});

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'test',
    user: process.env.DB_USERNAME || 'user',
    password: process.env.DB_PASSWORD || 'null',
  },
  // migrations: {
  //   tableName: 'knex_migrations',
  // },
  migrations: {
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
};
