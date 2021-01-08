const moment = require('moment');
// Get todays date in correct format
exports.getDate = () => {
  const format = 'YYYY-MM-DD';
  const date = new Date();
  return moment(date).format(format);
};

exports.checkFormat = (date) => /^\d{4}-\d{1,2}-\d{1,2}$/.test(date);
