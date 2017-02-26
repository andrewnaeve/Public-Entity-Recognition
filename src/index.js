

const longestPhrase = require('../algorithms').stocks;
const stockList = require('../ticker_lists/stockList').stockList;

module.exports = {
  all: stockList;
  stocks: stocks(string);
};


console.log(stocks('I like Apple'))