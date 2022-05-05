const commentRepository = require('../repositories/comment.js');

exports.createComment = async (commentData) => {
  try {
    const comment = await commentRepository.createComment(commentData);
    return comment;
  } catch(err) {
    console.error(err);
    throw err;
  }
}

exports.getComments = async (postId) => {
  try {
    const comments = (await commentRepository.getComments(postId))
    .map(comment => {
      return {
        id: comment.id,
        name: comment.name,
        body: comment.body,
        created_at: comment.created_at,
        post: {
          id: comment.post_id
        },
        user: {
          id: comment.user_id,
          name: comment.user_name,
          username: comment.username
        }
      }
    });
    return comments;
  } catch(err) {
    console.error(err);
    throw err;
  }
}

exports.deleteComment = async (id) => {
  try {
    await commentRepository.deleteComment(id);
  } catch(err) {
    console.error(err);
    throw err;
  }
}
