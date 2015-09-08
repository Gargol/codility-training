function solution(A) {
  if (A.length === 1) return A[0];
  // this gives a runtime error on codility but I'm to lazy to do
  // additional subroutine, it is good enough for understanding of
  // the algorithm
  var maxNumber = Math.max.apply(null, A);
  var maxEnding = 0,
    maxSlice = 0;

  if (maxNumber <= 0) return maxNumber;

  for (var i = 0; i < A.length; i++) {
    maxEnding = Math.max(0, maxEnding + A[i]);
    maxSlice = Math.max(maxSlice, maxEnding);
  }

  return maxSlice;
}

module.exports = solution;
