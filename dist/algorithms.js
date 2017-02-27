"use strict";

var stockList = require("./ticker_lists/stockList").stockList;
var minRelevance = .3;
// set relevance to return matching phrases that are a certain percentage of  company description
// possible overal character length more relevant than word chunks
module.exports.longestPhrase = function (string) {

	// this block finds  longest resultsutive phrase from a phrase that is contained by a company description 
	var results = [{ Longest: "", Symbol: "", Description: "", Relevance: 0 }];
	var phrase = string.split(" ");

	for (var k = 0; k < stockList.length; k++) {
		var companyString = stockList[k].Description;
		for (var i = 0; i < phrase.length; i++) {
			var pat1 = new RegExp("\\b(" + phrase[i] + ")\\b");
			if (pat1.test(companyString) && phrase[i][0] === phrase[i][0].toUpperCase()) {
				var t = phrase[i];
				for (var j = i + 1; j < phrase.length - 1; j++) {
					var pat2 = new RegExp("\\b(" + phrase[i] + " " + phrase[j] + ")\\b");
					if (pat2.test(companyString)) {
						t += " " + phrase[j];
					} else {
						break;
					}
				}

				var relevance = t.split(" ").length / stockList[k].Description.split(" ").length;
				var matchObject = { Longest: t, Symbol: stockList[k].Symbol, Description: stockList[k].Description, Relevance: relevance };

				if (results[0].Longest.length < t.length && matchObject.Longest.length / companyString.length > minRelevance) {
					results[0] = matchObject;
				} else if (results[0].Longest.length === t.length) {
					if (results[0].Longest.split(" ").length / results[0].Description.split(" ").length < matchObject.Longest.split(" ").length / matchObject.Description.split(" ").length) {
						results[0] = matchObject;
					}
				}
			}
		}
	}
	return results;
};