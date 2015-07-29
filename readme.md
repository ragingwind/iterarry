# iterarry [![Build Status](https://travis-ci.org/ragingwind/iterarry.svg?branch=master)](https://travis-ci.org/ragingwind/iterarry)

> Iterator for Array until ES2015, It will return element infinity


## Install

```
$ npm install --save iterarry
```


## Usage

```js
var Iterarry = require('iterarry');
var itr = new Iterarry([1, 2, 3, 4, 5]);

console.log(itr.next());
//=> 0

console.log(itr.prev());
//=> 1
```

## API

### Iterarry(arr)

You can create an Array supporting iterator

### next()

Returns next item

### prev()

Returns previous item

## License

MIT © [ragingwind](http://ragingwind.me)
