const longestPhrase = require("./algorithm").longestPhrase;

exports.per = function(string) {

	let match = longestPhrase(string.trim().replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," "));
	return match[0];

};

console.log(exports.per('Apple'))