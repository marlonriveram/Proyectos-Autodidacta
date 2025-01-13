

/* charSelector --> n-(n-i)  esta formula me ayudo a la soluccion con ejem -->n =4 i=0 ,i ++
  4-(4-1)=1
  4-(4-2)=2
  4-(4-3)=3
  4-(4-4)=4
*/
function staircase (n){ // a mi manera
    
    for(let i = 1; i <=n; i++){
        let lader = '';
      for(let j= n ; j >=1 ;j--){
        
        const charSelector = n-(n-i)
        if (j > charSelector ){
          lader = lader.concat(' ');
        }else{
          lader = lader.concat('#');
        }
      
      }
      console.log(lader);
    }
    
};

staircase(6);


// Metodo de internet con el metodo repeat() de los string

function staircase2 (n) {
  for(i = 1 ; i <= n; i++){

    console.log(' '.repeat(n-i) + '#'.repeat(i));
  }
}

staircase2(6);