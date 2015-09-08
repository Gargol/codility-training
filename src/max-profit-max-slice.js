/*
 A zero-indexed array A consisting of N integers is given. It contains daily prices
 of a stock share for a period of N consecutive days. If a single share was bought on
 day P and sold on day Q, where 0 ≤ P ≤ Q < N, then the profit of such transaction is
 equal to A[Q] − A[P], provided that A[Q] ≥ A[P]. Otherwise, the transaction brings
 loss of A[P] − A[Q].
 */
function solution(A) {
  if(!A || A.length === 0 || A.length === 1) return 0;

  var min = A[0];
  var diff = 0;

  for(var i = 1; i < A.length; i++ ) {
    if(A[i] < min){
      min = A[i];
    } else if (A[i] - min > diff){
      diff = A[i] - min;
    }
  }

  return diff;
}
