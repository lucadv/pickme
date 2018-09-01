# Overview

A module that, given a list of elements, randomly pick up one and return it. The list must contain elements of type number, string or boolean. It can contain duplicated elements and elements of different types.

## Usage

```javascript
const Pickme = require('random-picker');
const picked = new Pickme(['a', 'b', 'c']).pickOne(); // will be one of a, b or c
```