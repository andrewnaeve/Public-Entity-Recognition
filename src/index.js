const stockList = require("./ticker_lists/stockList").stockList;
const per = require("./functions").per;

const mainExport = {
	all: stockList,
	per: per(string),
	longestPhrase: longestPhrase(string)
};

module.exports = mainExport;