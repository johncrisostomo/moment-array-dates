# Date Range Array

A function that returns an array of dates based on two dates entered and a format.

### Installation

```sh
$ cd dillinger
$ npm install --save date-range-array
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

(optional) Pass format as third parameter:
```
getDateRange('09/01/2016', '09/30/2016', 'dddd, MMMM Do YYYY, h:mm:ss a')
```

### Todos

 - Write Tests

License
----

GPL-v3
