const { pool } = require('../database/pool.js');

exports.getUsers = async () => {
  const result = await pool.query('SELECT id, name, username, email FROM users');
  return result.rows;
}
