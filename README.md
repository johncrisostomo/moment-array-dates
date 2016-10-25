# Moment Array Dates

## A small utility function that returns an array of formatted date strings.

[![Build Status](https://travis-ci.org/johncrisostomo/moment-array-dates.svg?branch=master)](https://travis-ci.org/johncrisostomo/moment-array-dates)
[![Coverage Status](https://coveralls.io/repos/github/johncrisostomo/moment-array-dates/badge.svg?branch=master)](https://coveralls.io/github/johncrisostomo/moment-array-dates?branch=master)
[![Code Climate](https://codeclimate.com/github/johncrisostomo/moment-array-dates/badges/gpa.svg)](https://codeclimate.com/github/johncrisostomo/moment-array-dates)

### Installation

```
npm install --save moment-array-dates
```

### Usage

#### Import package:
```
var dateArray = require('moment-array-dates');
```
### Functions
#### .range(*startDate*, *endDate*, *format*, *ascending*)
Returns an array of formatted dates **including** the start and end dates. Format and the last boolean parameter is optional.
```
dateArray.range('09/01/2016', '09/05/2016', 'MMM DD', true)
```
>> Output: `[ 'Sep 01', 'Sep 02', 'Sep 03', 'Sep 04', 'Sep 05' ]`

#### .lastNDays(*number of days*, *format*, *ascending*)
Returns an array of formatted dates from the last *n* days **excluding** today. Format and the last boolean parameter is optional.
```
# today: October 25, 2016
dateArray.lastNDays(5, 'MMM DD', true)
```
>> Output: `[ 'Oct 20', 'Oct 21', 'Oct 22', 'Oct 23', 'Oct 24' ]`
#### .nextNDays(*number of days*, *format*, *ascending*)
Returns an array of formatted dates from the next *n* days **excluding** today. Format and the last boolean parameter is optional.
```
# today: October 25, 2016
dateArray.nextNDays(5, 'MMM DD', true)
```
>> Output: `[ 'Oct 26', 'Oct 27', 'Oct 28', 'Oct 29', 'Oct 30' ]`

#### Please refer to the [Momentjs](http://momentjs.com/docs/#/displaying/format/) documentation for formatting options

### Todos

 - Do method chaining / piping for advanced operations

License
----

GPL-v3
