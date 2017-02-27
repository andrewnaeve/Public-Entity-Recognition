'use strict';

var stockList = require('./ticker_lists/stockList').stockList;
var longestPhrase = require('./algorithms').longestPhrase;
var findSymbol = require('./algorithms').findSymbol;

exports.isTraded = function (string) {

  var _Symbol = longestPhrase(string.trim().replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " "));
  return _Symbol[0].Symbol;
};