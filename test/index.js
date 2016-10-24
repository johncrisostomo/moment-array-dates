var should = require('chai').should(),
    expect = require('chai').expect,
    getDateRange = require('../index');

describe('getDateRange', function() {
  it('returns an array of dates based on startDate and end Date', function() {
    getDateRange('09/01/2016', '09/30/2016').should.be.a('Array');
  });

  it('should throw an error for invalid startDate', function() {
    expect(function () { getDateRange('malformed date', '09/30/2016') }).to.throw(Error);
  });

  it('should throw an error for invalid endDate', function() {
    expect(function() { getDateRange('09/01/2016', 'malformed date') }).to.throw(Error);
  });

  it('should return the correct array based on the format', function() {
    const correctOutput = [ 'Sep 05', 'Sep 04', 'Sep 03', 'Sep 02', 'Sep 01' ];

    getDateRange('09/01/2016', '09/05/2016', 'MMM DD').should.be.eql(correctOutput);
  });

  it('should return an array sorted in ascending order if last param is true", function() {
    const correctOutput = [ 'Sep 01', 'Sep 02', 'Sep 03', 'Sep 04', 'Sep 05' ];

    getDateRange('09/01/2016', '09/05/2016', 'MMM DD', true).should.be.eql(correctOutput);
  });
});
