function solution(N) {
  if(N === 1) return 4;

  var i = 1,
      smallest = (N+1);

  while( i * i < N){
    if(N%i=== 0){
      x = N/i;
      if((x+i) < smallest){
        smallest = x + i;
      }
    }
    i +=1;
  }

  if( (i * i) === N && (i+i) < smallest) smallest = i+i;

  return smallest*2;
}
