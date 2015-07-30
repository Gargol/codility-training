var test = require('tape'),
  maxSlice = require('./max-slice-sum');

test('max slice is calculated correctly for sample input', function (t) {
  var testInput = [3, 2, -6, 4, 0];
  t.equal(maxSlice(testInput), 5, 'the slice of (0, 1) has the largest sum 5');
  t.end();
});

test('max slice is calculated correctly for sample input', function (t) {
  var testInput = [3, 2, -5, 4, 7, 0];
  t.equal(maxSlice(testInput), 11, 'the slice of (4, 7) has the largest sum of 11');
  t.end();
});


test('for an array with one element it should return that element', function (t) {
  var testInput = [-134];
  t.equal(maxSlice(testInput), -134, 'the slice of one element should be that element');
  t.end();
});

test('for an array with one element it should return that element', function (t) {
  var testInput = [-5, -2, -3, -5, -1, -25];
  t.equal(maxSlice(testInput), -1, 'should return the smallest negative number');
  t.end();
});

test('for an input with only zeros should return zero', function (t) {
  var testInput = [0, 0, 0];
  t.equal(maxSlice(testInput), 0, 'should be zero for only zero inputs')
  t.end();
});
