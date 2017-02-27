<img src="https://img.shields.io/travis/andrewnaeve/Public-Entity-Recognition.svg" />
# Public-Entity-Recognition

This is an app that takes input, scans it for the longest consecutive string that matches the description of a publicly traded company, and returns the ticker symbol for the best match. 
This might be useful for twitter mining, or fintech applications.

## Installation
This package is distributed via npm:
```
npm install public-entity-recognition
```

## Usage
```javascript
const entity = require('per');
let scan = entity.per('Toyota Motor said will build a new plant in Baja, Mexico, to build Corolla cars for U.S. NO WAY! Build plant in U.S. or pay big border tax.');
returns 'TM'
```
## Remaining Work
In the future, I plan to modify the repo to return the full title and description of the company with the best match, as well as an array containing lesser matches. 