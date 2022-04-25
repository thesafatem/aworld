const { pool } = require('../database/pool.js');

exports.getUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
}
