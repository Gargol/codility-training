/*
 You are given integers K, M and a non-empty zero-indexed array A consisting of N integers. Every element of the array is not greater than M.
 You should divide this array into K blocks of consecutive elements. The size of the block is any integer between 0 and N. Every element of the array should belong to some block.
 The sum of the block from X to Y equals A[X] + A[X + 1] + ... + A[Y]. The sum of empty block equals 0.
 The large sum is the maximal sum of any block.
 For example, you are given integers K = 3, M = 5 and array A such that:
 A[0] = 2
 A[1] = 1
 A[2] = 5
 A[3] = 1
 A[4] = 2
 A[5] = 2
 A[6] = 2
 The array can be divided, for example, into the following blocks:

 [2, 1, 5, 1, 2, 2, 2], [], [] with a large sum of 15;
 [2], [1, 5, 1, 2], [2, 2] with a large sum of 9;
 [2, 1, 5], [], [1, 2, 2, 2] with a large sum of 8;
 [2, 1], [5, 1], [2, 2, 2] with a large sum of 6.
 The goal is to minimize the large sum. In the above example, 6 is the minimal large sum.
 */
// int - number of block,
// int - max number in array,
// array
// took 1 hour to solve..
function solution(K, M, A) {
  var beg = M;
  var end = M * Math.ceil(A.length/K);
  var result = -1;

  while (beg <= end) {
    var mid = Math.floor((beg + end) / 2);
    if (checkBlocks(A, K, mid)) {
      end = mid - 1;
      result = mid;
    } else {
      beg = mid + 1;
    }
  }

  return result;
}

function checkBlocks(arr, numberOfBlocks, aimedSum) {
  var usedBlocks = 0,
    currentIndex = 0,
    currentSum = 0;
  while (currentIndex < arr.length) {
    currentSum += arr[currentIndex];
    if (currentSum > aimedSum) {
      usedBlocks += 1;
      currentSum = 0;
    } else {
      currentIndex += 1;
    }
  }

  usedBlocks += 1;

  return usedBlocks <= numberOfBlocks;
}

