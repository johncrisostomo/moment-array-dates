var should = require('chai').should(),
    getDateRange = require('../index');

describe('getDateRange', function() {
  it('returns an array of dates based on startDate and end Date', function() {
    getDateRange('09/01/2016', '09/30/2016').should.be.a('Array');
  });

  it('should return the correct array based on the format', function() {
    const correctOutput = [ 'Sep 30',
      'Sep 29',
      'Sep 28',
      'Sep 27',
      'Sep 26',
      'Sep 25',
      'Sep 24',
      'Sep 23',
      'Sep 22',
      'Sep 21',
      'Sep 20',
      'Sep 19',
      'Sep 18',
      'Sep 17',
      'Sep 16',
      'Sep 15',
      'Sep 14',
      'Sep 13',
      'Sep 12',
      'Sep 11',
      'Sep 10',
      'Sep 09',
      'Sep 08',
      'Sep 07',
      'Sep 06',
      'Sep 05',
      'Sep 04',
      'Sep 03',
      'Sep 02',
      'Sep 01' ];

    getDateRange('09/01/2016', '09/30/2016', 'MMM DD').should.be.eql(correctOutput);
  });
});
