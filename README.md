# Moment Array Dates

A small utility function that returns an array of dates based on two dates entered and a format.

### Installation

```
npm install --save date-range-array
```

### Usage

Import date range array:
```
var getDateRange = require('date-range-array');
```

Pass start date and date range:
```
getDateRange('09/01/2016', '09/30/2016')
```

(optional) Pass format as fourth parameter:
```
getDateRange('09/01/2016', '09/30/2016', 'dddd, MMMM Do YYYY, h:mm:ss a')
```
Please refer to the Momentjs documentation for the formatting options

### Todos

 - Write Tests

License
----

GPL-v3
