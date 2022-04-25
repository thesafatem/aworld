const userRepository = require('../repositories/user.js');

exports.getUsers = async () => {
  return await userRepository.getUsers();
}
