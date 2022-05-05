const userService = require('../services/user.js');

exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).send(users);
  } catch(err) {
    res.status(400).send({
      status: 'error',
      message: err.message
    })
  }
}

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userService.getUser(id);
    res.status(200).send(user);
  } catch(err) {
    res.status(400).send({
      status: 'error',
      message: err.message
    });
  }
}
