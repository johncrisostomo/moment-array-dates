const moment = require('moment');

module.exports = function(startDate, endDate, dateFormat) {
  let dates = [];

  let start = moment(new Date(startDate));
  let end = moment(new Date(endDate));

  let difference = end.diff(start, 'days');

  if (!start.isValid() || !end.isValid() || difference <= 0) {
    throw Error("Invalid dates specified. Please check format and or make sure that the dates are different");
  }

  dates.push(end.format(dateFormat));

  for(let i = 0; i < difference; i++) {
    dates.push(end.subtract(1, 'd').format(dateFormat));
  }

  return dates;
}
