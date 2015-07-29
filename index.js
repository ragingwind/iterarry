'use strict';

var util = require('util');

function Iterator(array) {
	this._array = array;
	this._cursor = -1;

	return this;
}

util.inherits(Iterator, Array);

Iterator.prototype.next = function () {
  this._cursor = ++this._cursor % this._array.length;
  return this._array[this._cursor];
};

Iterator.prototype.prev = function () {
	if (this._cursor <= 0) {
		this._cursor = this._array.length - 1;
	} else {
  	this._cursor = (--this._cursor) % this._array.length;
	}

  return this._array[this._cursor];
};

Array.prototype.iterator = function () {
	return new Iterator(this);
};

module.exports = Array;
