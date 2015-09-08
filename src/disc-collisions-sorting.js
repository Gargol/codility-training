function getBoundaries(A){
    var boundaries = [];
    for(var i=0; i < A.length; i++){
        var boundary = {
            left: i - A[i],
            right: i + A[i]
        };
        boundaries.push(boundary);
    }

    return boundaries;
}

function sortBoundaries(arr){
    function boundaryComparator(a, b){
        return a.left - b.left;
    }

    return arr.sort(boundaryComparator);
}

function calculateCollisions(arr){
    var collisionCount = 0;

    for(var i=0; i < arr.length; i++){
        var rightBoundary = arr[i].right;
        var boundaryAcceded = false;
        var boundaryCheckIndex = i+1;

        while(!boundaryAcceded){
            if(arr[boundaryCheckIndex]){
                var comparedLeftBoundary = arr[boundaryCheckIndex].left;

                if(comparedLeftBoundary > rightBoundary){
                    boundaryAcceded = true;
                } else {
                    boundaryCheckIndex +=1;
                    collisionCount += 1;
                    if(collisionCount > 10000000) return -1;
                }
            } else {
                boundaryAcceded = true;
            }
        }
    }

    return collisionCount;
}
/*
 Given an array A of N integers, we draw N discs in a 2D plane such that the I-th disc is centered on (0,I) and has
 a radius of A[I]. We say that the J-th disc and K-th disc intersect if J ≠ K and J-th and K-th discs have at least
 one common point.

 O(N log N) solution
 */
function solution(A) {
    var boundaries = getBoundaries(A);
    var sortedBoundaried = sortBoundaries(boundaries);
    return calculateCollisions(sortedBoundaried);
}
