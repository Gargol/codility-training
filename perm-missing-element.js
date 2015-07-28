function solution(A) {
  if(A.length === 0) return 1;
  if(A.length === 1) {
    if (A[0] === 1) return 2;
    if (A[0] === 2) return 1;
  }

  var expectedSum = ((A.length+1) * (1 + A.length+1)) / 2;
  var actualSum = 0;

  for (var i = 0; i < A.length; i++) {
    actualSum += A[i];
  }
  return expectedSum - actualSum;
}
