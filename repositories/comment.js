const { pool } = require('../database/pool.js');

exports.createComment = async (commentData) => {
  const currentTime = new Date().toISOString();
  const query = `
    INSERT INTO comments(post_id, user_id, name, body, created_at)
    VALUES (
      ${commentData.post.id},
      ${commentData.user.id},
      '${commentData.name}',
      '${commentData.body}',
      '${currentTime}'
    ) RETURNING *
  `;
  const result = await pool.query(query);
  return result.rows[0];
}

exports.getComments = async (postId) => {
  const query = `
    SELECT
      c.id, c.name, c.body, c.created_at,
      p.id AS post_id,
      u.id AS user_id, u.name AS user_name, u.username
    FROM comments AS c
    JOIN posts AS p
    ON c.post_id = p.id
    JOIN users AS u
    ON c.user_id = u.id
    WHERE c.post_id = ${postId}
    ORDER BY c.created_at DESC
  `;
  const result = await pool.query(query);
  return result.rows;
}

exports.deleteComment = async (id) => {
  const query = `
    DELETE FROM comments
    WHERE id = ${id}
  `;
  await pool.query(query);
}
