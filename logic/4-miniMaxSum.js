

function minMaxSum (arr){
   
    for(let i = 0 ; i < arr.length; i++){
        let index = i;
        const auxi = arr[i];

        while(index > 0 && auxi < arr[index-1]){
            arr[index] = arr[index - 1];
            index--;
        }
        arr[index] = auxi; 
        
    }

    const maxSum = arr.slice(-4).reduce((acum,elemen) => acum + elemen);
    const minSum = arr.slice(0,4).reduce((acum,elemen) => acum + elemen);
    console.log(minSum,maxSum);

};

minMaxSum([1,3,5,7,9]);

