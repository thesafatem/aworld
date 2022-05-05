const postService = require('../services/post.js');

exports.createPost = async (req, res) => {
  const { user } = req.user;
  const { title, body } = req.body;
  try {
    const post = await postService.createPost({
      title: title,
      body: body,
      user: {
        id: user.id
      }
    });
    res.status(201).send(post);
  } catch(err) {
    res.status(400).send({
      status: 'error',
      message: err.message
    });
  }
}

exports.getPosts = async (req, res) => {
  try {
    const posts = await postService.getPosts();
    res.status(200).send(posts);
  } catch(err) {
    res.status(400).send({
      status: 'error',
      message: err.message
    });
  }
}

exports.getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await postService.getPost(id);
    res.status(200).send(post);
  } catch(err) {
    res.status(400).send({
      status: 'error',
      message: err.message
    });
  }
}

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    await postService.deletePost(postId);
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
