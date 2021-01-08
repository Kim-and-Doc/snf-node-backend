exports.basicError = (message, code) => {
  const error = new Error(message);
  error.statusCode = code;
  return error;
};

exports.arrayError = (message, code, errors) => {
  const error = new Error(message);
  error.statusCode = code;
  error.errors = errors.toArray();
  return error;
};
