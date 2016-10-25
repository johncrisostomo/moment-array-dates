var should = require('chai').should(),
    expect = require('chai').expect,
    dateArray = require('../index'),
    moment = require('moment');

describe('dateArray.range', function() {
  it('returns an array of dates based on startDate and end Date', function() {
    dateArray.range('09/01/2016', '09/30/2016').should.be.a('Array');
  });

  it('should throw an error for invalid startDate', function() {
    expect(function () { dateArray.range('malformed date', '09/30/2016') }).to.throw(Error);
  });

  it('should throw an error for invalid endDate', function() {
    expect(function() { dateArray.range('09/01/2016', 'malformed date') }).to.throw(Error);
  });

  it('should return the correct array based on the format', function() {
    const correctOutput = [ 'Sep 05', 'Sep 04', 'Sep 03', 'Sep 02', 'Sep 01' ];

    dateArray.range('09/01/2016', '09/05/2016', 'MMM DD').should.be.eql(correctOutput);
  });

  it('should return an array sorted in ascending order if last param is true', function() {
    const correctOutput = [ 'Sep 01', 'Sep 02', 'Sep 03', 'Sep 04', 'Sep 05' ];

    dateArray.range('09/01/2016', '09/05/2016', 'MMM DD', true).should.be.eql(correctOutput);
  });
});

describe('dateArray.lastNDays', function() {
  it('returns an array of dates based on number of dates specified', function() {
    dateArray.lastNDays(5).should.be.a('Array');
  });

  it('should throw an error for invalid number of days', function() {
    expect(function () { dateArray.lastNDays(-1) }).to.throw(Error);
    expect(function () { dateArray.lastNDays(0) }).to.throw(Error);
  });

  it('should return the correct array based on the format', function() {
    var start = moment(new Date().setHours(0, 0, 0, 0)).subtract(5, 'd');
    var end = moment(new Date().setHours(0, 0, 0, 0)).subtract(1, 'd');

    const correctOutput = dateArray.range(start, end, 'MMM DD');

    dateArray.lastNDays(5, 'MMM DD').should.be.eql(correctOutput);
  });

  it('should return an array sorted in ascending order if last param is true', function() {
    var start = moment(new Date().setHours(0, 0, 0, 0)).subtract(5, 'd');
    var end = moment(new Date().setHours(0, 0, 0, 0)).subtract(1, 'd');

    const correctOutput = dateArray.range(start, end, 'MMM DD', true);

    dateArray.lastNDays(5, 'MMM DD', true).should.be.eql(correctOutput);
  });
});

describe('dateArray.nextNDays', function() {
  it('returns an array of dates based on number of dates specified', function() {
    dateArray.nextNDays(5).should.be.a('Array');
  });

  it('should throw an error for invalid number of days', function() {
    expect(function () { dateArray.nextNDays(-1) }).to.throw(Error);
    expect(function () { dateArray.nextNDays(0) }).to.throw(Error);
  });

  it('should return the correct array based on the format', function() {
    var start = moment(new Date().setHours(0, 0, 0, 0)).add(1, 'd');
    var end = moment(new Date().setHours(0, 0, 0, 0)).add(5, 'd');

    const correctOutput = dateArray.range(start, end, 'MMM DD');

    dateArray.nextNDays(5, 'MMM DD').should.be.eql(correctOutput);
  });

  it('should return an array sorted in ascending order if last param is true', function() {
    var start = moment(new Date().setHours(0, 0, 0, 0)).add(1, 'd');
    var end = moment(new Date().setHours(0, 0, 0, 0)).add(5, 'd');

    const correctOutput = dateArray.range(start, end, 'MMM DD', true);

    dateArray.nextNDays(5, 'MMM DD', true).should.be.eql(correctOutput);
  });
});
