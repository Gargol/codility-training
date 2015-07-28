function countCandidate(A, candidateValue) {
    var count = 0;
    for(var i = 0; i< A.length; i++){
        if(A[i] === candidateValue) count +=1;
    }
    return count;
}

function solution(A) {
    if(A.length === 0) return -1;

    var stackSize = 0,
        candidateValue = 0,
        candidateIndex = -1;

    for (var i=0; i < A.length; i++) {
        if(stackSize === 0) {
            stackSize += 1;
            candidateValue = A[i];
            candidateIndex = i;
        } else {
            if(candidateValue !== A[i]) {
                stackSize -= 1;
            } else {
                stackSize +=  1;
            }
        }
    }

    if(stackSize > 0) {
        if(countCandidate(A, candidateValue) > A.length / 2) {
            return candidateIndex
        } else {
            return -1;
        }
    } else {
        return -1;
    }
}
