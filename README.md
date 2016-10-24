# Moment Array Dates

A small utility function that accepts two dates, and returns an array of formatted date strings.
### Installation

```
npm install --save moment-array-dates
```

### Usage

Import date range array:
```
var getDateRange = require('moment-array-dates');
```

Pass start date and date range:
```
getDateRange('09/01/2016', '09/30/2016')
```

(optional) Pass format as third parameter:
```
getDateRange('09/01/2016', '09/30/2016', 'dddd, MMMM Do YYYY, h:mm:ss a')
```
Please refer to the Momentjs documentation for the formatting options

(optional) Pass `true` as the last parameter for ascending order:
```
getDateRange('09/01/2016', '09/30/2016, 'MMM DD', true)
```
### Todos

 - Write more tests

License
----

GPL-v3
