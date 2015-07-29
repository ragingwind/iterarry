# iterarry

> Iterator for Array until ES2015, It will return element infinity


## Install

```
$ npm install --save iterarry
```


## Usage

```js
var Array = Array('iterarry');
var arr = new Array();
var itr;

arr.push(1, 2, 3, 4, 5);
itr = arr.iterator();

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
