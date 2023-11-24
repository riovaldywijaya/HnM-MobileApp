const errorHandler = (err, req, res, next) => {
  console.log(err, '<------------ ini di error handler');
  switch (err.name) {
    case '':
      break;

    default:
      res.status(500).json({ message: 'Internal Server Error' });
      break;
  }
};

module.exports = errorHandler;
