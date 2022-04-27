const userRepository = require('../repositories/user.js');
const postService = require('./post.js');

exports.getUsers = async () => {
  try {
    const users = await userRepository.getUsers();
    return users;
  } catch(err) {
    console.error(err);
    throw err;
  }
}

exports.getUser = async (id) => {
  try {
    const user = await userRepository.getUser(id);
    const posts = await postService.getPostsByUser(id);
    user.posts = posts;
    return user;
  } catch(err) {
    console.error(err);
    throw err;
  }
}
