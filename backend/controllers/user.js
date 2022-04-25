const userService = require('../services/user.js');

exports.getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.send(users);
}
