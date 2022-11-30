require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET

const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
}

const jwtKey = secret;

module.exports = async (body) => {
  const token = jwt.sign(
    body,
    jwtKey,
    jwtConfig,
  );
  return token;
}