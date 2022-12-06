const httpErrorMiddleware = (error, _req, res, _next) => {
  const { status, message } = error;
  res.status(status || 500).json({ message });
};

module.exports = httpErrorMiddleware;