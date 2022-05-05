const commentService = require('../services/comment.js');

exports.createComment = async (req, res) => {
  const { postId } = req.query;
  const { user } = req.user;
  const { name, body } = req.body;
  try {
    const post = await commentService.createComment({
      name: name,
      body: body,
      post: {
        id: postId,
      },
      user: {
        id: user.id
      }
    });
    res.status(201).send(post);
  } catch(err) {
    res.status(400).send({
      status: 'error',
      message: err.message
    })
  }
}

exports.getComments = async (req, res) => {
  const { postId } = req.query;
  try {
    const comments = await commentService.getComments(postId);
    res.status(200).send(comments);
  } catch(err) {
    res.status(400).send({
      status: 'error',
      message: err.message
    });
  }
}

exports.deleteComment = async (req, res) => {
  const id = req.params.id;
  try {
    await commentService.deleteComment(id);
    res.status(200).send({
      status: 'ok'
    });
  } catch(err) {
    res.status(400).send({
      status: 'error',
      message: err.message
    })
  }
}
