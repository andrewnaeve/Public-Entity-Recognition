[![travis build](https://img.shields.io/travis/andrewnaeve/Public-Entity-Recognition.svg)](https://travis-ci.org/andrewnaeve/Public-Entity-Recognition)
## Public-Entity-Recognition

This package scans for the longest consecutive string that matches the description of a publicly traded company, and returns the ticker symbol for the most relevant match. 
This might be useful for twitter mining, or fintech applications.

## Installation
This package is distributed via npm:
```
npm install public-entity-recognition
```

## Usage
```javascript
var entity = require('public-entity-recognition');
var scan = entity.per('Toyota Motor said will build a new plant in Baja, Mexico, to build Corolla cars for U.S. NO WAY! Build plant in U.S. or pay big border tax.');
returns { match: 'Toyota Motor', symbol: 'TM', description: 'Toyota Motor Corp Ltd Ord', relevance: 0.4 }
```
## Remaining Work
In the future, I plan to modify the repo to return a full list of matches in order of relevance. 