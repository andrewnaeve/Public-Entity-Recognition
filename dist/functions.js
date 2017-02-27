"use strict";

var longestPhrase = require("./algorithms").longestPhrase;

exports.per = function (string) {

	var _Symbol = longestPhrase(string.trim().replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " "));
	return _Symbol[0].Symbol;
};