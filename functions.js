const stockList = require('./ticker_lists/stockList').stockList;
const longestPhrase = require('./algorithms').longestPhrase;
const findSymbol = require('./algorithms').findSymbol;



exports.isTraded = function(tweet) {

  let tweets = tweet.trim().replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
  let Symbol = longestPhrase(tweets);
  
  if (Symbol === 'blocked') {
    return 'blocked'
  };

  try {
    return Symbol[0].Symbol;
  } catch(error) {
    return "Error 1";
  }

};





