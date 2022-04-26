const { pool } = require('../database/pool.js');

exports.registerUser = async (user) => {
  const query = `
    INSERT INTO users(name, username, email, password)
    VALUES (
      '${user.name}',
      '${user.username}',
      '${user.email}',
      '${user.password}'
    ) RETURNING *`;

  const result = await pool.query(query);
  return result.rows;
}

exports.getUser = async (email) => {
  const query = `SELECT * FROM users WHERE email = '${email}'`;
  const result = await pool.query(query);
  return result.rows;
}
