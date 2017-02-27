const longestPhrase = require("../algorithms").stocks;
const stockList = require("./ticker_lists/stockList").stockList;
const isTraded = require("./functions").isTraded;

module.exports = {
	all: stockList,
	stocks: isTraded(string)
};