'use strict';

var util = require('util');

function Iterarry() {
	Array.call(this);
	Array.prototype.push.apply(this, Array.prototype.slice.call(arguments, 0));
	this._cursor = -1;

	return this;
}

util.inherits(Iterarry, Array);

Iterarry.prototype.next = function () {
  this._cursor = ++this._cursor % this.length;
  return this[this._cursor];
};

Iterarry.prototype.prev = function () {
	if (this._cursor <= 0) {
		this._cursor = this.length - 1;
	} else {
  	this._cursor = (--this._cursor) % this.length;
	}

  return this[this._cursor];
};

module.exports = Iterarry;
