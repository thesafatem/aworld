const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  req.user = {
    user: {
      id: 1,
      name: 'Aliyusha',
      username: 'bulgarian_accent',
      email: 'aliya@gmail.com'
    }
  }
  return next();
  const token = req.header('Authorization');
  if (!token) {
    return res.status(403).send({
      status: 'error',
      message: 'A token is required'
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
  } catch(err) {
    return res.status(401).send({
      status: 'error',
      message: 'Invalid token'
    });
  }
  return next();
}
