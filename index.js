var moment = require('moment');

module.exports = function(startDate, endDate, dateFormat, ascending) {
  var dates = [];
  ascending = ascending || false;

  var start = moment(new Date(startDate));
  var end = moment(new Date(endDate));

  var difference = end.diff(start, 'days');

  if (!start.isValid() || !end.isValid() || difference <= 0) {
    throw Error("Invalid dates specified. Please check format and or make sure that the dates are different");
  }

  dates.push(end.format(dateFormat));

  for(var i = 0; i < difference; i++) {
    dates.push(end.subtract(1, 'd').format(dateFormat));
  }
  
  if(ascending) {
    return dates.reverse();
  }

  return dates;
}
