const authService = require('../services/auth.js');

exports.register = async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
    const user = await authService.registerUser({
      name: name,
      username: username,
      email: email,
      password: password
    });
    res.status(201).json(user);
  } catch(err) {
    res.status(400).send({
      status: 'error',
      message: err.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    console.log(req.body, req.headers, req.params, req.query)
    const { email, password } = req.body;
    const user = await authService.login({
      email: email,
      password: password
    });
    res.status(200).json(user);
  } catch(err) {
    res.status(400).send({
      status: 'error',
      message: err.message
    });
  }
}
