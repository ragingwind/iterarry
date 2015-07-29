'use strict';
var assert = require('assert');
var Iterarry = require('./');

it('should returns next items', function () {
	var itr = new Iterarry(0, 1, 2, 3, 4, 5);

	assert.strictEqual(itr.next(), 0);
	assert.strictEqual(itr.next(), 1);
	assert.strictEqual(itr.next(), 2);
	assert.strictEqual(itr.next(), 3);
	assert.strictEqual(itr.next(), 4);
	assert.strictEqual(itr.next(), 5);
	assert.strictEqual(itr.next(), 0);
	assert.strictEqual(itr.next(), 1);
	assert.strictEqual(itr.next(), 2);
	assert.strictEqual(itr.next(), 3);
	assert.strictEqual(itr.next(), 4);
	assert.strictEqual(itr.next(), 5);
});

it('should returns prev items', function () {
	var itr = new Iterarry(0, 1, 2, 3, 4, 5);

	assert.strictEqual(itr.prev(), 5);
	assert.strictEqual(itr.prev(), 4);
	assert.strictEqual(itr.prev(), 3);
	assert.strictEqual(itr.prev(), 2);
	assert.strictEqual(itr.prev(), 1);
	assert.strictEqual(itr.prev(), 0);
	assert.strictEqual(itr.prev(), 5);
	assert.strictEqual(itr.prev(), 4);
	assert.strictEqual(itr.prev(), 3);
	assert.strictEqual(itr.prev(), 2);
	assert.strictEqual(itr.prev(), 1);
	assert.strictEqual(itr.prev(), 0);
});
