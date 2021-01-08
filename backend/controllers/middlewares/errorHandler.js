// eslint-disable-next-line no-unused-vars
exports.errorHandler = ((error, req, res, next) => {
  const { statusCode, message, errors } = error;
  let code;

  if (!statusCode) {
    code = 500;
  } else {
    code = statusCode;
  }
  // array of errors
  if (errors) {
    return res.status(code).json({ message, errors });
  }

  // single error
  return res.status(code).json({ message });
});
