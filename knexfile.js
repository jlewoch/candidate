// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'jlewoch',
      password: 'Dragons21',
      database: 'Candidate'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

  ssl: true,
  pool: { min: 0, max: 7 }
}
