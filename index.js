var moment = require('moment');

function range(startDate, endDate, dateFormat, ascending) {
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

function lastNDays(days, dateFormat, ascending) {
  if (days <= 0) {
    throw Error("Invalid number of days specified. Please ensure a non-zero, positive integer for the days");
  }

  dates = [];

  ascending = ascending || false;

  var start = moment(new Date().setHours(0, 0, 0, 0)).subtract(days, 'd');
  var end = moment(new Date().setHours(0, 0, 0, 0));

  var difference = end.diff(start, 'days');

  for(var i = 0; i < difference; i++) {
    dates.push(end.subtract(1, 'd').format(dateFormat));
  }

  if (ascending) {
    return dates.reverse();
  }

  return dates;
}

function nextNDays(days, dateFormat, ascending) {
  if (days <= 0) {
    throw Error("Invalid number of days specified. Please ensure a non-zero, positive integer for the days");
  }

  dates = [];

  ascending = ascending || false;

  var start = moment(new Date().setHours(0, 0, 0, 0)).add(1, 'd');
  var end = moment(new Date().setHours(0, 0, 0, 0)).add(days + 1, 'd');

  var difference = end.diff(start, 'days');

  for(var i = 0; i < difference; i++) {
    dates.push(end.subtract(1, 'd').format(dateFormat));
  }

  if (ascending) {
    return dates.reverse();
  }

  return dates;
}

module.exports = {
  rangeArray: range,
  lastNDays: lastNDays,
  nextNDays: nextNDays
}
