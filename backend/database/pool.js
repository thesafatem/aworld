const { Pool } = require('pg');

exports.pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'aworld',
  user: 'admin',
  password: 'password'
});
