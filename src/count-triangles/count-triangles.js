function solution(A) {
  if (A.length < 3) return 0;

  var totalTriangleCount = 0;
  A = A.sort(function (a, b) {
    return a - b;
  });


  for (var p = 0; p < A.length; p++) {
    if(A[p] === 0) continue;

    for (var q = p + 1; q < A.length; q++) {
      var r = q;
      while (r < A.length && A[p] + A[q] > A[r]) {
        r +=1;
      }
      totalTriangleCount += r - q - 1;
    }
  }

  return totalTriangleCount;
}

module.exports = solution;
