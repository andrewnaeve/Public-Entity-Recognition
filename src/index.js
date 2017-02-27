const longestPhrase = require("./algorithms").longestPhrase;

exports.per = function(string) {

	let Symbol = longestPhrase(string.trim().replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," "));
	return Symbol[0].Symbol;

};
