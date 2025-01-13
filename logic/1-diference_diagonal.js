 const arr = [
    [11,2,4],
    [4,6,5],
    [10,8,-12]
];


// console.log(arr[0][5]);
// console.log(arr[1][4]);
// console.log(arr[2][3]);
// console.log(arr[3][2]);
// console.log(arr[4][1]);
// console.log(arr[5][0]);


// console.log(arr[0][0]);
// console.log(arr[1][1]);
// console.log(arr[2][2]);
// console.log(arr[3][3]);
// console.log(arr[4][4]);
// console.log(arr[5][5])

function diagonalDiference (arr) {
    let count_right = 0;
    let count_left = 0;

    for(let i = 0; i < arr.length ; i++){ //filas
        
        for (let j = 0; j <arr.length ; j++){ //columnas
           if(i === j){
            count_left += arr[i][j];
          
           } 
           
           if(i + j === arr.length-1){
            count_right += arr[i][j];
           }
           
        }

        
    }

    return Math.abs( count_left - count_right);
};

console.log(diagonalDiference(arr))
