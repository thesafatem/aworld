const postRepository = require('../repositories/post');

exports.createPost = async (postData) => {
  try {
    const post = await postRepository.createPost(postData);
    return post;
  } catch(err) {
    console.error(err);
    throw err;
  }
}

exports.getPosts = async () => {
  try {
    let posts = await postRepository.getPosts();
    posts = posts.map(post => {
      return {
        id: post.post_id,
        title: post.title,
        body: post.body,
        created_at: post.created_at,
        user: {
          id: post.user_id,
          name: post.name,
          username: post.username
        }
      };
    });
    return posts;
  } catch(err) {
    console.error(err);
    throw err;
  }
}

exports.getPost = async (id) => {
  try {
    const post = await postRepository.getPost(id);
    return {
      id: post.post_id,
      title: post.title,
      body: post.body,
      created_at: post.created_at,
      user: {
        id: post.user_id,
        name: post.name,
        username: post.username
      }
    };
  } catch(err) {
    console.error(err);
    throw err;
  }
}

exports.deletePost = async (userId, postId) => {
  try {
    await postRepository.deletePost(id);
  } catch(err) {
    console.error(err);
    throw err;
  }
}
