function solution(A) {
  if (A.length === 0) {
    return -1;
  }
  if (A.length === 1) {
    return 0;
  }
  var stack = [];
  for (var i = 0; i < A.length; i++) {
    var curr = A[i];
    if (stack.length === 0) {
      stack.push(curr);
    } else {
      if (stack[stack.length - 1] !== curr) {
        stack.splice(stack.length - 1);
      } else {
        stack.push(curr);
      }
    }
    //console.log(stack);
  }

  var candidate = -1;
  var leadIndex = -1;
  if (stack.length > 0) {
    candidate = stack[0];
  }
  var counter = 0;
  for (var y = 0; y < A.length; y++) {
    var obj = A[y];
    if (obj == candidate) {
      leadIndex = y;
      counter += 1;
    }
  }

  if (counter > A.length / 2) {
    return leadIndex;
  } else {
    return -1;
  }
}

module.exports = solution;
