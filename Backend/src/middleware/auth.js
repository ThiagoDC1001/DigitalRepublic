require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if(!authorization) return res.status(401).json({ message: 'Token not found'})
    const verify = jwt.verify(authorization, jwtKey);

    req.id = verify.id
  } catch(err) {
    res.status(401).json({message: 'Expired or invalid token'});
  }
};