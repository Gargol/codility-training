/* scored 78% so a better solution could be used */
function solution(A) {
  var absCount = 0;
  var tail = 0;
  while (tail <= A.length) {
    var head = tail + 1;

    while (head <= A.length) {
      if (Math.abs(A[head]) === Math.abs(A[tail])) break;
      if (head === A.length ||
          (A[head] > 0 && Math.abs(A[head]) > Math.abs(A[tail]))) {
        absCount += 1;
        break;
      }

      head += 1;
    }

    tail += 1;
  }

  return absCount;
}
