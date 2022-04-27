require('dotenv').config();
const authRepository = require('../repositories/auth.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registerUser = async (userData) => {
  try {
    const { password } = userData;
    const encryptedPassword = await bcrypt.hash(password, 10);
    userData.password = encryptedPassword;
    const [ user ] = await authRepository.registerUser(userData);
    const token = jwt.sign(user, process.env.TOKEN_KEY, {expiresIn: '2h'});
    user.token = token;
    return user;
  } catch(err) {
    console.error(err);
    throw err;
  }
}

exports.login = async (userData) => {
  try {
    const { email, password } = userData;
    const [ user ] = await authRepository.getUser(email);
    const isUser = user && await bcrypt.compare(password, user.password);

    if (!isUser) {
      throw new Error('invalid credentials');
    }

    const token = jwt.sign({user}, process.env.TOKEN_KEY, { expiresIn: '2h' });
    user.token = token;
    return user;
  } catch(err) {
    console.error(err);
    throw err;
  }
}
