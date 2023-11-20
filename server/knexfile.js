module.exports = {
  //server作成時-------------------------------
  // client: "pg",
  // connection: {
  //   host: process.env.DB_HOST || "127.0.0.1",
  //   port: process.env.DB_PORT || 5432,
  //   database: process.env.DB_NAME || "test",
  //   user: process.env.DB_USERNAME || "user",
  //   password: process.env.DB_PASSWORD || "null",
  // },

  // migrations: {
  //   directory: "./db/migrations",
  // },
  // seeds: {
  //   directory: "./db/seeds",
  // },
  //-----------------------------------------
  development: {
    client: "pg",
    connection: {
      // ここにローカルのデータベースの設定
      // user: process.env.POSTGRES_USER || 'user',
      // database: process.env.POSTGRES_DB || 'diary',
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "test",
      user: process.env.DB_USERNAME || "user",
      password: process.env.DB_PASSWORD || "null",
    },
    migrations: {
      directory: "./db/migrations",
    },
    directory: "./db/seeds",
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations",
    },
  },
};
