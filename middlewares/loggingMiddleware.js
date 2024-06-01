const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

const responseLogger = (req, res, next) => {
  const originalSend = res.send;
  res.send = function (body) {
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.url} ${res.statusCode}`
    );
    originalSend.call(this, body);
  };
  next();
};

module.exports = {
  requestLogger,
  responseLogger,
};
