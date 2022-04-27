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
      const comments = post.comments.map(comment => {
        return {
          id: comment.f1,
          name: comment.f2,
          body: comment.f3,
          created_at: comment.f4
        };
      });

      return {
        id: post.post_id,
        title: post.title,
        body: post.body,
        created_at: post.created_at,
        user: {
          id: post.user_id,
          name: post.name,
          username: post.username
        },
        comments: comments
      };
    });
    return posts;
  } catch(err) {
    console.error(err);
    throw err;
  }
}

exports.getPostsByUser = async (userId) => {
  try {
    let posts = await postRepository.getPosts();
    posts = posts.map(post => {
      const comments = post.comments.map(comment => {
        return {
          id: comment.f1,
          name: comment.f2,
          body: comment.f3,
          created_at: comment.f4
        };
      });

      return {
        id: post.post_id,
        title: post.title,
        body: post.body,
        created_at: post.created_at,
        user: {
          id: post.user_id,
          name: post.name,
          username: post.username
        },
        comments: comments
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
    const comments = post.comments.map(comment => {
      return {
        id: comment.f1,
        name: comment.f2,
        body: comment.f3,
        created_at: comment.f4
      };
    });

    return {
      id: post.post_id,
      title: post.title,
      body: post.body,
      created_at: post.created_at,
      user: {
        id: post.user_id,
        name: post.name,
        username: post.username
      },
      comments: comments
    };
  } catch(err) {
    console.error(err);
    throw err;
  }
}

exports.deletePost = async (id) => {
  try {
    await postRepository.deletePost(id);
  } catch(err) {
    console.error(err);
    throw err;
  }
}
