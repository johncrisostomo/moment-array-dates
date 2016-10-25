# Moment Array Dates

## A small utility function that accepts two dates, and returns an array of formatted date strings, including the inputs.

[![Build Status](https://travis-ci.org/johncrisostomo/moment-array-dates.svg?branch=master)](https://travis-ci.org/johncrisostomo/moment-array-dates)
[![Coverage Status](https://coveralls.io/repos/github/johncrisostomo/moment-array-dates/badge.svg?branch=master)](https://coveralls.io/github/johncrisostomo/moment-array-dates?branch=master)
[![Code Climate](https://codeclimate.com/github/johncrisostomo/moment-array-dates/badges/gpa.svg)](https://codeclimate.com/github/johncrisostomo/moment-array-dates)

### Installation

```
npm install --save moment-array-dates
```

### Usage

#### Import date range array:
```
var getDateRange = require('moment-array-dates');
```

#### Pass start date and date range:
```
getDateRange('09/01/2016', '09/30/2016')
```

#### (optional) Pass format as third parameter:
```
getDateRange('09/01/2016', '09/30/2016', 'dddd, MMMM Do YYYY, h:mm:ss a')
```
Please refer to the [Momentjs](http://momentjs.com/docs/#/displaying/format/) documentation for formatting options

#### (optional) Pass `true` as the last parameter for ascending order:
```
getDateRange('09/01/2016', '09/30/2016, 'MMM DD', true)
```
### Todos

 - Write more tests

License
----

GPL-v3
