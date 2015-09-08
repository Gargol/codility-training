var test = require('tape'),
  countTriangles = require('./count-triangles');

test('should calculate correct number of triangles for base case', function (t) {
  var input = [10, 2, 5, 1, 8, 12];

  t.equal(countTriangles(input), 4, 'returns four pairs for this case as given in samples');
  t.end();
});

test('should calculate correct number of triangles for simple one variant case', function (t) {
  var input = [5, 3, 3];

  t.equal(countTriangles(input), 1, 'returns one pair for this case');
  t.end();
});

test('should not return anything for array that has less then three elements', function (t) {
  var input = [3, 4];

  t.equal(countTriangles(input), 0, 'should not find any triangle matches');
  t.end();
});

test('should not count 0 length elements', function (t) {
  var input = [3, 4, 0, 0, 0, 2];

  t.equal(countTriangles(input), 1);
  t.end();
});
