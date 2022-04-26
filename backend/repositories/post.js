const { pool } = require('../database/pool.js');

exports.createPost = async (postData) => {
  const currentTime = new Date().toISOString();
  const query = `
    INSERT INTO posts(user_id, title, body, created_at)
    VALUES (
      ${postData.user.id},
      '${postData.title}',
      '${postData.body}',
      '${currentTime}'
    ) RETURNING *`;

  const result = await pool.query(query);
  console.log(result);
  return result.rows[0];
}

exports.getPosts = async () => {
  const query = `
    SELECT
      p.id AS post_id,
      p.title, p.body, p.created_at,
      u.id AS user_id, u.name, u.username
    FROM posts AS p
    JOIN users AS u
    ON p.user_id = u.id
  `;
  const result = await pool.query(query);
  return result.rows;
}

exports.getPost = async (id) => {
  const query = `
    SELECT
      post.id AS post_id, post.title, post.body, post.created_at,
      u.id AS user_id, u.name, u.username
    FROM posts AS post
    JOIN users AS u
    ON post.user_id = u.id
    WHERE post.id = ${id}
  `;
  const result = await pool.query(query);
  return result.rows[0];
}

exports.deletePost = async (id) => {
  const query = `DELETE FROM posts WHERE id = ${id}`;
  await pool.query(query);
}
