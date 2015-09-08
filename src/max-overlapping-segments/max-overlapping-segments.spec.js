var test = require('tape'),
  maxSlice = require('./max-overlapping-segments');

test('max number of non-overlaps is calculated correctly for sample input', function (t) {
  var testInputA = [1, 3, 7, 9, 9],
  testInputB = [5,6,8,9,10];
  t.equal(maxSlice(testInput), 5, 'the slice of (0, 1) has the largest sum 5');
  t.end();
});
