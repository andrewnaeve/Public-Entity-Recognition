const stockList = require('./ticker_lists/stockList').stockList;
const longestPhrase = require('./algorithms').longestPhrase;
const findSymbol = require('./algorithms').findSymbol;



exports.isTraded = function(string) {

  let Symbol = longestPhrase(string.trim().replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," "));
  return Symbol[0].Symbol;


};





