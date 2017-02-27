const expect = require('chai').expect;
const per = require('../src/index').per;

// Search function tests

// se tests should find ticker symbols
describe('search algorithm', function () {
  let traded = per("General Motors is sending Mexican made model of Chevy Cruze to U.S. car dealers-tax free across border. Make in U.S.A.or pay big border tax!");
  it('should find  correct stock symbol', function() {
    expect(traded).to.deep.equal('GM');
  });
});

describe('search algorithm', function () {
  let traded = per("Rexnord of Indiana is moving to Mexico and rar viciously firing all of its 300 workers. This is happening all over our country. No more!");
  it('should find  correct stock symbol', function() {
    expect(traded).to.deep.equal('RXN');
  });
});

describe('search algorithm', function () {
  let traded = per("Boeing is building a brand new 747 Air Force One for future presidents, but costs are out of control, more than $4 billion. Cancel order!");
  it('should find  correct stock symbol', function() {
    expect(traded).to.deep.equal('BA');
  });
});

describe('search algorithm', function () {
  let traded = per("Toyota Motor said will build a new plant in Baja, Mexico, to build Corolla cars for U.S. NO WAY! Build plant in U.S. or pay big border tax.");
  it('should find  correct stock symbol', function() {
    expect(traded).to.deep.equal('TM');
  });
});

describe('search algorithm', function () {
  let traded = per("Boycott all Apple products until such time as Apple gives cellphone info to authorities regarding radical Islamic terrorist couple from Cal.");
  it('should find  correct stock symbol', function() {
    expect(traded).to.deep.equal('AAPL');
  });
});

// se should not find ticker symbols

describe('search algorithm', function () {
  let traded = per("company");
  it('should not find a ticker symbol', function() {
    expect(traded).to.deep.equal('');
  });
});

describe('search algorithm', function () {
  let traded = per("Getting ready to leave for Melbourne, Florida. See you all soon!");
  it('should not find a ticker symbol', function() {
    expect(traded).to.deep.equal('');
  });
});
describe('search algorithm', function () {
  let traded = per("Don't believe  main stream (fake news) media. White House is running VERY WELL. I inherited a MESS and am in  process of fixing it.");
  it('should not find a ticker symbol', function() {
    expect(traded).to.deep.equal('');
  });
});
describe('search algorithm', function () {
  let traded = per("One of  most effective press conferences I've ever seen! says Rush Limbaugh. Many agree.Yet FAKE MEDIA  calls it differently! Dishonest");
  it('should not find a ticker symbol', function() {
    expect(traded).to.deep.equal('');
  });
});




