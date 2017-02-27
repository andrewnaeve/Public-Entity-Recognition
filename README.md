[![travis build](https://img.shields.io/travis/andrewnaeve/Public-Entity-Recognition.svg)](https://travis-ci.org/andrewnaeve/Public-Entity-Recognition)

## Public-Entity-Recognition

This package searches a string for mentions of a publicly-traded entity and brings back the best match's ticker symbol, description and relevance score.
This might be useful for twitter mining, or fintech applications.

## Installation
This package is distributed via npm:
```
npm install public-entity-recognition
```

## Usage
This example scans a tweet by Donald Trump, finds that Toyota Motor is a match, and brings back stock info. 
Note that the package is case sensitive, and only the best match will be retrieved.
```javascript
var entity = require('public-entity-recognition');
var scan = entity.per('Toyota Motor said will build a new plant in Baja, Mexico, to build Corolla cars for U.S. NO WAY! Build plant in U.S. or pay big border tax.');
returns { match: 'Toyota Motor', symbol: 'TM', description: 'Toyota Motor Corp Ltd Ord', relevance: 0.4 }
```
## Remaining Work
In the future, I plan to modify the repo to return a full list of matches in order of relevance