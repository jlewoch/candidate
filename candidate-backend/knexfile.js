// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port:'3306',
        user: 'root',
        password: '@dobe;Flash',
        database: 'Candidate'
    }
  },
  pool: { min: 0, max: 7 }
};
