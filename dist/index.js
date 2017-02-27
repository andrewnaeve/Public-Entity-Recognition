"use strict";

var longestPhrase = require("../algorithms").stocks;
var stockList = require("./ticker_lists/stockList").stockList;
var isTraded = require("./functions").isTraded;

module.exports = {
	all: stockList,
	stocks: isTraded(string)
};