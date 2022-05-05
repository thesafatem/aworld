const { pool } = require('../database/pool.js');

exports.getUsers = async () => {
  const query = `
    SELECT id, name, username, email FROM users
  `;
  const result = await pool.query(query);
  return result.rows;
}

exports.getUser = async (id) => {
  const query = `
    SELECT id, name, username, email FROM users
    WHERE id = ${id}
  `;
  console.log(query);
  const result = await pool.query(query);
  return result.rows[0];
}
