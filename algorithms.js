const stockList = require('./ticker_lists/stockList').stockList;
const minRelevance = .32;
// set relevance to return matching phrases that are a certain percentage of  company description
// possible overal character length more relevant than word chunks
module.exports.longestPhrase = function(twee) {
  
// this block finds  longest consecutive phrase from a tweet that is contained by a company description 
  let results = [];
  let tweet = twee.split(' ');
  let consec = [{Longest: '', Symbol: '', Description: ''}];
 for(var k = 0; k < stockList.length; k++) {
    let companyString = stockList[k].Description;
    for (var i=0; i < tweet.length; i++) {
      let pat1 = new RegExp('\\b('+tweet[i]+')\\b');
      if (pat1.test(companyString) && tweet[i][0] === tweet[i][0].toUpperCase()) {
        var t = tweet[i];
        for (var j=i+1; j < tweet.length-1; j++) {
          let pat2 = new RegExp('\\b('+tweet[i] + ' ' + tweet[j]+')\\b');
          if (pat2.test(companyString)) {
            t += ' ' + tweet[j];
          } else {
            break;
          };
        };

      let relevance = t.split(' ').length / stockList[k].Description.split(' ').length;
      if (relevance > minRelevance) {
        let matchObject = { Longest: t, Symbol: stockList[k].Symbol, Description: stockList[k].Description, Relevance: relevance};
        for (var p = 0; p < results.length; p++) {
          if results.length === 0 {
            results.unshift(matchObject)
            break;
          } else if (matchObject.Longest.split(' ').length >= results[p].Longest.split(' ').length) {
            if(matchObject.Relevance >= results[p].Relevance) {
              results.splice(i, 0, matchObject)
              break;
            } else {
              results.splice(i+1, 0, matchObject)
              break;
            };
          };
        };
        results.push(matchObject);
      };
    };
  };
  return results;
};





