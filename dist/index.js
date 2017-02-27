"use strict";

var stockList = require("./ticker_lists/stockList").stockList;
var per = require("./functions").per;

var mainExport = {
	all: stockList,
	per: per(string),
	longestPhrase: longestPhrase(string)
};

module.exports = mainExport;